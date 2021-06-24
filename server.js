const dotenv = require("dotenv");
//Serve para não ficar escrevendo certas coisas hardCODED
dotenv.config();

const app = require('./app');

//Setando porta, 3000
app.set('port', process.env.PORT || 3000);

//Ouvindo a porta
const server = app.listen(app.get('port'), ()=>{
    console.log('Rodando na porta: '+ server.address().port);
})

