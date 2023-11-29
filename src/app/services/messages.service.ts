import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, MessagesDialogComponent } from 'src/app/messages/messages-dialog/messages-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[]=[];
  question: boolean=false;
  constructor(public dialog: MatDialog, private snack:MatSnackBar) { }

  add(message: string){
    this.messages.push(message);
  }

  clear() {
    this.messages=[];
  }

 

  public confirmDialog(infoText:string): boolean {

    const dialogData = new ConfirmDialogModel("Confirm Action", infoText);

    const dialogRef = this.dialog.open(MessagesDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      return dialogResult;
    });
    if (infoText=='a') return true;
    else return false;
    
  }

  public ScreeMessage(infoText:string){
    this.snack.open(infoText,'Ok',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
  }

public SweetMessage(infoText:string){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: infoText,
    showConfirmButton: false,
    timer: 3000
  });
}
public SweetQuestion(infoText:string): boolean{
  Swal.fire({
    title: infoText,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Yes",
    denyButtonText: `No`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      console.log("message.service selected Yes")
      this.question=true;
    } else  {
      console.log("message.service selected No")
      this.question=false;
    }
  });
  return this.question;
}
}
