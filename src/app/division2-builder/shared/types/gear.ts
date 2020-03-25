import { GearTalent } from './gear-talent';

export interface Gear{
    type: string;
    name: string;
    rarity: string;
    bonus: Array<{ attribute: string, value: number }>;
    brand: string;
    coreAttribute: any;
    talent?: GearTalent;
    mod?: any;
}