import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input type="text" #username>
    </div>
  `
})
export class AppComponent {
  name: string = 'Fernando'
  handleClick(value: string){
    console.log(value)
  }
}
