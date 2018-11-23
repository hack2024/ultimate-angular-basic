import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'

// Services
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {

}
