import {Injectable} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AgmLoaderService implements MapsAPILoader {
    private scriptLoadingPromise: Promise<any>;

    load(): Promise<any> {
        if (this.scriptLoadingPromise) {
            return this.scriptLoadingPromise;
        }

        const callback = `mGridGoogleMapsLazyMapsAPILoader`;
        const key = environment.license.googleMap; // or you can get key async

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = `https://maps.googleapis.com/maps/api/js?v=3&key=${key}&callback=${callback}`;

        this.scriptLoadingPromise = new Promise((resolve: (...args) => void, reject: (...args) => void) => {
            window[callback] = () => resolve();
            script.onerror = (error: Event) => reject(error);
        });

        document.body.appendChild(script);
        return this.scriptLoadingPromise;
    }
}
