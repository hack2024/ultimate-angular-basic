import { Component } from '@angular/core'

interface Children{
  name: string,
  age: number
}
interface Passenger{
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Children[] | null
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
          <div class="children">
            <!-- para evitar errores por valores null, usamos el safe operator "?"-->
            Children: {{ passenger.children?.length || 0}}
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
      checkInDate: 1235465321654,
      children: null
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: true,
      checkInDate: 1235465321654,
      children: [{
        'name': 'Fernando',
        'age': 21
      }]
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
      children: [{
        'name': 'Fernando',
        'age': 21
      }]
    },
    {
      id: 1,
      fullname: "Fernando",
      checkedIn: false,
      checkInDate: null,
      children: [{
        'name': 'Fernando',
        'age': 21
      }]
    },
  ];

}
