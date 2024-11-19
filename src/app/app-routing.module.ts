import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/layout/home',pathMatch:'full'
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },
      {
        path:'product-page/:name',component:ProductPageComponent
      },
      {
        path:'product-detail/:name/:id',component:ProductDetailComponent
      },
      {
        path:'cart',component:CartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
