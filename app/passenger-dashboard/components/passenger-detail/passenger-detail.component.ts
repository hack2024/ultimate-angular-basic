import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <span class="status" [class.checked-in]="detail.checkedIn"> </span>
      <div *ngIf="editing">
        <input 
          type="text" 
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
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
      <button (click)="toggleEdit()">
        {{ editing ? "Done" : "Edit"}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {

  @Input()
  detail: Passenger
  @Output()
  remove: EventEmitter<any> = new EventEmitter()
  @Output()
  edit: EventEmitter<any> = new EventEmitter()

  editing: boolean = false
  
  onNameChange(value: string){
    this.detail.fullname = value;
  }
  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }
  onRemove(){
    this.remove.emit(this.detail)
  }
}
