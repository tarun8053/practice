exposts.deletUser = async (req, res ) => {
    try {
     const { id } = req.params;

    if(!id){
        return res.status(404).json({message : "User is not there"})
    }
    const user =  await User.findByIdAndDelete(id);
    res.status(200).json({message: "user is deleted"})
    
   } catch (err) {
    
    res.status(500).json({err : "something went wrong", error})
    
   }
}