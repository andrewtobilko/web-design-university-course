import {FeedbackService} from "./feedback.service";
import {Feedback} from "./feedback.model";
import {OnInit, Component} from "@angular/core";


@Component({
    selector: 'feedback',
    templateUrl: 'feedback.template.html'
})
export class FeedbackController implements OnInit {

    constructor(private service: FeedbackService) {
    }

    sendFeedback(message: string) {
        this.service.sendFeedback(new Feedback(message));
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

}