module.exports ={
    read:(req,res,next)=>{
        const db = req.app.get('db');
        db.get_houses().then(results=>{
            res.status(200).send(results)
        } )
    },
}