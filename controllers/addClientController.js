const patientMiddleware = require('../middlewares/GetDataPatients');

exports.page = (req,res) => {
    res.render('addClient');
}

exports.addAction = (req,res)=>{
    patientMiddleware.addPatient(req.body);
    res.redirect('/');
}