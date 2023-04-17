import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ArabicQuizGeneratorComponent } from './components/arabic-quiz-generator/arabic-quiz-generator.component';
import { EnglishQuizGeneratorComponent } from './components/english-quiz-generator/english-quiz-generator.component';
import { FeedbackGeneratorComponent } from './components/feedback-generator/feedback-generator.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'arabic-quiz-generator', component: ArabicQuizGeneratorComponent },
  { path: 'english-quiz-generator', component: EnglishQuizGeneratorComponent },
  { path: 'feedback-generator', component: FeedbackGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
