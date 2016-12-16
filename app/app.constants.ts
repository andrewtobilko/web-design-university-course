import {RequestOptions, Headers} from "@angular/http";

export class ApplicationConstants {

    public static get SERVER_URL(): string {
        return 'http://localhost:8080/api/';
    }

    public static get DEFAULT_HTTP_OPTIONS(): RequestOptions {
        return new RequestOptions(
            {headers: new Headers({'Content-Type': ''})}
        );
    }

}