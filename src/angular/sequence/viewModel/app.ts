import { action, sequence } from 'redux-app';

export class App {
    public title = "async dogs";
    public subtitle = "using the sequence decorator, an async pattern that does not require thunks";

    public status = 'click the button...';
    public imageUrl: string = null;
    
    public counter = 0;

    @action
    public updateImageUrl(url: string) {
        this.imageUrl = url;
    }

    @action
    public setStatus(newStatus: string) {
        this.status = newStatus;
    }

    @sequence
    public async fetchImage() {     // <--- this is the most interesting part of the code
        this.setStatus('Fetching...');
        var response = await fetch('https://dog.ceo/api/breeds/image/random');        
        var responseBody = await response.json();

        this.setStatus('Adding unnecessary delay...');
        setTimeout(() => {
            this.updateImageUrl(responseBody.message);
            this.setStatus('walla!');
        }, 2000);
    }

    @action
    public increment() {
        console.log('business as usual');
        this.counter = this.counter + 1;
    }

    public async doNothing() {
        console.log('ignore me...');
    }
}