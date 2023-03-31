import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { SpeedComponent } from './speed/speed.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AstLoadingComponent } from './ast-loading/ast-loading.component';
import { MatRadioModule } from '@angular/material/radio';
import { MackAlbumListComponent } from './mack-album-list/mack-album-list.component';
import { SwTeamCheckComponent } from './sw-team-check/sw-team-check.component';


import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TotalAfterTaxComponent } from './total-after-tax/total-after-tax.component';



@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    AstLoadingComponent,
    SpeedComponent,
    TjsMultiplicationComponent,
    SwTeamCheckComponent,
    MackAlbumListComponent,
    TotalAfterTaxComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatRadioModule
    , MatFormFieldModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
