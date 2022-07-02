import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plat : any ={};
  addPlatForm : FormGroup;
  connectedChef : any;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addPlatForm= this.formBuilder.group({
      platname : [''],
      price : [''],
      description : [''],
    })
  }
  addPlat(){
    console.log(this.plat);
    this.connectedChef = JSON.parse(localStorage.getItem("connectedUser"))
    // ajout d'un attribut idChef dans l objet plat( id du chef connecté..)
    this.plat.idChef = this.connectedChef._id
  }

}
