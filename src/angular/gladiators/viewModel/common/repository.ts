import { component, sequence } from 'redux-app';
import { IIdentifiable } from './iIdentifiable';

/**
 * General purpose repository.
 * Encapsulates storage and modification of a collection of T.
 */
@component
export class Repository<T extends IIdentifiable> {

    // Note: This class can be easily refactored to CRUD from a remote server
    // using API calls and cache the results locally.

    public items: T[] = [];

    public add(item: T): void {
        this.items = this.items.concat(item);
    }

    public update(item: T): void {
        this.items = this.items.map(g => {
            if (g.id === item.id) {
                return Object.assign({}, g, item);
            } else {
                return g;
            }
        });
    }

    @sequence
    public addOrUpdate(item: T): void {
        if (this.items.find(g => g.id === item.id)) {
            this.update(item);
        } else {
            this.add(item);
        }
    }
}