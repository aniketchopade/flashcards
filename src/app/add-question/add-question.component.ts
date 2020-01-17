import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { FlashcardService } from '../_services';
import { CategoryService } from '../_services';
import { Flashcard } from '../models'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm: FormGroup;
  newCategory: string;
  private categories: string[];
  constructor(
    private flashcardService: FlashcardService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input() flashcard: Flashcard;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // TODO: Understand the purpose of this
    if (id) {
      this.flashcardService.getFlashcard(parseInt(id))
        .subscribe(flashcard => this.flashcard = flashcard);
    } else {
      this.flashcard = { id: "0", question: '', answer: '', category: '', status: '', userid: '' };
    }

    this.questionForm = new FormGroup({
      'category': new FormControl(this.flashcard.category,
        [
          Validators.required
        ]),
      'question': new FormControl(this.flashcard.question,
        [
          Validators.required
        ]),
      'newCategory': new FormControl(this.newCategory),
      'answer': new FormControl(this.flashcard.answer,
        [
          Validators.required
        ]),
    });

    const newCategoryCtrl = this.questionForm.get('newCategory')
    this.questionForm.get('category').valueChanges.subscribe( category => {
      if (category === "New Category") {
        newCategoryCtrl.setValidators([Validators.required])
      }
      newCategoryCtrl.updateValueAndValidity();
    })

    this.categoryService.getCategories()
      .subscribe(results => { 
        this.categories = results
        this.categories.push("New Category")
    });
    
  }

  goBack(): void {
    this.location.back();
  }

  isNewCategorySelected(): boolean {
    return this.flashcard.category === "New Category"
  }

  save(): void {
    var fc: Flashcard = new Flashcard(this.flashcard);
    if (this.isNewCategorySelected()) {
      fc.category = this.newCategory
    } 
    this.flashcardService.update(fc)
      .subscribe( (data) =>{
         if (data) {
          //  console.log("data returned",  data)
         }
         this.goBack()
      });
  }
}
