import { Component, Inject, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/shared/services/resource.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { GridCreateOrUpdateModalComponent } from 'src/app/shared/components/grid-create-or-update-modal/grid-create-or-update-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userChartData: any[];

  boardData: any[];
  users: any;
  priority: any;

  activeFilterargs = { state: 'Active' };
  resolvedFilterargs = { state: 'Resolved' };
  closedfilterargs = { state: 'Closed' };

  constructor(
    private resourceService: ResourceService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {
    this.resourceService.getAllData().subscribe((res) => {
      this.priority = res['priority'];
      this.users = res['users'];
      this.boardData = res['boardData'];
      this.userChartData = [];
      this.updateGridData();
    });
  }

  generateChartData() {
    this.users.forEach((user) => {
      this.userChartData.push({
        name: user.userName.toString(),
        value: this.boardData.filter(function (item) {
          return item.resourceOwner == user.userId;
        }).length,
      });
    });
  }

  GridDataChanged(e) {
    this.updateGridData();
  }

  openDialogToUpdateData(e, ActionOn) {
    this.AddOrUpdateUserStory(ActionOn, e);
  }

  updateGridData() {
    this.resourceService.setAllDataToLocalStorage({
      users: this.users,
      priority: this.priority,
      boardData: this.boardData,
    });
    this.generateChartData();
  }
  AddOrUpdateUserStory(ActionOn: string, resource?: any) {
    const dialogRef = this.dialog.open(GridCreateOrUpdateModalComponent, {
      width: '500px',
      data: {
        data: resource,
        ActionType: resource != null ? 'Update' : 'Add',
        ActionOn: ActionOn,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == null) this._document.defaultView.location.reload();
      else {
        if(result.ActionType=='Add' && result.ActionOn == 'Story')
        {
          this.boardData.push(result.data);

        }
        this.updateGridData();
      };
    });
  }

  AddTaskOrBug(ActionOn: string, resource?: any) {
    const dialogRef = this.dialog.open(GridCreateOrUpdateModalComponent, {
      width: '500px',
      data: {
        data: null,
        ActionType: 'Add',
        ActionOn: ActionOn,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == null) this._document.defaultView.location.reload();
      else {
          //this.boardData.find(obj => obj)
          if(this.boardData.find(obj => obj.resourceId==resource.resourceId).resourceChild == null)
          {
            this.boardData.find(obj => obj.resourceId==resource.resourceId).resourceChild = [];
          }
          this.boardData.find(obj => obj.resourceId==resource.resourceId).resourceChild.push(result.data);
          this.updateGridData();
      }
    });
  }

  deleteUserStory(resource: any){
    this.boardData = this.boardData.filter(x=>x.resourceId != resource.resourceId);
    this.updateGridData();
  }

  deleteTaskOrBug(resource: any){
    this.boardData.forEach(obj => {
      obj.resourceChild = obj.resourceChild.filter(childObj=>childObj.resourceId != resource.resourceId);
    })

    this.updateGridData();
  }

  drop(event: CdkDragDrop<string[]>) {
    event.previousContainer.data[event.previousIndex][
      'state'
    ] = document
      .getElementById(event.container.id)
      .parentElement.getAttribute('data-state');
    this.updateGridData();
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
