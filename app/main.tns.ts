// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from 'nativescript-angular/platform';
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { AppComponent, APP_ROUTES } from './client/app.component';
import { MenuComponent } from './client/components/menu/menu.component.tns';
import { HomeComponent } from './client/pages/home/home.component';
import { ProductsComponent } from './client/pages/products/products.component';
import { Config, TNS_CONFIG }    from './client/app.config';

@NgModule({
    declarations: [AppComponent, MenuComponent, HomeComponent, ProductsComponent],
    providers: [{ provide: Config, useValue: TNS_CONFIG }],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(APP_ROUTES)]
})
class AppComponentModule { }


platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
