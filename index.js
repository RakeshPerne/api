const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`my line http://localhost:${PORT}`)
)
app.get('/tshirt', (req, res) => {
        res.status(200).send({
            tshirt: 'My tshirt',
            size: 'large'
        })
});

// app.post('/tshirt/:id', (req, res) => {
//     const {id} = req.params;
//     const {logo} = req.body;

//     if(!logo){
//         res.status(418).send({ message: 'we need logo'})
//     }
//     res.send({
//         tshirt: `Tshirt with my ${logo} and my is is ${id}`
//     });
// });