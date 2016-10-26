import {Component} from '@angular/core';
import {Aanlevering}    from './aanlevering';


@Component({
  selector: 'aanlevering-form',
  templateUrl: 'aanlevering-form.component.html'
})
export class AanleveringFormComponent {
  aanlevering = new Aanlevering();
  submitted = false;
  showForm = true;

  onSubmit() {
    this.submitted = true;
  }

}
