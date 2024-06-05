import { Component } from '@angular/core';
import { DeliveryService } from '../../../services/delivery.service';
import { Delivery } from '../../../interfaces/delivery';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adress-dostavka',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adress-dostavka.component.html',
  styleUrl: './adress-dostavka.component.scss'
})
export class AdressDostavkaComponent {

  resultData! : Delivery;
  setValue: Delivery= {
    fullName : "",
    email : "",
    country : "",
    region : "",
    city : "",
    index : "",
    streetHouse : "",
    details : ""
  }
  constructor(private deliveryService : DeliveryService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createDelevery(data : Delivery){
    this.deliveryService.createDelivery(data).subscribe({
      next: (result) =>{
        this.resultData = result;
        console.log(result)
      },
      error: (err) =>{
        console.log(err)
      }
    });
  }

  setDelevery(){
    this.createDelevery(this.setValue)
  }
}
