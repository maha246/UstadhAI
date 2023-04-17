import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FrontEndAngularApp';
  sideBarClickedButton: number = 0;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.sideBarButtonCLicked(1);
  }

  sideBarButtonCLicked(buttonNum: number) {
    this.sideBarClickedButton = buttonNum;
    switch (buttonNum) {
      case 1:
        this.onHomeClicked();
        break;
      case 2:
        this.onArabicQuizClicked();
        break;
      case 3:
        this.onEnglishQuizClicked();
        break;
      case 4:
        this.onFeedbackGeneratorClicked();
        break;
      default:
        this.onHomeClicked();
    }
  }

  onArabicQuizClicked() {
    this.router.navigate(['/arabic-quiz-generator']);
  }
  onEnglishQuizClicked() {
    this.router.navigate(['/english-quiz-generator']);
  }
  onFeedbackGeneratorClicked() {
    this.router.navigate(['/feedback-generator']);
  }
  onHomeClicked() {
    this.router.navigate(['']);
  }
}
