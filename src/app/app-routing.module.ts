import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideBuilderComponent } from './guide-builder/guide-builder.component';


const routes: Routes = [
  { path: 'builder', component: GuideBuilderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
