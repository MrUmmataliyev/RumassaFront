import { Component } from '@angular/core';
import { HomeInTwoComponent } from "./home-in-two/home-in-two.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { HomeInFourComponent } from "./home-in-four/home-in-four.component";
import { HomeInFiveComponent } from "./home-in-five/home-in-five.component";
import { HomeInThreeComponent } from "./home-in-three/home-in-three.component";
import { HomeInSevenComponent } from "./home-in-seven/home-in-seven.component";
import { HomeInSixComponent } from "./home-in-six/home-in-six.component";
import { HomeInEightComponent } from "./home-in-eight/home-in-eight.component";
import { HomeInNineComponent } from "./home-in-nine/home-in-nine.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeInTwoComponent, NavbarComponent, HomeInFourComponent, HomeInFiveComponent, HomeInThreeComponent, HomeInSevenComponent, HomeInSixComponent, HomeInEightComponent, HomeInNineComponent, FooterComponent]
})
export class HomeComponent {

}
