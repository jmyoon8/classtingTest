export interface BooleanQuizType {
   category: string;
   type: 'boolean';
   difficulty: 'easy' | 'medium' | 'Hard';
   correct_answer: 'False' | 'True';
   incorrect_answers: 'False' | 'True';
   question: string;
}
