const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://talamishva:14161415@cluster01.iejjzm8.mongodb.net/apiz?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection done');
}).catch((error) => {
    console.log(error);
})