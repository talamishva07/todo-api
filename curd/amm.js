const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

const schemalist = require('../model/schema');


router.post('/users', async (req, res) => {
    const { nameOk, emailOk, passwordOk } = req.body;
    // console.log('req.body::: ', req.body);
    const dataAdd = await schemalist.create({
        name: nameOk,
        email: emailOk,
        password: passwordOk,
    })

    console.log('dataAdd::: ', dataAdd);
    res.send({ data: "sended" });
});

router.get('/list-todo', async (req, res) => {
    const list = await schemalist.find({});
    console.log(list);
    res.send({ list });

});
router.delete('/delete-todo/:id', async (req, res) => {
    try {

        const removeStudent = await schemalist.findByIdAndDelete(req.params.id);
        // console.log(removeStudent);
        res.send({ message: 'The student was removed' })

    } catch (error) {
        return res.send(error)
    }
})
router.get('/get-edit-todo/:id', async (req, res) => {
    try {
        const getdata = await schemalist.findById(req.params.id);
        console.log(getdata);
        return res.send({ getdata });
    } catch (error) {
        return res.send(error)

    }
})

router.put('/update-todo/:id', async (req, res) => {
    try {
        const updatedata = await schemalist.findByIdAndUpdate(
            req.params.id,
            req.body
        );

        console.log(updatedata);
        return res.send({ message: 'The data was updated' });

    } catch (error) {
        return res.send(error)

    }



});
module.exports = router;