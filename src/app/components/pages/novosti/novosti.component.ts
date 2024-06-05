import { Component } from '@angular/core';
import { NovostiOneComponent } from "./novosti-one/novosti-one.component";

@Component({
    selector: 'app-novosti',
    standalone: true,
    templateUrl: './novosti.component.html',
    styleUrl: './novosti.component.scss',
    imports: [NovostiOneComponent]
})
export class NovostiComponent {

}
