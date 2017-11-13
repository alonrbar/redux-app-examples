import { modulo, randomInt } from '../utils';

const BANNERS_COUNT = 21;
const BANNER_PREFIX = 'banner';

const banners: string[] = [];
for (let i = 0; i < BANNERS_COUNT; i++) {
    banners.push(BANNER_PREFIX + i);
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

export class Banner {
    
    public static readonly credits = credits;

    public static randomBanner(): string {
        const index = randomInt(0, 20);
        return banners[index];
    }

    public static nextBanner(banner: string): string {
        const index = banners.indexOf(banner);
        const nextIndex = modulo(index + 1, BANNERS_COUNT);
        return banners[nextIndex];
    }

    public static prevBanner(banner: string): string {
        const index = banners.indexOf(banner);
        const nextIndex = modulo(index - 1, BANNERS_COUNT);
        return banners[nextIndex];
    }
}