import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCarouselComponent } from './components/shared-carousel/shared-carousel.component';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SharedHyperlinkComponent } from './components/shared-hyperlink/shared-hyperlink.component';
import { SharedMainHeaderComponent } from './components/shared-main-header/shared-main-header.component';
import { SharedSubMainHeaderComponent } from './components/shared-sub-main-header/shared-sub-main-header.component';
import { SharedSubMainTextComponent } from './components/shared-sub-main-text/shared-sub-main-text.component';
import { SharedMainTextComponent } from './components/shared-main-text/shared-main-text.component';
import { ResourceService } from './services/resource.service';
import { TaskBoardWorkItemComponent } from './components/task-board-work-item/task-board-work-item.component';
import { MaterialModuleModule } from './modules/material-module/material-module.module';
import { CustomListStatusFilterPipe } from './pipes/CustomListStatusFilterPipe';

import { FormsModule } from '@angular/forms';
import { GridCreateOrUpdateModalComponent } from './components/grid-create-or-update-modal/grid-create-or-update-modal.component';
@NgModule({
  declarations: [
    SharedCarouselComponent,
    SharedButtonComponent,
    SharedHyperlinkComponent,
    SharedMainHeaderComponent,
    SharedSubMainHeaderComponent,
    SharedSubMainTextComponent,
    SharedMainTextComponent,
    TaskBoardWorkItemComponent,
    CustomListStatusFilterPipe,
    GridCreateOrUpdateModalComponent
  ],
  imports: [CommonModule, MaterialModuleModule, FormsModule],
  exports: [CommonModule, MaterialModuleModule, FormsModule, TaskBoardWorkItemComponent, CustomListStatusFilterPipe, GridCreateOrUpdateModalComponent ],
  providers: [ResourceService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {}
