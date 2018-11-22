import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>

      <passenger-count
        [items]=passengers>
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>

    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  ngOnInit(): void {

    this.passengers = [
      {
        id: 1,
        fullname: "Fernando",
        checkedIn: false,
        checkInDate: null,
        children: null
      },
      {
        id: 1,
        fullname: "Fernando",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: [
          {
            name: "Fernando",
            age: 21
          }
        ]
      },
      {
        id: 1,
        fullname: "Fernando",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: null
      },
      {
        id: 1,
        fullname: "Fernando",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: [
          {
            name: "Fernando",
            age: 21
          }
        ]
      },
      {
        id: 1,
        fullname: "Fernando",
        checkedIn: false,
        checkInDate: null,
        children: [
          {
            name: "Fernando",
            age: 21
          }
        ]
      }
    ];

  }

  handleRemove(event){
    console.log('remove event on parent compontent: ', event);
  }
  handleEdit(event){
    console.log('edit event on parent compontent: ', event);
  }
}
