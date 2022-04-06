import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/HSPA/Front/dash.component';
import { DashboardComponent } from './pages/James/dashboard.component';
import { FlagComponent } from './pages/VAPInterview/flag/flag.component';

const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'common', component: DashboardComponent},
  {path: 'countryFlag', component: FlagComponent},
  {path: 'dash', component: DashComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
