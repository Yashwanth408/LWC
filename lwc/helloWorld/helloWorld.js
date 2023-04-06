import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track name = "Yashwanth";

    dynamicGreeting(event){
        this.name = event.target.value;
    }

}