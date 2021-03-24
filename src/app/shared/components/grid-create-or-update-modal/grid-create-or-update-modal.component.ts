import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-grid-create-or-update-modal',
  templateUrl: './grid-create-or-update-modal.component.html',
  styleUrls: ['./grid-create-or-update-modal.component.scss'],
})
export class GridCreateOrUpdateModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GridCreateOrUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (data.data == null) {
      if (data.ActionType == 'Add' && data.ActionOn == 'Story') {
        data.data = {
          resourceId: '',
          resourceTitle: '',
          resourceDescription: '',
          resourceStoryPoints: null,
          resourceOwner: '',
          resourceType: 'US',
          resourceChild: null,
          priority: null,
          state: null,
        };
      } else if (data.ActionType == 'Add' && data.ActionOn == 'Task') {
        data.data = {
          resourceId: '',
          resourceTitle: '',
          resourceDescription: '',
          resourceStoryPoints: null,
          resourceOwner: null,
          resourceType: 'Task',
          resourceChild: null,
          priority: null,
          state: 'Active',
        };
      } else if (data.ActionType == 'Add' && data.ActionOn == 'Bug') {
        data.data = {
          resourceId: '',
          resourceTitle: '',
          resourceDescription: '',
          resourceStoryPoints: null,
          resourceOwner: null,
          resourceType: 'Bug',
          resourceChild: null,
          priority: null,
          state: 'Active',
        };
      }
    }
  }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData {
  data: {
    resourceId: string;
    resourceTitle: string;
    resourceDescription: string;
    resourceStoryPoints: number;
    resourceOwner: string;
    resourceType: string;
    resourceChild: any;
    state: string;
    priority: number;
  };
  ActionType: string;
  ActionOn: string;
}
