export class User {
    
    public id_user:number ;
    public name:string;
    public last_name:string;    
    public email:string;
    public photo:string;
    public password:string;

    constructor(id_user:number , name:string , last_name:string , email:string , photo:string , password:string){
        

    this.id_user=id_user;
    this.last_name=last_name;
    this.name=name;
    this.email=email;
    this.photo=photo;
    this.password=password;


    }

}
