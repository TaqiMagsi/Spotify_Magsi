import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';


const routes: Route[] = [
  
  { path: "", component: HomeComponent,
},
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzIconModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
