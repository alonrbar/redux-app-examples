import { randomInt } from "../utils";

export class Gladiator {

    private static nextId = 0;

    public readonly id = Gladiator.nextId++;
    public name: string;
    public badge = randomInt(0, 20);
    public wins = 0;
    public isActive = true;    

    constructor(initial?: Partial<Gladiator>) {
        Object.assign(this, initial);
    }
}