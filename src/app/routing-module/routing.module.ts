import { ProductListComponent } from '../components/product-list/product-list.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'welcome', component: WelcomeComponent},
  // { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class RoutingModule { }
