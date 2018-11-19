import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count
        [items]=passengers
      ></passenger-count>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers">
          <passenger-detail
            [detail]="passenger"
          ></passenger-detail>
        </li>
      </ul>
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

}
