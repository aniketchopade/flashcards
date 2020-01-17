import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { FlashcardService, CategoryService } from '../_services';

import { Flashcard } from '../models'



@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {
  private categories: string[];
  private openCategory: string;
  private Flashcards: Flashcard[];

  constructor(
    private flashcardService: FlashcardService,
    private categoryService: CategoryService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  getFlashcardsByCategory(category) {
    this.flashcardService.getFlashcardsByCategory(category)
    .subscribe( flashcards => this.Flashcards = flashcards );
  }

  onSelect(fc: Flashcard): void {
    // this.router.navigate(['/add-question', fc.id]);
  }

  open(category): void {
    this.openCategory = category;
    this.getFlashcardsByCategory(category)
  }

  isOpen(category): boolean {
    return this.openCategory === category;
  }

}
