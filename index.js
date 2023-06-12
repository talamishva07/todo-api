const { json } = require('express');
var cors = require('cors');
const express = require("express");

const app = express();
app.use(json());
app.use(cors());

require('./connection/connetion');
app.listen(2016, () => {
    console.log("i am server");
});

app.use('/api', require('./curd/amm'));
// require('./API/okkkk');
app.post('/ok', (req, res) => {
    res.send({ data: "send" });
})


// app.post('/users', async (req, res) => {
//     const { nameOk, emailOk, passwordOk } = req.body;
//     // console.log('req.body::: ', req.body);
//     const dataAdd = await schemalist.create({
//         name: nameOk,
//         email: emailOk,
//         password: passwordOk,
//     })

//     console.log('dataAdd::: ', dataAdd);
//     res.send({ data: "sended" });
// });

// app.get('/list-todo', async (req, res) => {
//     const list = await schemalist.find({});
//     console.log(list);
//     res.send({ list });

// });
// app.delete('/delete-todo/:_id', async (req, res) => {
//     try {

//         const removeStudent = await schemalist.deleteOne(req.params.id);
//         console.log(removeStudent);
//         res.send({ message: 'The student was removed' })

//     } catch (error) {
//         return res.send(error)
//     }
// })
// app.get('/get-edit-todo/:id', async (req, res) => {
//     const getdata = await schemalist.findById(req.params.id);
//     console.log(getdata);
//     res.send(getdata);
// })

// app.put('/update-todo/:_id', async (req, res) => {
//     const updatedata = await schemalist.findByIdAndUpdate(
//         req.params.id,
//         req.body
//     );

//     res.send(req.body);
//     console.log(req.body);

// });







