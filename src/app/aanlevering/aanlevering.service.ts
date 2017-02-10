import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

import {AanvragenBeslissingVergoeding} from "./aanvraagbeslissingvergoeding";


@Injectable()
export class AanleveringService {

  private url:string = 'api/aanleveringen';

  constructor(protected http:Http) { }


  saveAanvraagAanlevering(aanvragenBeslissingVergoeding: AanvragenBeslissingVergoeding) {
    return this.http.post(this.url, aanvragenBeslissingVergoeding).map(res => {
      let body = res.json();
      return body || {};
    });
  }


}

