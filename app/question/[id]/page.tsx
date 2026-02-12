'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { questionsData, Question } from '@/lib/questions-data'
import { Bookmark, BookmarkCheck, ChevronLeft, Eye, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function QuestionDetailPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const question = questionsData.find(q => q.id === id)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [viewCount, setViewCount] = useState(0)

  useEffect(() => {
    if (!question) return
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setIsBookmarked(bookmarks.includes(question.id))

    // Increment view count
    const views = JSON.parse(localStorage.getItem('views') || '{}')
    views[question.id] = (views[question.id] || 0) + 1
    localStorage.setItem('views', JSON.stringify(views))
    setViewCount(views[question.id])
  }, [question])

  const toggleBookmark = () => {
    if (!question) return
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

  if (!question) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Question Not Found</h1>
            <p className="text-foreground/60 mb-6">The question you're looking for doesn't exist.</p>
            <Link href="/questions">
              <Button>Back to Questions</Button>
            </Link>
          </div>
        </section>
      </div>
    )
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

  // Get related questions
  const relatedQuestions = questionsData
    .filter(q => q.topic === question.topic && q.id !== question.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/questions"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Questions
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Question Header */}
          <Card className="p-8 border-primary/10 mb-8 space-y-6">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {question.topic}
                </p>
                <p className="text-xs text-foreground/60">{question.subtopic}</p>
              </div>
              <button
                onClick={toggleBookmark}
                className="p-3 hover:bg-primary/10 rounded-lg transition-colors"
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-6 h-6 text-primary fill-primary" />
                ) : (
                  <Bookmark className="w-6 h-6 text-muted-foreground hover:text-primary" />
                )}
              </button>
            </div>

            {/* Question Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {question.question_stem}
              </h1>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
              <Badge className={`text-sm font-medium ${typeColors[question.question_type]}`}>
                {question.question_type}
              </Badge>
              <Badge className={`text-sm font-medium ${difficultyColors[question.difficulty]}`}>
                {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
              </Badge>
              <Badge variant="secondary" className="text-sm font-medium">
                {question.predicted_marks} Marks
              </Badge>
              <Badge variant="outline" className="text-sm font-medium">
                {question.confidence_score}% Confidence
              </Badge>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-primary/10">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-foreground/60">Confidence Score</p>
                  <p className="font-semibold text-primary">{question.confidence_score}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-foreground/60">Times Viewed</p>
                  <p className="font-semibold text-accent">{viewCount}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-xs text-foreground/60">Max Marks</p>
                  <p className="font-semibold text-secondary">{question.predicted_marks}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Hints Section */}
          {question.hint_phrases.length > 0 && (
            <Card className="p-6 border-primary/10 mb-8 border-l-4 border-l-secondary bg-secondary/5">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-secondary" />
                Hints
              </h3>
              <ul className="space-y-2">
                {question.hint_phrases.map((hint, idx) => (
                  <li key={idx} className="text-foreground/80 flex items-start gap-3">
                    <span className="text-secondary font-semibold mt-1">{idx + 1}.</span>
                    <span>{hint}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Answer Outline Section */}
          <Card className="p-6 border-primary/10 mb-8 border-l-4 border-l-accent bg-accent/5">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Answer Outline
            </h3>
            <ol className="space-y-3">
              {question.answer_outline.map((point, idx) => (
                <li key={idx} className="text-foreground/80 flex items-start gap-3">
                  <span className="text-accent font-semibold mt-1">{idx + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </Card>

          {/* Full Solution */}
          <Card className="p-6 border-primary/10 mb-8 border-l-4 border-l-primary bg-primary/5">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="w-full font-bold text-lg flex items-center justify-between hover:text-primary transition-colors mb-4"
            >
              <span>Full Solution</span>
              <span className={`transition-transform ${showSolution ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {showSolution && (
              <div className="text-foreground/80 whitespace-pre-wrap leading-relaxed">
                {question.full_solution}
              </div>
            )}
          </Card>

          {/* Related Questions */}
          {relatedQuestions.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Related Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedQuestions.map((q) => (
                  <Link key={q.id} href={`/question/${q.id}`}>
                    <Card className="p-5 h-full hover:shadow-lg hover:-translate-y-1 transition-all border-primary/10 cursor-pointer group">
                      <div className="space-y-3">
                        <Badge className="w-fit text-xs" variant="secondary">
                          {q.question_type}
                        </Badge>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {q.question_stem}
                        </h4>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {q.predicted_marks}M
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {q.confidence_score}%
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/60">
          <p>Better Physics Shell © 2024 | Comprehensive CBSE Class 12 Physics Question Bank</p>
        </div>
      </footer>
    </div>
  )
}
