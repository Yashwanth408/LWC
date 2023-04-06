import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;
    @track returnMessage;

    inputHandler(event){
        this.value = event.target.value;
    }

    updateCheckboxHandler(){
        const childComponent = this.template.querySelector("c-public-method-child")
        this.returnMessage = childComponent.selectedCheckboxValue(this.value)
        console.log(`Return Message :: ${this.returnMessage}`)
    }
}