import {ApplicationComponent} from "./app.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        ApplicationComponent
    ],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule {


}