export interface QuizOptions {
  NumberQuestions: number;
  SelectCategory: string[];
  SelectDifficulty: string[];
  SelectType: string[];
}

export interface QuizApiOptions {
  amount: number;
  category: number;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'boolean' | 'multiple';
}
