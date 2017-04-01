import { Component} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl:'View/home.html'
})
export class AppComponent {
    constructor() {
        this.name = 'Afzal'
    }
    name: string;
    sayMyName() {
        return this.name;
    }
}