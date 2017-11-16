import { Banner } from './banner';
import { randomInt } from '../utils';

export class Gladiator {

    private static nextId = 0;

    public readonly id = Gladiator.nextId++;
    public name = "Maximums_" + randomInt(1, 9999);
    public banner = Banner.randomBanner();
    public wins = 0;

    constructor(initial?: Partial<Gladiator>) {
        Object.assign(this, initial);
    }
}