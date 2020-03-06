import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

// Nav
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
