import { Config } from './app.config';
import * as Rx from 'rxjs';

export const apiManager = {
    generateApiUrl,
    handleObservableError,
    handlePromiseError
};

function generateApiUrl(config: Config, route: string, params?: { key: string, value: any }[]) {
    let url = config.SERVICES_URL + route;
    if (params) {
        for (let index = 0; index < params.length; index++) {
            let param = params[index];
            url = url.replace(param.key, param.value);
        }
    }
    return url;
}

function getErrorMsg(error: any): string {
    return (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` :
        'Server error';
}

function handleObservableError(error: any): Rx.Observable<any> {
    let errMsg = getErrorMsg(error);
    console.error(errMsg); // log to console instead
    return Rx.Observable.throw(errMsg);
}

function handlePromiseError(error: any): Promise<any> {
    let errMsg = getErrorMsg(error);
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
}