import {models, Routes} from '../common';
let express = require('express');
let cors = require('cors');

export let app = express();

app.use(cors());
configureApp(app);

let receivedRoutes: Array<string> = [];

let products: models.Product[] = [
            {
                id: 1,
                name: 'Cervecita',
                description: 'Tranquilos, que no es Cruzcampo',
                price: 1.50
            }, {
                id: 2,
                name: 'Pescaíto frito',
                description: 'Pechá de crías de pescado que no quiere nadie',
                price: 2.35
            }, {
                id: 3,
                name: 'Coquinas',
                description: 'Porque semos unos finos',
                price: 5.00
            }, {
                id: 4,
                name: 'Boquerones',
                description: 'Pescados al lado de la Farola',
                price: 3.45
            }, {
                id: 5,
                name: 'Jamón de bellota',
                description: 'Con sus vetas de grasita rica',
                price: 12.35
            }, {
                id: 6,
                name: 'Tortilla',
                description: 'CON cebolla',
                price: 4.10
            }];


app.route(Routes.PRODUCTS_LIST.url)
    .get((req, res) => {
        res.json(products);
    });

app.route(Routes.PRODUCT_DETAIL.url)
    .get((req, res) => {
        let result = products.filter(product => product.id === parseInt(req.params.id, 10));
        if (result[0]) {
            res.json(result[0]);
        } else {
            res.status(404).send('No such product');
        }
    });

app.route(Routes.TRACKING.url)
    .post((req, res) => {
        const routes: Array<string> = req.body.routes;
        if (!routes) {
            return res.status(422).send({ error: 'Invalid routes.' });
        } else {
            routes.forEach( route => {
                receivedRoutes.push(route);
            });
            console.log('statistics', getStatistics());
        }
    });

function getStatistics(): string {
    let statistics = '';
    let sum = {};
    receivedRoutes.forEach( route => {
        if (sum[route]) {
            sum[route]++;
        } else {
            sum[route] = 1;
        }
    });
    Object.keys(sum).forEach( key => {
        statistics += key + ': ' + (sum[key] / receivedRoutes.length * 100).toFixed(2) + '% ';
    });
    return statistics;
}

// __________________________________________//
/** Express specifics - nothing interesting*/

function configureApp(app) {
    let bodyParser = require('body-parser');
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    // Logs time since epoch + method + url
    let timeLog = (req, res, next) => {
        console.log(Date.now(), req.method, req.path);
        next();
    };
    app.use(timeLog);
}
