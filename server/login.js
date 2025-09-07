
const express=require('express')
const cors = require('cors');


//mongoose packages
const mongoose=require('mongoose')
const y=require('./mongodb.js')
const { Users, Products } = require('./mongodb.js');

const multer = require('multer');
const app=express()
const path=require('path')
const port=3500;
app.use(cors());
app.use(express.text());

//
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
dotenv.config();


app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });
app.use(express.urlencoded({ extended: true }));


//
cloudinary.config({
  cloud_name:"dzu51wvvf",
  api_key:"731871515934731",
  api_secret:"gtnlnf0RrNQkf2jfNg0FpCeqeCw",
});

app.post('/',(req,res)=>{
    const {name,password}=req.body;
    console.log(name,password)
    main().catch(err=>console.log(err));
        async function main(){
            await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
            d=await y.Users.exists({useremail:name,password:password})
         
        
    if(d!==null){

            res.json({ message: true });
        }
    else{
            console.log("it is not found")
            res.json({ message: false });
    }}
})


app.post('/newreg',(req,res)=>{
    const {name,email,t1}=req.body;
    console.log(name,email,t1)
    if(name.length>0 && email.length>0){
        main().catch(err=>console.log(err));
        async function main(){
            await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
            const d=await y.Users.create({username:name,useremail:email,password:t1})
            console.log(d);
            
        }
    res.json({message:true})}
})


app.get('/product',(req,res)=>{
  
    main().catch(err=>console.log(err));
        async function main(){
            await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
            const d=await y.Products.find()
        
    res.json(d)}
});


app.post('/product',(req,res)=>{
     two=req.body;
    console.log(two)
    main().catch(err=>console.log(err));
        async function main(){
            await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
            const d=await y.Products.find({desc: { $regex: two, $options: 'i' }})
            console.log(two);
        
    res.json(d)}

});

app.post('/Card', async (req, res) => {

    let { compoundArray } = req.body; 
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
    const ids = compoundArray.map(id => new mongoose.Types.ObjectId(id));
    const d = await y.Products.find({ _id: { $in: ids } });
    console.log("Fetched Products:", d);
    res.json(d);
  
});




app.get('/product/:id',(req,res)=>{
    const id =req.params.id;
    console.log(id);
     main().catch(err=>console.log(err));
        async function main(){
            await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
            const d=await y.Products.findById({_id:id})
    console.log(d)
    res.json(d);}
  
});


app.post("/Sell", upload.single("img"), async (req, res) => {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
  try {
    const { desc, cos, dis, nop, mob } = req.body;

    // Upload to Cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: "uploads" }, (error, result) => {
          if (result) resolve(result);
          else reject(error);
        });
        stream.end(fileBuffer);
      });
    };

    const result = await streamUpload(req.file.buffer);

    // Save to MongoDB
    const product = new Products({
      name: result.original_filename,
      url: result.secure_url,
      public_id: result.public_id,
      desc,
      cos,
      dis,
      nop,
      mob,
    });

    await product.save();

    res.json({ message: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});





app.listen(port, () => console.log(`Server running on http://localhost:${port}`));


