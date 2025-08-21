export interface Card {
    id: string;
    title: string;
    content?: string;                     // contenu optionnel
    difficulty?: 'easy' | 'medium' | 'hard'; // difficulté indicative
    createdAt?: string;                   // ISO string
    updatedAt?: string;                   // ISO string
  }