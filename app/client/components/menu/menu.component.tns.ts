import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMenuComponent } from './menu.component.common';

@Component({
    moduleId: module.id,
    selector: 'pang-menu',
    templateUrl: 'menu.component.tns.html',
    styleUrls: ['menu.component.tns.css']
})
export class MenuComponent extends CommonMenuComponent {


    constructor(private router: Router) {
        super();
    }

    public isRouterLinkActive(link): boolean {
        if (this.router.url.toLocaleLowerCase() === link.toLocaleLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    methodToImplement(stringArgument: string) {

    };
}
