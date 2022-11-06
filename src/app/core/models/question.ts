export class Question {
    name: string;
    score: number;
    cateId: number;
    readonly: boolean
    
    constructor(name: string, score: number, cateId: number) {
        this.name = name;
        this.score = score;
        this.cateId = cateId;
        this.readonly = false;
    }
}