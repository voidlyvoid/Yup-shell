import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Question } from './questions-data'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Create a combined questions array with offset IDs to avoid conflicts
export function getCombinedQuestions(
  questionsData: Question[],
  comprehensiveQuestions: Question[],
  extendedQuestionsSet1: Question[],
  extendedQuestionsSet2: Question[],
  extendedQuestionsSet3: Question[],
  importantQuestions: Question[]
): Question[] {
  let currentId = 1
  const allQuestions: Question[] = []
  
  // Offset and add questionsData
  allQuestions.push(...questionsData.map(q => ({ ...q, id: currentId++ })))
  
  // Offset and add comprehensiveQuestions
  allQuestions.push(...comprehensiveQuestions.map(q => ({ ...q, id: currentId++ })))
  
  // Offset and add extendedQuestionsSet1
  allQuestions.push(...extendedQuestionsSet1.map(q => ({ ...q, id: currentId++ })))
  
  // Offset and add extendedQuestionsSet2
  allQuestions.push(...extendedQuestionsSet2.map(q => ({ ...q, id: currentId++ })))
  
  // Offset and add extendedQuestionsSet3
  allQuestions.push(...extendedQuestionsSet3.map(q => ({ ...q, id: currentId++ })))
  
  // Offset and add importantQuestions
  allQuestions.push(...importantQuestions.map(q => ({ ...q, id: currentId++ })))
  
  return allQuestions
}

