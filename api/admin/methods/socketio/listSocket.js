module.exports = function(req, res, db, io){
    console.log(io.alives);
    if(io.alives) res.status(200).send({
        success : true,
        data : io.alives
    });
    else res.status(500).send({
        success : false
    });
};