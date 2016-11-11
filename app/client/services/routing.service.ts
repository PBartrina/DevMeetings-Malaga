import { TrackingService } from './tracking/tracking.service.tns';
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RoutingService {

    constructor( private router: Router, trackingService: TrackingService) {
        // subscribing to navigation end events
        router.events.filter(e => e instanceof NavigationEnd).subscribe( e => {
            trackingService.trackRoute(e['urlAfterRedirects']);
        });
    }

}
