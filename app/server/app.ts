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
                name: 'Product 1',
                description: 'Description of product 1',
                price: 23.45
            }, {
                id: 2,
                name: 'Product 2',
                description: 'Description of product 2',
                price: 12.35
            }, {
                id: 3,
                name: 'Product 3',
                description: 'Description of product 3',
                price: 34.10
            }, {
                id: 4,
                name: 'Product 4',
                description: 'Description of product 4',
                price: 23.45
            }, {
                id: 5,
                name: 'Product 5',
                description: 'Description of product 5',
                price: 12.35
            }, {
                id: 6,
                name: 'Product 6',
                description: 'Description of product 6',
                price: 34.10
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
