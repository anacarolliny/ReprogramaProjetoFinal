const dotenv = require('dotenv')


const mongoose = require('mongoose')

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco de dados conectado")
    } catch (error) {
        console.log(error)
    }
}
dotenv.config()

module.exports = {
    connect
}

// const MONGODB_URI =
//   "mongodb+srv://" +
//   process.env.DB_USER +
//   ":" +
//   process.env.DB_PASSWORD +
//   "@" +
//   process.env.DB_HOST +
//   "/" +
//   process.env.DB_NAME +
//   "?retryWrites=true&w=majority";

// const connect = async () => {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Conect database :)");
//   } catch (error) {
//     console.log("Erro: ", error.message);
//   }
// };