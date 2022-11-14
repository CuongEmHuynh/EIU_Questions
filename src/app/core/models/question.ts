export class Question {
    name: string;
    score: number;
    cateQuestionId: number;
    isAnswer: boolean = false;

    constructor(name: string, score: number, cateId: number) {
        this.name = name;
        this.score = score;
        this.cateQuestionId = cateId;
    }
}