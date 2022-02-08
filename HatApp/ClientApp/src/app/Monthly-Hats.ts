export interface MonthlyHats{
    id:number;
    userId: number;
    hatId: number;
    lastWornDate:string;
    
}

export class MonthlyHatConvert {
    public static toMonthlyHats(json: string): MonthlyHats [] {
        return JSON.parse(json);
    }
    public static monthlyHatsToJson(value: MonthlyHats): string {
        return JSON.stringify(value);
    }
}