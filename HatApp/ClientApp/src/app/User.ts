export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export class Convert {
    public static toUser(json: string): User [] {
        return JSON.parse(json);
    }
    public static userToJson(value: User): string {
        return JSON.stringify(value);
    }
}