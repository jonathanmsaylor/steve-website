import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: HomePageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: 'resume', component: ResumePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
