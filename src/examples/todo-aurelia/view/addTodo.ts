import { bindable, customElement } from 'aurelia-framework';

@customElement('add-todo')
export class AddTodoView {
    
    public text: string;
    
    @bindable 
    public addTodo: (text: string) => void;
}