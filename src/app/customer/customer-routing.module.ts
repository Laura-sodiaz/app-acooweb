import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SearchComponent } from './pages/menu/search.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
    children:[
      
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: '**',
        redirectTo: 'detail'
      },

    ]
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})

export class CustomerRoutingModule { }
