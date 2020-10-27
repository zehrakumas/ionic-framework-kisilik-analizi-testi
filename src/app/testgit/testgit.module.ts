import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestgitPageRoutingModule } from './testgit-routing.module';

import { TestgitPage } from './testgit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestgitPageRoutingModule
  ],
  declarations: [TestgitPage]
})
export class TestgitPageModule {}
