const express = require('express');
const router = express.Router();
const articulos = require('../models/task');

router.get('/tasks',async (req, res)=>{
    //res.send('Esta es una ruta de la tareas')
    const articles = await articulos.find();
    console.log(articles);
    res.json(articles);
})

router.post('/tasks', async(req, res)=>{
    //new articulos();
    //console.log(new articulos());
    const articulos_body = new articulos(req.body);
    await articulos_body.save();
    res.json({
        status: "Articulo guardado"
    });
});

router.put('/tasks/:id',async(req, res)=>{
    //console.log(req.params.cod);
    await articulos.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "Articulo actualizado"
    })

});

router.delete('/tasks/:id',async(req, res)=>{
    //console.log(req.params.cod);
    await articulos.findByIdAndRemove(req.params.id);
    res.json({
        status: "Articulo eliminado"
    })

});

module.exports = router;