import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'

// Services
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpModule } from '@angular/http';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {

}
