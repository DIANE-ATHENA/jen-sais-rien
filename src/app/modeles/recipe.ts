export class Recipe {
        name: string;
        id: number;
        type: string;
        author: any;
        image: string;
        numberPersons: any;
        sugar: any;
        fat: any;
        ease: any; 
        cost: any;
        timePreparation: any;
        timeCooking: any;
        ingredients: any[];
        process: Process[];
}

export class Process {
        id: number;
        name: string;
        text: any[];
}
