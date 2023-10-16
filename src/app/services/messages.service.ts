import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, MessagesDialogComponent } from 'src/app/messages/messages-dialog/messages-dialog.component'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: string[]=[];
  constructor(public dialog: MatDialog) { }

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
}
