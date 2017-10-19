import { component, noDispatch, sequence, withId } from 'redux-app';

@component
export class App {
    public title = "redux-app - sequence";

    public status = 'click the button...';
    public imageUrl: string = null;
    
    public counter = 0;

    public updateImageUrl(url: string) {
        this.imageUrl = url;
    }

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
        }, 3000);
    }

    @noDispatch
    public async doNothing() {
        console.log('ignore me...');
    }

    public increment() {
        console.log('business as usual');
        this.counter = this.counter + 1;
    }
}