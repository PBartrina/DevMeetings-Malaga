import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pang-home',
    templateUrl: 'home.component.tns.html'
})
export class HomeComponent {
    title: string = 'Polymorphic Seed';
    description: string = 'A starter project to help build polymorphic applications in Angular 2 + typescript + nativescript';
}
