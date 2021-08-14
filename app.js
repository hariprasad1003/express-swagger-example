const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const swaggerui = require('swagger-ui-express');
const swagger_jsdoc = require('swagger-jsdoc');
const swagger_model_validator = require('swagger-model-validator');
const swagger_document = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use('/api/docs', swaggerui.serve, swaggerui.setup(swagger_document))

app.post('/api/nameage', function (req, res) {

    // swagger.validate_model('name_age', req.body);

    console.log("called")

    // console.log(req)
    
    console.log(req.body)

    result_dict = {
    
        "name" : req.body.name, 
        "age"  : req.body.age
    
    };

    // swagger.validate_model('name_age', result_dict);

    res.setHeader('Content-Type', 'application/json');

    res.send(result_dict);

});

app.get('/api/name', function (req, res) {

    result_dict = {
    
        "name" : "Hari", 
        "age"  : 20
    
    };

    // swagger.validate_model('name_age', result_dict);

    res.setHeader('Content-Type', 'application/json');

    res.send(result_dict);

});
 
const port = process.env.PORT || 3002;

app.listen(port, () => console.log(` Listening on port http://localhost:${port}`));