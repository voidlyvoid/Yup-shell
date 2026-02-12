'use client'

import { Header } from '@/components/header'
import { QuestionCard } from '@/components/question-card'
import { FilterSidebar } from '@/components/filter-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoadingSpinner } from '@/components/loading-spinner'
import { questionsData } from '@/lib/questions-data'
import { comprehensiveQuestions } from '@/lib/comprehensive-questions'
import { extendedQuestionsSet1 } from '@/lib/extended-questions-1'
import { extendedQuestionsSet2 } from '@/lib/extended-questions-2'
import { extendedQuestionsSet3 } from '@/lib/extended-questions-3'
import { importantQuestions } from '@/lib/important-questions'
import { Search } from 'lucide-react'
import { useState, useMemo, useEffect } from 'react'

export default function QuestionsPage() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedMarks, setSelectedMarks] = useState<number[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'confidence' | 'marks' | 'difficulty'>('confidence')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  // Combine all questions
  const allQuestions = useMemo(() => {
    return [...questionsData, ...comprehensiveQuestions, ...extendedQuestionsSet1, ...extendedQuestionsSet2, ...extendedQuestionsSet3, ...importantQuestions]
  }, [])

  const filteredQuestions = useMemo(() => {
    let filtered = allQuestions

    // Topic filter
    if (selectedTopics.length > 0) {
      filtered = filtered.filter(q => selectedTopics.includes(q.topic))
    }

    // Type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(q => selectedTypes.includes(q.question_type))
    }

    // Marks filter
    if (selectedMarks.length > 0) {
      filtered = filtered.filter(q => selectedMarks.includes(q.predicted_marks))
    }

    // Difficulty filter
    if (selectedDifficulty.length > 0) {
      filtered = filtered.filter(q => selectedDifficulty.includes(q.difficulty))
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(q =>
        q.question_stem.toLowerCase().includes(query) ||
        q.topic.toLowerCase().includes(query) ||
        q.subtopic.toLowerCase().includes(query)
      )
    }

    // Sort
    if (sortBy === 'confidence') {
      filtered.sort((a, b) => b.confidence_score - a.confidence_score)
    } else if (sortBy === 'marks') {
      filtered.sort((a, b) => b.predicted_marks - a.predicted_marks)
    } else if (sortBy === 'difficulty') {
      const diffOrder = { hard: 3, medium: 2, easy: 1 }
      filtered.sort((a, b) => diffOrder[b.difficulty] - diffOrder[a.difficulty])
    }

    return filtered
  }, [selectedTopics, selectedTypes, selectedMarks, selectedDifficulty, searchQuery, sortBy])

  const handleTopicChange = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    )
  }

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const handleMarksChange = (mark: number) => {
    setSelectedMarks(prev =>
      prev.includes(mark)
        ? prev.filter(m => m !== mark)
        : [...prev, mark]
    )
  }

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(prev =>
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    )
  }

  const handleReset = () => {
    setSelectedTopics([])
    setSelectedTypes([])
    setSelectedMarks([])
    setSelectedDifficulty([])
    setSearchQuery('')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <LoadingSpinner />
            <p className="text-foreground/60 font-medium">Loading physics questions...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">All Questions</h1>
          <p className="text-lg text-foreground/60">Browse and filter {allQuestions.length} comprehensive physics questions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Hidden on mobile, visible on lg */}
            <div className="hidden lg:block">
              <FilterSidebar
                selectedTopics={selectedTopics}
                selectedTypes={selectedTypes}
                selectedMarks={selectedMarks}
                selectedDifficulty={selectedDifficulty}
                onTopicChange={handleTopicChange}
                onTypeChange={handleTypeChange}
                onMarksChange={handleMarksChange}
                onDifficultyChange={handleDifficultyChange}
                onReset={handleReset}
              />
            </div>

            {/* Questions Grid */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search and Sort Bar */}
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search questions by topic, keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 h-12 rounded-lg border border-primary/20 focus:border-primary"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-foreground/60">Sort by:</span>
                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === 'confidence' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('confidence')}
                      className="text-xs"
                    >
                      Confidence
                    </Button>
                    <Button
                      variant={sortBy === 'marks' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('marks')}
                      className="text-xs"
                    >
                      Marks
                    </Button>
                    <Button
                      variant={sortBy === 'difficulty' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('difficulty')}
                      className="text-xs"
                    >
                      Difficulty
                    </Button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/60">
                  Showing {filteredQuestions.length} of {allQuestions.length} questions
                </p>
                {(selectedTopics.length > 0 || selectedTypes.length > 0 || selectedMarks.length > 0 || selectedDifficulty.length > 0 || searchQuery) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="text-primary hover:bg-primary/10"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>

              {/* Questions Grid */}
              {filteredQuestions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredQuestions.map((question) => (
                    <QuestionCard key={question.id} question={question} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-lg text-foreground/60 mb-4">No questions found</p>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="border-primary/20"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/60">
          <p>Better Physics Shell © 2024 | Made by SANJAYKANTH | Comprehensive CBSE Class 12 Physics Question Bank</p>
        </div>
      </footer>
    </div>
  )
}
