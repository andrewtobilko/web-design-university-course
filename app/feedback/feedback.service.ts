import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Feedback} from "./feedback.model";
import {ApplicationConstants} from "../app.constants";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs";

@Injectable()
export class FeedbackService {

    private postUrl: string = ApplicationConstants.SERVER_URL + 'feedback';

    constructor(private http: Http) {}

    sendFeedback(feedback: Feedback) : Observable<Feedback> {
        return this.http.post(this.postUrl,
            feedback,
            ApplicationConstants.DEFAULT_HTTP_OPTIONS)
            .map(this.parseResponse)
            .catch(this.handleErrorResponse);
    }

    private parseResponse(response: Response) {
        return response.json().data || {};
    }

    private handleErrorResponse(response: Response | any) {
        return Observable.throw(
            response instanceof Response ?
                response.json().error :
                response.toString()
        );
    }

}