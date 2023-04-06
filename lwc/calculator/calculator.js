import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track result;
    @track showPreviousResult = false;
    @track previousResult = [];

    firstN;
    secondN;

    numberChangeHandler(event){
        if(event.target.name === 'firstNum'){
            this.firstN = parseInt(event.target.value)
        } else if(event.target.name === 'secondNum'){
            this.secondN = parseInt(event.target.value)
        }
    }

    addHandler(event){
        this.result = `Addition of ${this.firstN} + ${this.secondN} is ${this.firstN + this.secondN}`;
        this.previousResult.push(this.result);
    }

    substractHandler(event){
        this.result = `Substraction of ${this.firstN} - ${this.secondN} is ${this.firstN - this.secondN}`;
        this.previousResult.push(this.result);
    }

    multiplyHandler(event){
        this.result = `Multiplication of ${this.firstN} x ${this.secondN} is ${this.firstN * this.secondN}`;
        this.previousResult.push(this.result);
    }

    divideHandler(event){
        this.result = `Division of ${this.firstN} / ${this.secondN} is ${this.firstN / this.secondN}`;
        this.previousResult.push(this.result);
    }

    showPreviousResultHandler(event){
        this.showPreviousResult = event.target.checked;
        console.log(this.previousResult) 
    }
}