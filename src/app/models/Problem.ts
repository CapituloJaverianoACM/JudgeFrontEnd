import { Description } from './Description';

export class Problem {
    public id: number;
    public name: string;
    public max_score: number;
    public difficulty: number;
    public time_limit: number;
    public theme: string;
    public template: string;
    public link_source: string;
    public is_original: boolean;
    public description: Description;
}