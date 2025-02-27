
import mongoose from "mongoose";
const {model, Schema} = mongoose;

const productSchema = new Schema(
    {
        product_names:{
            type: String, 
            required: true
        },
        product_price:{
            type: String, 
            required: true
        },
        product_discount:{
            type: String, 
            required: true,
            default: 0
        },
        images:{
            type:Array ,
            requred: false
        },
        message:{
            type: String, 
            required: true
        },
        status:{
            type: String, 
            required: false
        }      
    },

    {
        timestamps: true
    }
)
const Product = model("Product", productSchema)
export default Product;