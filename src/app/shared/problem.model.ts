import { Difficulty } from './difficulty.enum';
import { Description } from './description.model';

export interface Problem {
    id: number;
    score?: number;
    description?: Description;
    name: string;
    difficulty?: Difficulty;
    category?: string; // Can be an enum
    success_rate?: number;
}
