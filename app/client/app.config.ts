/**
 * This is an example of a platform based configuration ready to be injected.
 * During the bootstrapping, the corresponding configuration values are wired using angular's provide()
 * - for Nativescript -> provide(Config, { useValue: TNS_CONFIG })
 * - for Web -> provide(Config, { useValue: WEB_CONFIG }),
 */

export class Config {
    SERVICES_URL: string;
}

let localhost_url = 'http://localhost:3000';
let android_emulator_url = 'http://10.0.2.2:3000';

export const TNS_CONFIG: Config = {
    SERVICES_URL: global.android ? android_emulator_url : localhost_url
};

export const WEB_CONFIG: Config = {
    SERVICES_URL: localhost_url
};
