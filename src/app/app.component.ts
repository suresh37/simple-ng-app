import { Component } from '@angular/core';
import { MockForm } from "./shared/mock-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // https://codeburst.io/angular-dynamic-forms-ng-switch-approach-4f267c01d2c6
  public data = MockForm;
  public title = 'simple-ng-app';
}
