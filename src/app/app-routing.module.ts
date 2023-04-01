import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuarialViewComponent } from './pages/actuarial-view/actuarial-view.component';

const routes: Routes = [
  {
    path: '', component: ActuarialViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
