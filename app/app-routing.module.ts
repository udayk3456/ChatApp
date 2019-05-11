import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
 
  {path:'home',component:HomeComponent,/*canActivate: [AuthGuardService],pathMatch:'full'*/ },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
