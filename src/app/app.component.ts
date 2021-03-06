import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rx-js-lesson';
  showProductList = false;

  toggleProductList() {
    this.showProductList = !this.showProductList;
  }
}
