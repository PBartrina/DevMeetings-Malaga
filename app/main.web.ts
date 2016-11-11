import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent, APP_ROUTES } from './client/app.component';

// Platform dependent component (.tns replaced by .web)
import { MenuComponent } from './client/components/menu/menu.component.tns';

import { HomeComponent } from './client/pages/home/home.component';
import { ProductsComponent } from './client/pages/products/products.component';
import { Config, WEB_CONFIG }    from './client/app.config';

@NgModule({
    declarations: [AppComponent, MenuComponent, HomeComponent, ProductsComponent],
    providers: [{ provide: Config, useValue: WEB_CONFIG }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot(APP_ROUTES)]
})
class AppComponentModule { }

require('./app.scss'); // Global styles are injected
platformBrowserDynamic().bootstrapModule(AppComponentModule);

