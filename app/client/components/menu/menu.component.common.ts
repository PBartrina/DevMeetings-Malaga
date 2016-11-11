/**
 * For platform dependant components,
 * having a .component.common can encourage code reuse
 * and enforce implementing abstract methods.
 */

import {OnInit} from '@angular/core';
export abstract class CommonMenuComponent implements OnInit {

    ngOnInit() {
        console.log('I\'m common code');
    }

    abstract methodToImplement(stringArgument: string);
}
