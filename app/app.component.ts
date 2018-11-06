import { Component } from '@angular/core'

interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  // el operador ? indica que el campo es opcional
  // puede venir o no desde una request
  checkInDate?: number
}
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3> Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i= index">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
          {{ i }}: {{ passenger.fullname }}
          <p>
            {{ passenger | json }}
          </p>
          <div class="date">
            Check in date:
            {{ passenger.checkInDate ? (passenger.checkInDate | date: "yMMMMd" | uppercase ) : "Not checked in..."}}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: false,
      checkInDate: 1235465321654
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true,
      checkInDate: 1235465321654
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true,
      checkInDate: 1235465321654
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true,
      checkInDate: 1235465321654
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: false
    },
  ];

}
