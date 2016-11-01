import {Aanlevering} from "./aanlevering";
import {UUID} from 'angular2-uuid';

export class AanvraagAanlevering {

  constructor(auditContextID: string) {
    this.trackAndTraceUUID = UUID.UUID();
    this.auditContextID = auditContextID;
  }

  public trackAndTraceUUID: string;
  public auditContextID: string;
  public aanvraag: Aanlevering;

}
