// To parse this data:
//
//   import { Convert, User } from "./file";
//
//   const user = Convert.toUser(json);

import { Hat } from "./Hat";

export interface UserObject {
    id:           number;
    firstName:    string;
    lastName:     string;
    hatOfTheDay:  Hat;
    myCollection: MyCollection[];
    worn30:       MyCollection[];
}

export interface MyCollection {
    id:       number;
    type:     string;
    material: string;
    color:    string;
    images:   string;
    facts:    string;
}

// Converts JSON strings to/from your types
export class UOConvert {
  public static toUserObject(json: string): UserObject {

        return JSON.parse(json);
    }

    public static userObjectToJson(value: UserObject): string {
        return JSON.stringify(value);
    }
}
