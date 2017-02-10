import {Component, OnInit} from "@angular/core";
import "rxjs/add/operator/catch";
import {NotificatieService} from "./notificatie.service";
import {Notificatie} from "./notificatie";


@Component({
  selector: 'notificatie-form',
  templateUrl: 'notificatie-form.component.html'
})
export class NotificatieFormComponent implements OnInit {
  notificaties:Array<Notificatie> = [];
  einddatum:string = "2016-11-26";
  begindatum:string = "2016-11-25";
  trackAndTraceId: string;

  constructor(private notificatieService: NotificatieService) {

  }


  ngOnInit() {

    this.haalNotificaties();

  }

  haalNotificaties() {
    this.notificatieService.getNotificaties(this.begindatum, this.einddatum, this.trackAndTraceId).subscribe(data => {
      this.notificaties = data;
    });
  }

  onSubmit() {

    this.notificaties = [];

    this.haalNotificaties();



  }


}
