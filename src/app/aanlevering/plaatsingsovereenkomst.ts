export class PlaatsingsOvereenkomst {

  public ingangsdatum:string;
  public plaatsingsovereenkomstvolgnummer:string = "1";
  public plaatsingsovereenkomstregels:PlaatsingsOvereenkomstRegel[] = [new PlaatsingsOvereenkomstRegel()];


}

export class PlaatsingsOvereenkomstRegel {
  public kinderopvangsoort: string;
  public urenPerMaand: number;
  public uurprijs: number;
  public opvanglocatieidentificatie: string;


}
