import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

// Container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'

// Components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'

// Services
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpModule
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
