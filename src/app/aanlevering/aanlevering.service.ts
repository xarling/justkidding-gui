import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {AanvraagAanlevering} from "./aanvraagaanlevering";


@Injectable()
export class AanleveringService {

  private url:string = 'api/aanleveringen';

  constructor(protected http:Http) { }


  saveAanvraagAanlevering(aanvraagAanlevering: AanvraagAanlevering) {
    return this.http.post(this.url, aanvraagAanlevering).map(res => {
      let body = res.json();
      return body || {};
    });
  }


}

