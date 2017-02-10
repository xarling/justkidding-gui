import {Persoon} from "./persoon";


export class Overeenkomst {
  public begindatum: string;
  public einddatum: string;
  public kind: Persoon = new Persoon();
  public ouder: Persoon = new Persoon();
  public kindercentrumOvereenkomstregels: Array<OvereenkomstregelKindercentrum> = [];
  public gastouderOvereenkomstregels: Array<OvereenkomstregelGastouder>[];
}

export class Overeenkomstregel {
  public urenPerMaandIndicatief: number;
  public uurprijsIndicatief: number;
  public opvangSoort: string;

}


export class OvereenkomstregelGastouder extends Overeenkomstregel {
  public gastouderbureauIdentificatie: string;
  public gastouderIdentificatie: string;
  public bemiddelingskostenVast: number;
  public bemiddelingskostenFlex: number;
}


export class OvereenkomstregelKindercentrum extends Overeenkomstregel {
  public voorzieningIdentificatie: string;

}


