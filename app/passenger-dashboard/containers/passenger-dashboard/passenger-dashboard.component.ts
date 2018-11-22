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
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
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
        fullname: "Leila",
        checkedIn: false,
        checkInDate: null,
        children: null
      },
      {
        id: 2,
        fullname: "Mauricio",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: [
          {
            name: "Thiago",
            age: 10
          }
        ]
      },
      {
        id: 3,
        fullname: "Fernando",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: null
      },
      {
        id: 4,
        fullname: "Liliana",
        checkedIn: true,
        checkInDate: 1235465321654,
        children: [
          {
            name: "Fernando",
            age: 31
          }
        ]
      },
      {
        id: 5,
        fullname: "virgina",
        checkedIn: false,
        checkInDate: null,
        children: [
          {
            name: "Maximo",
            age: 6
          }
        ]
      }
    ];

  }

  handleRemove(event: Passenger){
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id != event.id
    });
  }
  handleEdit(event: Passenger){
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger
    });
  }
}
