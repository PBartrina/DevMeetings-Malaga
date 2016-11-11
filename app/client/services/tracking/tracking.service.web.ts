import { TrackingServiceCommon } from './tracking.service.common';
import { Injectable } from '@angular/core';
import { Config } from '../../app.config';
import { Http } from '@angular/http';

@Injectable()
export class TrackingService extends TrackingServiceCommon {

    public constructor(config: Config, http: Http) {
        super(config, http);
    }

    trackRoute(route: string) {
        this.submitData(route);
    }

    submitData(route: string) {
        this.sendTrackingData(route);
    }
}
