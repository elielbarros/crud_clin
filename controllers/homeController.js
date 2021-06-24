const patientMiddleware = require('../middlewares/GetDataPatients');

exports.page = async (req,res) => {
    let responseJson = [];

    responseJson.patients = patientMiddleware.getAll();
    
    res.render('index', responseJson);
}

exports.search = async (req,res) => {
    let responseJson = [];

    if(req.body.id || req.body.nome || req.body.cel || req.body.cpf_cnpj || req.body.dataNasc){
        if(req.body.id){
            responseJson.patients = patientMiddleware.getById(req.body.id);
        } 
        else if(req.body.nome){
            responseJson.patients = patientMiddleware.getByName(req.body.nome);
        }
        else if(req.body.cel){
            //responseJson.patients = patientMiddleware.getByTel(req.body.cel);
        }
        else if(req.body.cpf_cnpj){
            responseJson.patients = patientMiddleware.getByCpfCnpj(req.body.cpf_cnpj);
        }
        else if(req.body.dataNasc){
            let data = req.body.dataNasc.split("-");
            responseJson.patients = patientMiddleware.getByDataNasc(`${data[2]}/${data[1]}/${data[0]}`);
        }
       
        
    }
    
    res.render('index', responseJson);
}

