const patientMiddleware = require('../middlewares/GetDataPatients');

exports.editAction = async (req,res) => {
    await patientMiddleware.updatePatient(req.body);
    res.redirect('/');

}
