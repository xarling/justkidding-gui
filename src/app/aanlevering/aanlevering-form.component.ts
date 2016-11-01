import {Component, OnInit} from '@angular/core';
import {Aanlevering}    from './aanlevering';
import {AanleveringService} from "./aanlevering.service";
import {AanvraagAanlevering} from "./aanvraagaanlevering";
import 'rxjs/add/operator/catch';



@Component({
  selector: 'aanlevering-form',
  templateUrl: 'aanlevering-form.component.html'
})
export class AanleveringFormComponent implements OnInit {
  aanlevering:Aanlevering = new Aanlevering();

  submitted = false;
  showForm = true;

  constructor(private aanleveringService: AanleveringService) {

  }


  ngOnInit() {
    this.aanlevering.begindatum = "2016-01-01";
    this.aanlevering.einddatum = "2020-01-01";
    this.aanlevering.dagtekening = "2016-04-01";
    this.aanlevering.aanlevermoment = "2016-04-01";

    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstvolgnummer = "1";
    this.aanlevering.plaatsingsovereenkomst.ingangsdatum = "2016-01-01";
    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstregels[0].kinderopvangsoort = "BSO";
    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstregels[0].urenPerMaand = 80;
    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstregels[0].uurprijs = 5.50;
    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstregels[0].opvanglocatieidentificatie = "123456789";
    this.aanlevering.contractvolgnummer = "1";

    this.aanlevering.kind.burgerservicenummer = "123456782";
    this.aanlevering.kind.geboortedatum = "2012-01-01";
    this.aanlevering.kind.geslacht = "2";


    this.aanlevering.ouder.burgerservicenummer = "123456782";
    this.aanlevering.ouder.geboortedatum = "1980-01-01";
    this.aanlevering.ouder.geslacht = "1";

    this.aanlevering.identificatienummerHouder = "12345678";

  }

  onSubmit() {
    console.log(this.aanlevering);

    this.submitted = true;

    let aanvraagAanlevering = new AanvraagAanlevering("12345");
    aanvraagAanlevering.aanvraag = this.aanlevering;

    let aanlevermoment = aanvraagAanlevering.aanvraag.aanlevermoment;

    aanvraagAanlevering.aanvraag.aanlevermoment = aanvraagAanlevering.aanvraag.aanlevermoment + "T11:40:10.1+08:00";
    this.aanleveringService.saveAanvraagAanlevering(aanvraagAanlevering).subscribe(data => console.log(data));
    aanvraagAanlevering.aanvraag.aanlevermoment = aanlevermoment;
  }



  onChangeGeslacht(selectedValue, modelProperty) {
    modelProperty.geslacht = selectedValue;
  }

  onChangeKinderopvangSoort(selectedValue) {
    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstregels[0].kinderopvangsoort = selectedValue;
  }

}
