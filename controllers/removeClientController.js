const patientMiddleware = require('../middlewares/GetDataPatients');

exports.removeAction = (req,res)=>{
    patientMiddleware.removePatient(req.params.id);
    res.redirect('/');
}