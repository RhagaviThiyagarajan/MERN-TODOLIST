const Todo=require('../model/todosModel');



exports.getAllTodos=async(req,res)=>{
    try{
        const {id:todoId}=req.params
        const todos=await Todo.find({}).sort({
            createdAt:-1
        })

  

        try{
            res.status(200).json({
                message:'Get all todos successfully',
                todos:todos,
            });

        } catch(error)
        {
            res.status(500).json({error:error.message});

        }


    } catch(error)
    {
        res.status(500).json({error:error.message});
    }
};



//post


exports.createATodo=async(req,res)=>{
    const newToDo=new Todo(req.body);
    await newToDo.save((err)=>{
        if(err){
            res.status(500).json({
                message:err.message,
            });


        }else{
            res.status(200).json({
                message:'create a todo successfully'
            });
        }
    })
}

//update a todo
//put method


exports.updateATodo = async (req, res) => {
    try {
      const { id: todoId } = req.params;
      const todo = await Todo.findByIdAndUpdate(todoId, req.body, { new: true, runValidators: true });
  
      if (!todo) {
        return res.status(404).json({ msg: `No todo with id: ${todoId}` });
      } else {
        res.status(200).json({
          msg: `Todo with id: ${todoId} updated successfully.`,
          todo: todo,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


  //delete
  exports.deleteATodo=async(req,res)=>{
    try{
        const { id:todoId}=req.params;
        const todo=await Todo.findByIdAndDelete(todoId);
    
    if(!todo)
    {
        return res.status(404).json({
            msg:`No todo with id: ${todoId}`
        });
    }
    else{
        res.status(200).json({
            message:`Todo with id: ${todoId} deleted successfully`,
            todo:todo,
        });
    }

        }catch(error)
        {
            res.status(500).json({
                error:error.message
            });
        }
    };
    
    