import {Overeenkomst} from "./overeenkomst";
import {UUID} from "angular2-uuid";

export class AanvragenBeslissingVergoeding {

  constructor(auditContextID: string) {
    this.trackAndTraceId = UUID.UUID();
    this.auditContextId = auditContextID;
  }

  public houderIdentificatie: string;
  public trackAndTraceId;
  public auditContextId;
  public begindatumVergoeding: string;
  public dagtekening: string;
  public overeenkomst: Overeenkomst = new Overeenkomst();
  public emailOuder: string;
  //public aanvraagnummerKOO: string;
  public aanlevermoment: string;

  public aanvraagNummerKOO: string;


}
