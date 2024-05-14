import { apiUrl, frontendUrl, rootUrl } from 'src/app/shared/header/constants';
export class EmailModel {
    public subject: string;
    public message: string;
    public url:string;

     constructor(){
        this.subject="Email notification from Poseidon";
        this.message="<html><h1> Thank you for using our Poseidon Application </h1>" +
        "<p>To reset password click on the link if you need further support Contact Ana Pica, Olga Fuentes and Gerardo Loeches</p> "
        this.url=frontendUrl+"/reset/"
     }
}
