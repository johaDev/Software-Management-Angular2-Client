import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatCheckboxModule, MatButtonModule, MatChipsModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

const MAT_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule
    // and so on...
];

@NgModule({
    imports: MAT_MODULES,
    exports: MAT_MODULES,
    declarations: []
})
export class MyMaterialModule { }