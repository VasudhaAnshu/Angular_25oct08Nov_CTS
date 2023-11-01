import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeptComponent } from './dept/dept.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptHeaderComponent } from './dept-header/dept-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptComponent,
    DeptDetailsComponent,
    DeptFormComponent,
    DeptHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
