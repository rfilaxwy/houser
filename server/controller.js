module.exports ={
    read:(req,res)=>{
        const db = req.app.get('db');
        db.get_houses().then(result=>{
            res.status(200).send(result)
        })
    },
    delete:(req,res)=>{
        const db = req.app.get('db');
        db.delete_house(req.params.id).then(result=>{
            db.get_houses().then(result=>{
                res.status(200).send(result)
            })
        })
    },
    post:(req,res)=>{
        const db =req.app.get('db');
        const {name,address,city,states,zipcode,image,monthlymortgage,desiredrent}=req.body;
        db.save_house(name,address,city,states,zipcode,image,monthlymortgage,desiredrent).then(result=>{
            db.get_houses().then(result=>{
                res.status(200).send(result);
            })
        })
    }
}