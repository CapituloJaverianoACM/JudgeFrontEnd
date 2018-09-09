export class User {
    public first_name: string;
    public last_name: string;
    public email: string;
    public username: string;
    public password: string;
    public remember:boolean;
    public profile:any = {
        career: ""
    };
}