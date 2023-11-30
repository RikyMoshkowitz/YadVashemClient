import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports:[
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatToolbarModule,
    MatFormFieldModule
     
  ]
})
export class MaterialModule { }
