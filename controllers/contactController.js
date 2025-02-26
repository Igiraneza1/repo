import Contact from "./models/contactModal.js";

export const CreateContact = async(req,res)=>{
    try{
        const{names, email, subject, message, phone, status}=req.body;
        const newContact = new Contact({names, email, subject, message, phone, status});

        await newContact.save();

        res.status(201).json({success: true, message:'Contact created successfully', Contact: newContact});
    }

    catch(error){
        res.status(500).json({success:false, message:'Server Error', error: error.message});
    }
}

export const getAllContact=async(req,res)=>{
    try{
        const contacs = contactRouter.find()
        res.status(200).json({success:true, contacts})
    }
        catch(error)
    {

    }

}
export const getContactById=async(req,res)=>{
    try{
        const {id}=req.params;
    const contacts = await Contact.findById(id);
    if (!contacts){
        return res.status(400).json({success: false, message: "Contanct not found"});
    }
    res.status(200).json({success: true, contacts});
}
catch(error)
{
    res.status(500).json({success: false, message: "Server Error", error: error.message });
}
    }
    export const deleteContactById=async(req,res)=>{
        try{
            const{id}=req.params;
            const contact = await Contact.findByIdAndDelete(id);
        
        if (!contacts){
            return res.status(400).json({success: false, message: "Contanct not found"});
        }
        res.status(200).json({success: true, message: "Contact deleted successfully" });        
    }
    catch(error)
{
    res.status(500).json({success: false, message: "Server Error", error: error.message });
}
    }

    

export const updateContactById=async(req,res)=>{
    try{
        const {id}=req.params;
    const updateData = await updateData.findByIdAndUpdate(id);
    if (!updateData){
        return res.status(400).json({success: false, message: "Contanct not found"});
    }
    res.status(200).json({success: true, contacts});
}
catch(error)
{
    res.status(500).json({success: false, message: "Server Error", error: error.message });
}
    }