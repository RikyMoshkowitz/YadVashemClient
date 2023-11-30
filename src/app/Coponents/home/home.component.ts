import { Component, OnInit } from '@angular/core';
import { OrderManagerServiceService } from 'src/app/services/order-manager-service.service';
import { OrderManagerComponent } from '../order-manager/order-manager.component';

@Component({
  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private orderManagerService: OrderManagerServiceService) { }

  ngOnInit(): void {
  }
  value=''
  showOrderManager:boolean=false;
  
  OnEnter(amountOfPeople:string){
    this.value=amountOfPeople;
    this.showOrderManager=true;
    this.orderManagerService.amountOfPeople=(parseInt)(amountOfPeople);
  }
}
