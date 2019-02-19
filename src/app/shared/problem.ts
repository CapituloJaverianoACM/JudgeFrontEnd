import { Difficulty } from './difficulty.enum';

export interface Problem {
    name: string;
    difficulty: Difficulty;
    category: string; // Can be an enum
    successRate?: number;
    isSolved: boolean;
}
