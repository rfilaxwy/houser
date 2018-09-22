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
    }
}