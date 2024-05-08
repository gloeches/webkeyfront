export class UsuarioModel {
    public id: BigInt;
    public firstName:string;
    public lastName:string;
    public email:string;
    public password:string;
    public role:string;
      
    constructor(id:BigInt,firstname:string,lastName:string,email:string,password:string,role:string){
        this.id=id;
        this.firstName=firstname;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.role=role;
    }
}