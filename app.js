const express = require("express");
const app = express();
const Petshow = require("./models/Petshow")
const path=require ('path');//enderço de cada rota
const router=express.Router();// trabalha com as rotas
const moment = require('moment');
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Rotas
router.get('/petshow', function(req, res){
    res.sendFile(path.join(__dirname+'/petshow.html'));
});

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.post('/petshow', function(req, res){
    
    Petshow.create({
        nome: req.body.nome,
        raça: req.body.valor
    }).then(function(){
        res.redirect('/petshow')
       
    }).catch(function(erro){
        res.send("Erro: Pet não foi cadastrado com sucesso!" + erro)
    })
     
});
router.get('/lista', function(req, res){
    Petshow.findAll().then(function(petshow){
        res.render('petshow', {petshow: petshow});
    })
    
});
router.get('/del-petshow/:id', function(req, res){
    Petshow.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/petshow');
        res.send(" apagado com sucesso!");
    }).catch(function(erro){
        res.send("não apagado com sucesso!");
    })
});
router.get('/edit-petshow/:id', function(req, res){
    Petshow.findByPk (req.params.id).then(function(petshow){
        res.render('editar', {petshow: petshow});
    })
});	


router.post('/edit-petshow/:id', function(req, res){
    Petshow.update(   
    {nome: req.body.nome,
    raca: req.body.raca},
    {where: {'id': req.params.id}}
    ).then(function(){
        res.redirect('/lista')
       
    }).catch(function(erro){
        res.send("Erro: não foi cadastrado com sucesso!" + erro)
    })
     
});



app.use('/',router);
app.use('/petshow',router);
app.use('/lista',router);
app.use('/del-petshow/:id',router);
app.use('/edit-petshow/:id',router);

app.listen(8080);