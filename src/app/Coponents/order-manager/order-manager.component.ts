import { Component, OnInit } from '@angular/core';
import { OrderObject } from 'src/app/classes/order-object';
import { OrderManagerServiceService } from 'src/app/services/order-manager-service.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  constructor(private orderManagerService: OrderManagerServiceService) { }

  allOfHours: Array<OrderObject> = [];
  i: number = 0;
  selectedButton: string = "Morning"
  amountOfPeople = this.orderManagerService.amountOfPeople
  startIndex: number = 0;
  middleIndex: number = 0;
  morningHours: Array<OrderObject> = [];
  noonHours: Array<OrderObject> = [];
  eveningHours: Array<OrderObject> = [];
  selectedTime: string = "Morning";
  continue_repeat_button: string = "";
  currentOrder: any;
  ngOnInit(): void {
    this.orderManagerService.getList().subscribe(
      data => {
        this.allOfHours = data
        while (this.i != this.allOfHours.length) {
          if (this.allOfHours[this.i].availablePlaces == 0) {
            this.allOfHours[this.i].condition = "אזלו"
          }
          else if (this.allOfHours[this.i].isClosed == true)
            this.allOfHours[this.i].condition = "סגור"
          else {
            var numOfTicket =
              this.allOfHours[this.i].condition = (this.allOfHours[this.i].availablePlaces).toString() + "  כרטיסים  "
          }
          if (this.allOfHours[this.i].startTime == "12:00") {

            this.startIndex = this.i;
          }
          if (this.allOfHours[this.i].startTime == "15:00") {
            this.middleIndex = this.i;
          }
          this.i++;
        }
        this.morningHours = this.allOfHours.slice(0, this.startIndex);
        this.noonHours = this.allOfHours.slice(this.startIndex, this.middleIndex);
        this.eveningHours = this.allOfHours.slice(this.middleIndex, this.allOfHours.length)
      },

      err => {

      })
  }
  loadList(time: string) {
    this.selectedButton = time;
    this.selectedTime = time;

  }

  keepChosen(card: OrderObject) {
    this.currentOrder = card
  }
  onRepeatClicked() {
    this.continue_repeat_button = "repeat";
  }
  onContinueClicked() {
    this.continue_repeat_button = "continue";
    this.allOfHours.map((item) => {
      if (item.startTime === this.currentOrder.startTime) {
        item.availablePlaces = item.availablePlaces - this.amountOfPeople;
      }
    })
    this.orderManagerService.allHuorsList = this.allOfHours;
    this.orderManagerService.update(this.allOfHours).subscribe(
      data => {

        alert("ההרשמה נקלטה במערכת")
      },

      err => {

      })
  }
}
