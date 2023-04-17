import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArabicQuizGeneratorComponent } from './components/arabic-quiz-generator/arabic-quiz-generator.component';
import { EnglishQuizGeneratorComponent } from './components/english-quiz-generator/english-quiz-generator.component';
import { FeedbackGeneratorComponent } from './components/feedback-generator/feedback-generator.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArabicQuizGeneratorComponent,
    EnglishQuizGeneratorComponent,
    FeedbackGeneratorComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
