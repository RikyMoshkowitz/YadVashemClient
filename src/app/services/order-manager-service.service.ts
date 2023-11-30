import { Injectable } from '@angular/core';
import { OrderObject } from '../classes/order-object';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderManagerServiceService {
  Url="https://localhost:7005/api/YadVashemSystem";
  constructor(private myHttp:HttpClient) { }
  allHuorsList:any;
  amountOfPeople:number=0;
  getList():Observable<Array<OrderObject>>
  {
    this.allHuorsList= this.myHttp.get<Array<OrderObject>>(this.Url);
    return this.allHuorsList;
  }
  update(newOrdersObjectList:Array<OrderObject>):Observable<Array<OrderObject>>
  {
    return this.myHttp.put<Array<OrderObject>>(this.Url + "/Update", newOrdersObjectList);
  }


}
