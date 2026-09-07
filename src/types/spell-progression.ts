export interface SpellProgression {
    name: string;
    levels: Partial<Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, number>>[];
}