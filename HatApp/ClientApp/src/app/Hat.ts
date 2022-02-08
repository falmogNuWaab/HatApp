export interface Hat{
    id:number;
    type:string;
    material:string;
    color:string;
    images:string;
    facts:string;
}

export class HatConvert {
    public static toHat(json: string): Hat [] {
        return JSON.parse(json);
    }
    public static hatToJson(value: Hat): string {
        return JSON.stringify(value);
    }
}