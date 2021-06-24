var dataPatient = require("../data");
const fs = require('fs');

exports.getAll = () => {
    return dataPatient;
}

exports.getById = (id) => {
    let response = []
    dataPatient.forEach((item,index)=>{
        if(item.id== id){
            response.push(item);
        }
    })
    return response;
}

exports.getByCpfCnpj = (cpf_cnpj) => {
    let response = []
    console.log(cpf_cnpj);
    dataPatient.forEach((item,index)=> {
        console.log(item.cpf_cnpj);
        if(item.cpf_cnpj == cpf_cnpj){
            response.push(item);
        }
    });
    return response;
}

exports.getByDataNasc = (dataNasc) => {
    let response = [];
    dataPatient.forEach((item,index) => {
        if(item.dataNasc == dataNasc ){
            response.push(item);
        }
    });
    return response;
}

exports.getByName = (nome) => {
    let response = []
    dataPatient.forEach((item,index)=>{
        if(item.nome){
            if(item.nome.toLowerCase().indexOf(nome.toLowerCase())!= -1){
                response.push(item);
            }
        }
    })
    return response;
}

exports.addPatient = (client) => {
    
    let aux = parseInt(dataPatient[dataPatient.length-1].id) + 1;
    client.id = `${aux}`;
    console.log(client.id);
    let data = client.dataNasc.split("-");
    client.dataNasc = `${data[2]}/${data[1]}/${data[0]}`;
    dataPatient.push(client);
    save();
}

exports.updatePatient = async (client) => {

    await Promise.all(dataPatient.map(async function (patient,indice) {
        if(patient.id === client.id){
           patient.nome = client.nome;
           patient.dataNasc = client.dataNasc;
           patient.cpf_cnpj = client.cpf_cnpj;
           patient.cel = client.cel;
        }
    }));
    save();

}

exports.removePatient = async (id) => {

    await Promise.all(dataPatient.map(async function (item, index) {
        if(id === item.id){
            dataPatient.splice(index,1);
        }
    }));
    save();

}

 function save(){
    fs.writeFile('./data.js', 
    `module.exports = ${JSON.stringify(dataPatient)}`,{flag: 'w'}, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo! data');
    });    
}