const mongoose = require('mongoose')


const connectToDatabase = async() => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.ypbh8gj.mongodb.net/database?retryWrites=true&w=majority`, 
    (error) =>{
        if (error){
            return console.log('Ocorreu umm erro ao se conectar com o banco de dados: ', error)
        }
         return console.log("Conexão ao banco de dados realizada com sucesso!")
    })
}


module.exports = connectToDatabase;