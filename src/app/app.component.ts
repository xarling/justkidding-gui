import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showAanlevering = true;
  showNotificatie = false;


  resetDisplay() {
    this.showAanlevering = false;
    this.showNotificatie = false;
  }

  displayAanlevering(display:boolean) {
    this.resetDisplay();
    this.showAanlevering = display;
  }

  displayNotificatie(display:boolean) {
    this.resetDisplay();
    this.showNotificatie = display;
  }

}
