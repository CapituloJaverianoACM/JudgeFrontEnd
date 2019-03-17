import { Language } from './language.enum';

export interface Submission {
    problem: number;
    source_code: File;
    language: Language;
}
