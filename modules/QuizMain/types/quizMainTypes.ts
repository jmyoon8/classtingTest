export interface BooleanQuizType {
   question: string;
   correct_answer: 'False' | 'True';
   incorrect_answers: 'False' | 'True';
   type: 'boolean';
}
export interface MultipleQuizType {
   question: string;
   correct_answer: string;
   incorrect_answers: string[];
   answers: string[];
   type: 'multiple';
}
export type QuizeType = MultipleQuizType | BooleanQuizType;
