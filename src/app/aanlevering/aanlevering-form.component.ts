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
  identificatienummerHouder:string;

  submitted = false;
  showForm = true;
  ontvangstBevestiging = "N";

  constructor(private aanleveringService: AanleveringService) {

  }


  ngOnInit() {
    this.ontvangstBevestiging = "N";
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

    this.identificatienummerHouder = "12345678";

  }

  onSubmit() {
    console.log(this.aanlevering);

    this.submitted = true;

    let aanvraagAanlevering = new AanvraagAanlevering("12345");
    aanvraagAanlevering.aanvraag = this.aanlevering;
    aanvraagAanlevering.identificatienummerHouder = this.identificatienummerHouder;

    let aanlevermoment = aanvraagAanlevering.aanvraag.aanlevermoment;

    aanvraagAanlevering.aanvraag.aanlevermoment = aanvraagAanlevering.aanvraag.aanlevermoment + "T11:40:10.1+08:00";
    this.aanleveringService.saveAanvraagAanlevering(aanvraagAanlevering).subscribe(data => {
      this.displayForm(false);

      this.ontvangstBevestiging = data;
      console.log(data)
    });
    aanvraagAanlevering.aanvraag.aanlevermoment = aanlevermoment;
  }


  displayForm(show:boolean) {
    this.showForm = show;
  }

  resetForm() {
    this.ngOnInit();
    this.displayForm(true);
  }

  onChangeGeslacht(selectedValue, modelProperty) {
    modelProperty.geslacht = selectedValue;
  }

  onChangeKinderopvangSoort(selectedValue) {
    this.aanlevering.plaatsingsovereenkomst.plaatsingsovereenkomstregels[0].kinderopvangsoort = selectedValue;
  }

}
