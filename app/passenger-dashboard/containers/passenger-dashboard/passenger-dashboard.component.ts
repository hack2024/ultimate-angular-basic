import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count></passenger-count>
      <passenger-detail></passenger-detail>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"> </span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date:
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: "yMMMMd" | uppercase)
                : "Not checked in..."
            }}
          </div>
          <div class="children">
            <!--
              para evitar errores por valores null, usamos el safe operator "?"
            -->
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  ngOnInit(): void {

    console.log("ngOnInit");
    this.passengers = [
      {
        id: 1,
        fullname: "Fernando",
        checkedIn: false,
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
