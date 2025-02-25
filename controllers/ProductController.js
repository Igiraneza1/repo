import Product from "./models/ProductModals";
export const CreateProduct = async(req,res)=>{
    try{
        const{product_names, product_price, product_discount, message,status}=req.body;
        const newContact = new Product({product_names, product_price, product_discount, message,status});

        await newProduct.save();

        res.status(201).json({success: true, message:'Product created successfully', Product: newProduct});
    }
    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});
    }
}