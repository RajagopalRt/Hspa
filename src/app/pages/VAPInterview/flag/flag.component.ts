import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlagService } from '../Services/flag.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  _countryForm: FormGroup;
  getError(){return this._countryForm.controls}
  _myFlag: any = [];
  _myCountry:string;
  _countryList: any = [
    {"CountryName":"Maldives"},{"CountryName":"Bangladesh"},{"CountryName":"Bhutan"},
    {"CountryName":"Sri Lanka"},{"CountryName":"Pakistan"},{"CountryName":"Afghanistan"},
    {"CountryName":"India"},{"CountryName":"Nepal"},{'CountryName':'Albania'}
  ]; 

  constructor(private _formBuilder: FormBuilder, private _flagService: FlagService) { }

  ngOnInit(): void {
    this._countryForm = this._formBuilder.group({
      formcountryName: ['', Validators.required]
    })
    
  }

  changeCountry() {
    this._myCountry = this._countryForm.get('formcountryName')?.value;
    console.log('country', this._myCountry);
    console.log("data", this._myFlag);    
    this._flagService.getFlag(this._myCountry).subscribe( (data)=>{
      this._myFlag = data;
    } )
  }

}
