const db=require('./db')
const Petshow= db.sequelize.define('Pagamento',{
    nome:{
        type:db.Sequelize.STRING
    },
    valor:{
        type:db.Sequelize.DOUBLE
    }
})

module.exports=Pagamento