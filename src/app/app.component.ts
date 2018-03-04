// this file contains our page header
import { Component } from '@angular/core';

@Component({
  // the css selector for the HTML element where we want the component to load
  selector: 'racing-app',
  // the content we want to load inside our selector
  template: `
  <header class="container">
  <h1>{{ heading }}</h1>
  </header>
  <my-races></my-races>
  `
})
export class AppComponent {
  title = 'Ultra Racing Schedule';
}
