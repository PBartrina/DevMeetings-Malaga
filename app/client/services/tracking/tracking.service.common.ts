import { apiManager } from '../../app.api-manager';
import { Config } from '../../app.config';
import { Routes } from '../../../common';
import { Http } from '@angular/http';

export abstract class TrackingServiceCommon {

    constructor(private config: Config, private http: Http) {
    }

    public abstract trackRoute(route: string): void;

    public abstract submitData(route?: string): void;

    public sendTrackingData(...data: String[]): Promise<any> {
        // common code for posting tracking routes
        return this.http
            .post(apiManager.generateApiUrl(this.config, Routes.TRACKING.url), { routes: data})
            .toPromise()
            .catch(apiManager.handlePromiseError);
    }
}
