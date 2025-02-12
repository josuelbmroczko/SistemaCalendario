const express = require('express');
const router = express.Router();
const db = require('../db');
const Module = require('module');


router.post('/',(req,res)=>{
    const {titulo,descricao,data,horario}= req.body;
    const sql = 'INSERT INTO eventos(titulo,descricao,data,horario)VALUES(?,?,?,?)';
   db.query(sql, [titulo,descricao,data,horario],(err,result)=>{
        if (err)return res.status(500).send(err);
        res.status(201).send({message:'Evento adicionado com sucesso',id: result.insertId});
    });
});


router.get('/',(req,res)=>{
    const sql='SELECT * FROM eventos';
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});


router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const sql = 'DELETE FROM eventos WHERE id = ?';
    db.query(sql,[id],(err)=>{
        if(err)return res.status(500).send(err);
        res.send({message:'Informaçoes Deletadas'})
    });
});


router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {titulo,descricao,data,horario} = req.body;
    const sql = 'UPDATE eventos SET titulo = ?, descricao= ?,data= ?,horario= ? WHERE id = ?';
    db.query(sql,[titulo,descricao,data,horario,id] ,(err)=>{
        if(err) return res.status(500).send(err);
        res.send({message:'atualziando informaçoes'})
    });
});
module.exports =router;