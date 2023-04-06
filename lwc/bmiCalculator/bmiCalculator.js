import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    weight;
    height;
    bmi;

    onchangeHandler(event){
        if (event.target.name === "weight"){
            this.weight = parseInt(event.target.value);
        } 
        else if (event.target.name === "height"){
            this.height = parseInt(event.target.value);
        }
    }

    calculateBMI(event){
        this.bmi = String(this.weight/this.height);
        console.log(this.bmi)
    }
}