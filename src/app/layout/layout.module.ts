import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Route[] = [
  
  { path: "", component: LayoutComponent },

];


@NgModule({
  declarations: [
    SideNavComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
