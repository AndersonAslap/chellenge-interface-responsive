import building from '../assets/building.svg';
import cocktail from '../assets/cocktail.svg';
import earth from '../assets/earth.svg';
import museum from '../assets/museum.svg';
import surf from '../assets/surf.svg';

export interface TravelType {
    source: any;
    description: string;
}

export const travelTypeList: TravelType[] = [
    {
        source: cocktail.src,
        description: 'vida noturna'
    },
    {
        source: surf.src,
        description: 'praia'
    },
    {
        source: building.src,
        description: 'moderno'
    },
    {
        source: museum.src,
        description: 'classico'
    },
    {
        source: earth.src,
        description: 'e mais...'
    }
];

