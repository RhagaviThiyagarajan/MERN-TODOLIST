exports.notFoundRoute=(req,res,next)=>{
    res.status(404).json({
        message:'Sorry Your req was not processed'
    });


    exports.errorHandler=(err,req,res,next)=>{
        if(res.headersSent)
        {
            return next('Something went wrong');
        }else{
            if(err.message)
            {
                res.status(500).json({message:err.message});
            }else{
                res.status(500).json({message:'THere was an error'});
            }
        }
    };
}