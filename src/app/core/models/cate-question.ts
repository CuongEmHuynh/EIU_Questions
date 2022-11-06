export class CateQuestion {
    id: number;
    name: string;
    totalScore: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.totalScore = 0;
    }
}