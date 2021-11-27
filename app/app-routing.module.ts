import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ShowResultsComponent } from './show-results/show-results.component';

const routes: Routes = [
      {path: 'survey-form',
      component: SurveyFormComponent},
      {path: 'show-results',
      component: ShowResultsComponent}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
