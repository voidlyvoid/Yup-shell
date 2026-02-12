'use client'

import { Question } from '@/lib/questions-data'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bookmark, BookmarkCheck, Eye, Target } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface QuestionCardProps {
  question: Question
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setIsBookmarked(bookmarks.includes(question.id))
  }, [question.id])

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    if (isBookmarked) {
      const filtered = bookmarks.filter((id: number) => id !== question.id)
      localStorage.setItem('bookmarks', JSON.stringify(filtered))
    } else {
      bookmarks.push(question.id)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    }
    setIsBookmarked(!isBookmarked)
  }

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-amber-100 text-amber-800',
    hard: 'bg-red-100 text-red-800',
  }

  const typeColors = {
    MCQ: 'bg-blue-100 text-blue-800',
    VSA: 'bg-purple-100 text-purple-800',
    SA: 'bg-cyan-100 text-cyan-800',
    LA: 'bg-orange-100 text-orange-800',
  }

  return (
    <Card className="p-5 hover:shadow-lg transition-all duration-300 border-primary/10 group">
      <div className="space-y-4">
        {/* Header with Topic */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
              {question.topic}
            </p>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {question.subtopic}
            </p>
          </div>
          <button
            onClick={toggleBookmark}
            className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5 text-primary fill-primary" />
            ) : (
              <Bookmark className="w-5 h-5 text-muted-foreground hover:text-primary" />
            )}
          </button>
        </div>

        {/* Question Text */}
        <div className="space-y-2">
          <Link href={`/question/${question.id}`} className="block group-hover:text-primary transition-colors">
            <h3 className="text-base font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
              {question.question_stem}
            </h3>
          </Link>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {question.is_important && (
            <Badge className="text-xs font-bold bg-red-500 text-white hover:bg-red-600">
              IMP
            </Badge>
          )}
          <Badge className={`text-xs font-medium ${typeColors[question.question_type]}`}>
            {question.question_type}
          </Badge>
          <Badge className={`text-xs font-medium ${difficultyColors[question.difficulty]}`}>
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </Badge>
          <Badge variant="secondary" className="text-xs font-medium">
            {question.predicted_marks} Marks
          </Badge>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-primary/10">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>{question.confidence_score}% Confidence</span>
            </div>
          </div>
          <Link
            href={`/question/${question.id}`}
            className="text-xs font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1"
          >
            View
            <Eye className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
