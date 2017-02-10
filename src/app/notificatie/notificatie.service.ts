import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';


@Injectable()
export class NotificatieService {

  private url: string = 'api/notificaties';

  constructor(protected http: Http) {
  }


  getNotificaties(begindatum: string, einddatum: string, trackAndTraceId: string) {
    return this.http.get(this.url + "?eindMoment=" + einddatum + "&beginMoment=" + begindatum + "&trackAndTraceId=" + trackAndTraceId).map(res => {
      let body = res.json();
      return body || [];
    });
  }


}

