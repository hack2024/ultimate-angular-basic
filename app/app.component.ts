import { Component } from '@angular/core'

interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean
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
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3> Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i= index">
          <span
            class="status"
            [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3> Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i= index">
          <span
            class="status"
            [ngStyle]="{
              'backgroundColor': (passenger.checkedIn ? 'green' : 'red')}">
          </span>
          {{ i }}: {{ passenger.fullname }}
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
      checkedIn: false
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true
    },
  ];

}
