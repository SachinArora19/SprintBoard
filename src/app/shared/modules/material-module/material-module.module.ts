import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
      CommonModule,
      DragDropModule,
      MatSelectModule,
      MatInputModule,
      MatDialogModule,
      MatButtonModule,
      MatMenuModule
  ]
})
export class MaterialModuleModule { }
