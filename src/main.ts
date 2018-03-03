import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //for running Angular websites
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //render the website

@Component({
    // the css selector for the HTML element where we want the component to load
    selector: 'app-root',
    // the content we want to load inside our selector
    template: `<h1>{{title}}</h1>
    <ul>
    <li *ngFor="let carPart of carParts">
    <h2>{{carPart.name}}<h2>
    <p>{{carPart.description}}<p>
    <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock<p>
    <p *ngIf="carPart.inStock === 0"> Out of Stock</p>
    </li>
    </ul>`
})
class AppComponent {
    title = 'Ultra Racing';
 }

@NgModule({
    // list of all components within the module
    declarations: [ AppComponent ],
    // load required dependencies to launch our app in the browser
    imports: [ BrowserModule ],
    // indicate our root component
    bootstrap: [ AppComponent ]
})
class AppModule {}
// render app using AppModule
platformBrowserDynamic().bootstrapModule(AppModule);
