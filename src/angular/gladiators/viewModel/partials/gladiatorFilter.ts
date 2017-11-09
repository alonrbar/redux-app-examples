import { Gladiator } from '../../model';

export const activeGladiatorsFilter: GladiatorFilter = (g: Gladiator) => g.isActive;

export const inactiveGladiatorsFilter: GladiatorFilter = (g: Gladiator) => g.isActive;

export type GladiatorFilter = (g: Gladiator) => boolean;