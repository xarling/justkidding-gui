import {Persoon} from "./persoon";
import {PlaatsingsOvereenkomst} from "./plaatsingsovereenkomst";

export class Aanlevering {
  public identificatienummerHouder: string;
  public kind:Persoon = new Persoon();
  public ouder:Persoon = new Persoon();
  public begindatum:string;
  public einddatum:string;
  public aanlevermoment:string;
  public dagtekening:string;
  public contractvolgnummer:string;

  public plaatsingsovereenkomst:PlaatsingsOvereenkomst = new PlaatsingsOvereenkomst();

}
