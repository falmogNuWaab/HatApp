import {Hat, HatConvert } from './Hat';

export interface MyHats{
    id:number;
    userId:number;
    hatId:number;
}

export class MyHatConvert {
    public static toMyHats(json: string): MyHats [] {
        return JSON.parse(json);
    }
    public static myHatsToJson(value: MyHats): string {
        return JSON.stringify(value);
    }

}