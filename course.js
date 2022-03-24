//testing git
const Joi = require('Joi');
const express = require('express');

const app = require('express')();
const PORT = 3001;
app.use(express.json());

app.listen(
    PORT,
    ()=>console.log(`my new port is http://localhost:${PORT}`)
)

const courses = [
    { id: 2100, cname: 'DBMS'},
    { id: 1093,cname: 'CPSM'}
]
app.get('/newcourse', (req,res) =>{
    res.send(courses)
    // res.status(200).send({
    //     course : 'DBMS',
    //     courseid: '2100'
    // })
});

app.get('/singlecourse/:id', (req,res)=>{
   const course = courses.find(c=>c.id ===parseInt(req.params.id))
   if(!course) res.status(404).send("course not found");
   res.send(course)
})
//general creation of sample data using postman 
app.post('/createcourse', (req,res)=>{
    //validation if cname is present in input
    const schema ={
        cname: Joi.string().min(3).required()
    };
    const result= Joi.validate(req.body, schema);
    if(result.result){
        res.status(400).send(result.error);
        return;
    }
    const course ={
    id: courses.length+1,
    cname: req.body.cname
    };
    courses.push(course);
    res.send(course);
});
