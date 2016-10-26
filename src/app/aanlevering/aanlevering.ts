import {Persoon} from "./persoon";
import {PlaatsingsOvereenkomst} from "./plaatsingsovereenkomst";

export class Aanlevering {
  public identificatienummerHouder: string;
  public kind:Persoon = new Persoon();
  public ouder:Persoon = new Persoon();

  public plaatsingsOvereenkomsten:PlaatsingsOvereenkomst[] = [new PlaatsingsOvereenkomst()];

}
