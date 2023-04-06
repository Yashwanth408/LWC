import { LightningElement, track } from 'lwc';

export default class IterateComponent extends LightningElement {

   @track cityList = ['Hyderabad', 'Chennai', 'Mumbai', 'Delhi', 'Visakhapatnam'];

   addCity(event){
    event.preventDefault();
    let cityName = this.template.querySelector(".input-text").value;
    this.cityList.push(cityName);
    this.template.querySelector(".input-text").value = "";
   }

   removeCity(event){
    event.preventDefault();
    let cityName = event.target.value;
    let index = this.cityList.indexOf(cityName);
    event.target.parentElement.remove();
    delete this.cityList[index];
   }

}