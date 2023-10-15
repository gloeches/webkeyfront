import { Component, Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, MessagesDialogComponent } from './messages-dialog/messages-dialog.component';





@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  result: string = '';
  constructor(public dialog: MatDialog) {}

  confirmDialog(): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(MessagesDialogComponent, {
      maxWidth: "400px",
      data: dialogData,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }

  }



