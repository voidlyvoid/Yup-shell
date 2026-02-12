'use client'

import { QuestionCard } from '@/components/question-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { questionsData } from '@/lib/questions-data'
import { comprehensiveQuestions } from '@/lib/comprehensive-questions'
import { extendedQuestionsSet1 } from '@/lib/extended-questions-1'
import { extendedQuestionsSet2 } from '@/lib/extended-questions-2'
import { extendedQuestionsSet3 } from '@/lib/extended-questions-3'
import { importantQuestions } from '@/lib/important-questions'
import { getCombinedQuestions } from '@/lib/utils'
import { Search, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useMemo } from 'react'

export default function SearchPageContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  // Combine all questions with offset IDs
  const allQuestions = useMemo(() => {
    return getCombinedQuestions(
      questionsData,
      comprehensiveQuestions,
      extendedQuestionsSet1,
      extendedQuestionsSet2,
      extendedQuestionsSet3,
      importantQuestions
    )
  }, [])

  const results = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    return allQuestions.filter(q =>
      q.question_stem.toLowerCase().includes(query) ||
      q.topic.toLowerCase().includes(query) ||
      q.subtopic.toLowerCase().includes(query) ||
      q.answer_outline.some(outline => outline.toLowerCase().includes(query)) ||
      q.full_solution.toLowerCase().includes(query)
    )
  }, [searchQuery, allQuestions])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // URL will update via useSearchParams
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/questions"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>

          <h1 className="text-4xl font-bold mb-6">Search Results</h1>

          {/* Search Box */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search questions, topics, concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-12 rounded-lg border border-primary/20 focus:border-primary text-lg"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchQuery.trim() ? (
            <>
              <p className="text-lg text-foreground/60 mb-8">
                Found {results.length} {results.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </p>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">No results found</h2>
                  <p className="text-foreground/60 mb-6">Try searching for different keywords or browse by topic</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/questions">
                      <Button variant="outline" className="border-primary/20">
                        Browse All Questions
                      </Button>
                    </Link>
                    <Link href="/topics">
                      <Button className="bg-gradient-to-r from-primary to-accent">
                        Explore Topics
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center">
              <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Start Searching</h2>
              <p className="text-foreground/60">Enter keywords to search through questions and topics</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
