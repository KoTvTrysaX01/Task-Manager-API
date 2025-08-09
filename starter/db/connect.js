const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://vadim:Live2015@nodeexpressprojects.ni3wnip.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;


