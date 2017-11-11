import { modulo, randomInt } from '../utils';

const BADGES_COUNT = 21;
const BADGE_PREFIX = 'badge';

const badges: string[] = [];
for (let i = 0; i < BADGES_COUNT; i++) {
    badges.push(BADGE_PREFIX + i);
}

const credits = `Images from the Noun Project courtesy of the following artists:
warrior & Viking Helmet by Anton Gajdosik,
Gladius by parkjisun,
gladiator & Greek Helmet by Ben Davis,
Centurion Helmet by Henry Ryder,
Roman Helmet by richard pasqua,
Spartan by Orun Bhuiyan,
Sword, gladiator, rapier, Medieval Helmet, Viking weapons & Swords by Made,
Spiked Mace by Made by Made,
Shield by Richard Nixon`;

export class Badge {
    
    public static readonly credits = credits;

    public static randomBadge(): string {
        const index = randomInt(0, 20);
        return badges[index];
    }

    public static nextBadge(badge: string): string {
        const index = badges.indexOf(badge);
        const nextIndex = modulo(index + 1, BADGES_COUNT);
        return badges[nextIndex];
    }

    public static prevBadge(badge: string): string {
        const index = badges.indexOf(badge);
        const nextIndex = modulo(index - 1, BADGES_COUNT);
        return badges[nextIndex];
    }
}