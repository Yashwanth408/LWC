import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ["red"]

    get options() {
        return [
            { label: 'Red Color', value: 'red' },
            { label: 'Green Color', value: 'green' },
            { label: 'Blue Color', value: 'blue' },
            { label: 'Black Color', value: 'black' },
            { label: 'White Color', value: 'white' }
        ];
    }

    @api
    selectedCheckboxValue(checkboxValue){
        const selectedCheckbox = this.options.find(checkboxFound =>
            checkboxValue === checkboxFound.value
            );
        
        console.log(`selectedCheckbox out if :: ${selectedCheckbox}`);

        if (selectedCheckbox){
            console.log(`selectedCheckbox :: ${selectedCheckbox.value}`);
            this.value = selectedCheckbox.value;
            return `Successfully checked ${selectedCheckbox.label}`
        }
        console.log("Checkbox value not found")
        return "Checkbox value not found"
    }

}