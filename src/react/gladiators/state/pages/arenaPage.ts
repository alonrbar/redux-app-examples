import { action, sequence } from 'redux-app';
import { Gladiator } from '../../model';
import { randomInt } from '../../utils';
import { GladiatorsList } from '../partials';
import { Route, Router } from '../router';

export class ArenaPageState {

    //
    // public properties
    //

    public status: string = null;

    public gladiator1: Gladiator;
    public lifeMeter1 = 0;
    public gladiator2: Gladiator;
    public lifeMeter2 = 0;

    //
    // private dependencies
    //

    constructor(
        private readonly list: GladiatorsList,
        private readonly router: Router) {
    }

    //
    // sequences
    //

    @sequence
    public goBack(): void {
        this.router.navigateTo(Route.MainPage);
    }

    @sequence
    public prepareForFight() {

        if (this.list.items.length < 2) {
            this.setStatus('It takes two to tango...');
            return;
        }

        // choose fighter #1
        const firstIndex = this.randomFighterIndex();
        const firstContender = this.list.items[firstIndex];

        // choose fighter #2
        var secondIndex = firstIndex;
        while (secondIndex === firstIndex) {
            secondIndex = this.randomFighterIndex();
        }
        const secondContender = this.list.items[secondIndex];

        this.setFighters(firstContender, secondContender);
        this.setStatus('Get ready to rumble!');
    }

    @sequence
    public fight(): void {
        if (this.list.items.length < 2)
            return;

        if (!this.lifeMeter1 || !this.lifeMeter2) {
            this.prepareForFight();
        }

        this.fightRound(1);
    }

    @sequence
    private fightRound(round: number): void {
        const strikeDelay = 600;
        const nextRoundDelay = 300;

        this.setStatus('Round ' + round);
        setTimeout(() => {

            const strikerIndex = ((round - 1) % 2) + 1;
            const targetIndex = (round % 2) + 1;

            // strike
            const strikePower = randomInt(1, 4) * 10;
            this.strike(targetIndex, strikePower);

            const lifeMeter = (targetIndex === 1 ? this.lifeMeter1 : this.lifeMeter2);
            if (lifeMeter === 0) {

                // the fight is over
                const striker = (strikerIndex === 1 ? this.gladiator1 : this.gladiator2);
                const updatedStriker = Object.assign({}, striker, { wins: striker.wins + 1 });

                this.updateFighter(strikerIndex, updatedStriker);
                this.list.update(updatedStriker);

                this.setStatus(`${striker.name} wins!`);
            } else {

                // next round
                setTimeout(() => this.fightRound(round + 1), nextRoundDelay);
            }
        }, strikeDelay);
    }

    //
    // actions
    //

    @action
    private setStatus(newStatus: string): void {
        this.status = newStatus;
    }

    @action
    private updateFighter(index: number, gladiator: Gladiator): void {
        if (index === 1) {
            this.gladiator1 = gladiator;
        } else if (index === 2) {
            this.gladiator2 = gladiator;
        } else {
            throw new Error("Invalid index. Expected 1 or 2.");
        }
    }

    @action
    private setFighters(gladiator1: Gladiator, gladiator2: Gladiator): void {
        this.gladiator1 = gladiator1;
        this.lifeMeter1 = 100;
        this.gladiator2 = gladiator2;
        this.lifeMeter2 = 100;
    }

    @action
    private strike(target: number, force: number): void {
        if (target === 1) {
            this.lifeMeter1 -= force;
            if (this.lifeMeter1 < 0)
                this.lifeMeter1 = 0;
        } else if (target === 2) {
            this.lifeMeter2 -= force;
            if (this.lifeMeter2 < 0)
                this.lifeMeter2 = 0;
        } else {
            throw new Error(`Invalid index ${target}, expected 1 or 2.`);
        }
    }

    //
    // utils
    //

    private randomFighterIndex(): number {
        return randomInt(0, this.list.items.length - 1);
    }
}