import {Component, ElementRef} from '@angular/core';
import {models} from '../../../common/models';

@Component({
    moduleId: module.id,
    selector: 'pang-product',
    templateUrl: 'product.component.tns.html',
})
export class ProductComponent {
    name: string;
    description: string;
    price: number;

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

}