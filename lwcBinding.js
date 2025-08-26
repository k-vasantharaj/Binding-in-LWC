import { LightningElement } from 'lwc';

export default class LwcBinding extends LightningElement {
    styling;       
    chosenStyle; 

    handleStyleChange(event) {
        this.styling = event.target.value;
    }

    handleStyleApply() {
        this.chosenStyle = this.styling;
        this.styling = null;   
    }
}
