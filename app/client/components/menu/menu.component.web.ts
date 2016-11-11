import { Component } from '@angular/core';
import {CommonMenuComponent} from './menu.component.common';

@Component({
    moduleId: module.id,
    selector: 'pang-menu',
    templateUrl: 'menu.component.web.html'
})
export class MenuComponent extends CommonMenuComponent {
    constructor() {
        super();
    }

    methodToImplement(stringArgument: string) {

    };
}
