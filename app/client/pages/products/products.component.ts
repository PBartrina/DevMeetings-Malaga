import {Component, ElementRef} from '@angular/core';
import {models} from '../../../common/models';

import {SampleService} from '../../services/sample.service';

@Component({
    moduleId: module.id,
    selector: 'pang-products',
    templateUrl: 'products.component.tns.html',
})
export class ProductsComponent {

    title: string = 'Products List';
    description: string = 'API routes and interfaces are shared between server and clients';

    products: models.Product[];
    loadedProduct: models.Product;

    public constructor(private sampleService: SampleService) {
        sampleService.getProducts()
            .subscribe(products => this.products = products);
    }

    select(product: models.Product) {
        this.sampleService.getProduct(product.id)
            .subscribe(loadedProduct => this.loadedProduct = loadedProduct);
    }


    /**
     * Sometimes, components can be almost fully reused between platforms
     * global.android and global.web can help implement small platform specific logic
     */
    remove(product: models.Product, productElement?: ElementRef) {
        if (global.android) {
            let explosion = require('nativescript-explosionfield');
            explosion.explode(productElement);
            setTimeout(() => {
                this.removeProduct.call(this, product.id);
            }, 500);
        } else {
            this.removeProduct.call(this, product.id);
        }
    }


    private removeProduct(id: number) {
        for (let index = 0; index < this.products.length; index++) {
            if (id === this.products[index].id) {
                this.products.splice(index, 1);
            };
        }
    }
}
