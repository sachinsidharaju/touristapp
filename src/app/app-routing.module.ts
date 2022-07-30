import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import { HomeComponent } from './home/home.component';
import { TouristListComponent } from './tourist-list/tourist-list.component';

const routes: Routes = [
  {path:'tourist-list',component:TouristListComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:CreateTouristComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
