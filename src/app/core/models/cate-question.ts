import { Question } from "./question";

export class CateQuestion {
    id: number;
    name: string;
    totalScore: number;
    contentResult:string ;
    // listQuestion:Question[] =[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.totalScore = 0;
        this.contentResult =""
    }
}