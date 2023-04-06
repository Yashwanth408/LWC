import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track check;

    displayDivHandler(event){
        this.check = event.target.checked;
        console.log('check val::::' + this.check)
    }

}