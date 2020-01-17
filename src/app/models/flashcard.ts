export class Flashcard {
    id: string;
    question: string;
    answer: string;
    category: string;
    status: string;
    userid: string;
    
    constructor(flashcard: Flashcard) {
      this.id = flashcard.id;
      this.question = flashcard.question;
      this.answer = flashcard.answer;
      this.category = flashcard.category;
      this.status = flashcard.status;
      this.userid = flashcard.userid;
    }
  }

  