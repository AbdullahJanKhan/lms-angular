import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lms';
  name = 'Abdullah Jan Khan';
  testVar = 'Testing 2 way data binding';
  save() {
    alert('You Clicked')
  }
}
