import {Component, OnInit} from "@angular/core";
import {AanleveringService} from "./aanlevering.service";
import "rxjs/add/operator/catch";
import {AanvragenBeslissingVergoeding} from "./aanvraagbeslissingvergoeding";
import {OvereenkomstregelGastouder, OvereenkomstregelKindercentrum} from "./overeenkomst";


@Component({
  selector: 'aanlevering-form',
  templateUrl: 'aanlevering-form.component.html'
})
export class AanleveringFormComponent implements OnInit {
  aanvragenBeslissingVergoeding: AanvragenBeslissingVergoeding = new AanvragenBeslissingVergoeding("12345");
  identificatienummerHouder: string;

  submitted = false;
  showForm = true;
  ontvangstBevestiging = "N";

  constructor(private aanleveringService: AanleveringService) {

  }


  ngOnInit() {
    this.ontvangstBevestiging = "N";
    this.aanvragenBeslissingVergoeding.houderIdentificatie = "12345678";
    this.aanvragenBeslissingVergoeding.begindatumVergoeding = "2016-01-01";
    //this.aanvragenBeslissingVergoeding.einddatum = "2020-01-01";
    this.aanvragenBeslissingVergoeding.dagtekening = "2016-04-01";
    this.aanvragenBeslissingVergoeding.aanlevermoment = "2016-04-01";
    this.aanvragenBeslissingVergoeding.emailOuder = "test@test.nl";
    this.aanvragenBeslissingVergoeding.aanvraagNummerKOO = "6543210";

    this.aanvragenBeslissingVergoeding.overeenkomst.begindatum = "2016-01-01";
    this.aanvragenBeslissingVergoeding.overeenkomst.einddatum = "2020-01-01";
    this.aanvragenBeslissingVergoeding.overeenkomst.kind.burgerservicenummer = "123456782";
    this.aanvragenBeslissingVergoeding.overeenkomst.kind.geboortedatum = "2012-01-01";
    this.aanvragenBeslissingVergoeding.overeenkomst.kind.geslacht = "2";

    this.aanvragenBeslissingVergoeding.overeenkomst.ouder.burgerservicenummer = "123456782";
    this.aanvragenBeslissingVergoeding.overeenkomst.ouder.geboortedatum = "1980-01-01";
    this.aanvragenBeslissingVergoeding.overeenkomst.ouder.geslacht = "1";

    let overeenkomstregelKindercentrum: OvereenkomstregelKindercentrum = new OvereenkomstregelKindercentrum();

    overeenkomstregelKindercentrum.voorzieningIdentificatie = "123456789";

    overeenkomstregelKindercentrum.urenPerMaandIndicatief = 150;
    overeenkomstregelKindercentrum.uurprijsIndicatief = 5.5;
    overeenkomstregelKindercentrum.opvangSoort = "DAGOPVANG";


    this.aanvragenBeslissingVergoeding.overeenkomst.kindercentrumOvereenkomstregels.push(overeenkomstregelKindercentrum);


  }

  onSubmit() {
    console.log(this.aanvragenBeslissingVergoeding);

    this.submitted = true;

    let aanlevermoment = this.aanvragenBeslissingVergoeding.aanlevermoment;

    this.aanvragenBeslissingVergoeding.aanlevermoment = this.aanvragenBeslissingVergoeding.aanlevermoment + "T11:40:10.1+08:00";
    this.aanleveringService.saveAanvraagAanlevering(this.aanvragenBeslissingVergoeding).subscribe(data => {
      this.displayForm(false);

      this.ontvangstBevestiging = data;
      console.log(data)
    });
    this.aanvragenBeslissingVergoeding.aanlevermoment = aanlevermoment;
  }


  displayForm(show: boolean) {
    this.showForm = show;
  }

  resetForm() {
    this.ngOnInit();
    this.displayForm(true);
  }

  onChangeGeslacht(selectedValue, modelProperty) {
    modelProperty.geslacht = selectedValue;
  }

  onChangeKinderopvangSoort(selectedValue, regel) {
    regel.opvangSoort = selectedValue;
  }

}
