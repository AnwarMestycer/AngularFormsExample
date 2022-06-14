import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from '../model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}
  name!: number;
  lastName!: number;
  email!: string;
  s = 0;
  res = 0;
  listModel = [
    new Model("a", "aa", "aaa")
  ]
  model !: Model;
  
  ngOnInit(): void {
    // this.name = 'anwar';
    // this.lastName = 'aldsnkjnd';
    // this.email = 'aaodlzk';
    this.model = new  Model('', '', '')
  }
  ngOnChanges(): void {
    console.log(`name ${this.name}`)

  }
  calcul(){
    this.s++;
    console.log(this.s)
  }
  createModel( form : NgForm ){
    console.log(form.value);
    this.listModel.push(form.value)
    console.log(this.listModel)
  }
  add(){
     this.res = this.name.valueOf() + this.lastName.valueOf()
  }
  munes(){
     this.res = this.name - this.lastName
  }
  multi(){
     this.res = this.name * this.lastName
  }
  div(){
     this.res = this.name / this.lastName
  }

}
