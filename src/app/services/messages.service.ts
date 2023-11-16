import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, MessagesDialogComponent } from 'src/app/messages/messages-dialog/messages-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[]=[];
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


}
