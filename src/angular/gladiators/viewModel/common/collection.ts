import { component, sequence } from 'redux-app';
import { IIdentifiable } from './iIdentifiable';

/**
 * Encapsulates storage and modification of a collection of items.
 */
@component
export class Collection<T extends IIdentifiable> {

    public items: T[] = [];

    public add(item: T | T[]): void {
        this.items = this.items.concat(item);
    }

    public update(item: T): void {
        this.items = this.items.map(it => {
            if (it.id === item.id) {
                return Object.assign({}, it, item);
            } else {
                return it;
            }
        });
    }

    @sequence
    public addOrUpdate(item: T): void {
        if (this.items.find(it => it.id === item.id)) {
            this.update(item);
        } else {
            this.add(item);
        }
    }

    public remove(item: T): void {
        this.items = this.items.filter(it => it !== item);
    }
}