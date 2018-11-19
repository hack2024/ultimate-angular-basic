import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <span class="status" [class.checked-in]="detail.checkedIn"> </span>
          {{ detail.fullname }}
          <p>{{ detail | json }}</p>
          <div class="date">
            Check in date:
            {{
              detail.checkInDate
                ? (detail.checkInDate | date: "yMMMMd" | uppercase)
                : "Not checked in..."
            }}
          </div>
          <div class="children">
            <!--
              para evitar errores por valores null, usamos el safe operator "?"
            -->
            Children: {{ detail.children?.length || 0 }}
          </div>
  `
})
export class PassengerDetailComponent {

  @Input()
  detail: Passenger

}
