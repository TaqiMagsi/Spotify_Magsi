import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


const routes: Route[] = [
  
  { path: "", component: LayoutComponent,
  children:[
    { path: '', loadChildren: () => import('../shared/home/home.module').then(m => m.HomeModule) },
  ]
},

];


@NgModule({
  declarations: [
    SideNavComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzIconModule
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
