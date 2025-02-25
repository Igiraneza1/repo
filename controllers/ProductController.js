import Product from "./models/ProductModals";
export const CreateProduct = async(req,res)=>{
    try{
        if(!req.files.images || req.files.images.length === 0){
            status(400).json({success: false, message: "No image uploaded"});
        }

        const result = await cloudinary.uploader.upload(req.files.image[0].path);

        const images = result.secure_url;

        const{product_names, product_price, product_discount, message,status}=req.body;
        const newProduct = newProduct({product_names, product_price, product_discount, message,status});

        await newProduct.save();

        res.status(201).json({success: true, message:'Product created successfully', Product: newProduct});
    }
    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});
    }
}