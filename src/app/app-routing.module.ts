import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import {MainPageComponent} from './mainpage.component';
import {PageNotFoundComponent} from './pagenotfound.component';

const routes: Routes = [
  {
  path: 'hello',
  component: HelloComponent
},
{
  path: 'main-page',
  component: MainPageComponent
},
  {
  path: '',
  redirectTo: '/main-page',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// , { useHash: true }