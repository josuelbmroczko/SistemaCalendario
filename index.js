require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); 
const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors({
    origin:"http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());



const eventoCalendario = require('./rotas/crudCalendario');
app.use('/eventoCalendario',eventoCalendario);


app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})