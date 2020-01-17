import { Component, OnInit } from '@angular/core';

import { CategoryService, FlashcardService } from '../_services';

import { Flashcard } from '../models'


@Component({
  selector: 'app-study-mode',
  templateUrl: './study-mode.component.html',
  styleUrls: ['./study-mode.component.css']
})
export class StudyModeComponent implements OnInit {
  private categories: string[];
  private studyCats: string[];
  private studying: boolean;
  private fc: Flashcard;
  private question: boolean;
  private flashcards: Flashcard[];

  constructor(
    private categoryService: CategoryService,
    private flashcardService: FlashcardService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
    this.studyCats = [];
    this.studying = false;
    this.question = true;
    this.flashcards = [];
    this.fc = { id: "0", question: '', answer: '', category: '', status: '', userid: ''};
  }

  updateList(event, cat): void {
    if (this.studyCats.indexOf(cat) !== -1) {
      this.studyCats.splice(this.studyCats.indexOf(cat), 1);
    } else {
      this.studyCats.splice(this.studyCats.push(cat));
    }
  }

  study(categories): void {
    this.studying = true;
    this.studyCats.forEach(cat => this.flashcardService.getFlashcardsByCategory(cat)
    .subscribe(fcs => fcs.forEach(fc => this.flashcards.push(fc))));
    console.log(this.flashcards);
    this.fc = this.flashcards[Math.floor(Math.random() * this.flashcards.length)];
  }

  next(): void {
    if(!this.question)
    {
      this.fc = this.flashcards[Math.floor(Math.random() * this.flashcards.length)];
    } 
    this.question = !this.question;
  }
}
