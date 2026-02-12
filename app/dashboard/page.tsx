'use client'

import { Header } from '@/components/header'
import { QuestionCard } from '@/components/question-card'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { questionsData } from '@/lib/questions-data'
import { comprehensiveQuestions } from '@/lib/comprehensive-questions'
import { extendedQuestionsSet1 } from '@/lib/extended-questions-1'
import { extendedQuestionsSet2 } from '@/lib/extended-questions-2'
import { extendedQuestionsSet3 } from '@/lib/extended-questions-3'
import { importantQuestions } from '@/lib/important-questions'
import { Bookmark, Eye, TrendingUp, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const [bookmarks, setBookmarks] = useState<number[]>([])
  const [views, setViews] = useState<Record<number, number>>({})
  const [stats, setStats] = useState({
    totalViewed: 0,
    totalBookmarked: 0,
    avgDifficulty: 'Medium',
    timeSpent: 0,
  })
  const [isClient, setIsClient] = useState(false)

  // Combine all questions
  const allQuestions = [...questionsData, ...comprehensiveQuestions, ...extendedQuestionsSet1, ...extendedQuestionsSet2, ...extendedQuestionsSet3, ...importantQuestions]

  useEffect(() => {
    setIsClient(true)
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const savedViews = JSON.parse(localStorage.getItem('views') || '{}')
    
    setBookmarks(savedBookmarks)
    setViews(savedViews)

    const totalViewed = Object.values(savedViews).reduce((a: number, b: any) => a + b, 0) as number
    const bookmarkedQuestions = allQuestions.filter(q => savedBookmarks.includes(q.id))
    const viewedQuestions = allQuestions.filter(q => savedViews[q.id])

    const avgDiff = viewedQuestions.length > 0
      ? viewedQuestions.reduce((sum, q) => {
          const diffValue = q.difficulty === 'hard' ? 3 : q.difficulty === 'medium' ? 2 : 1
          return sum + diffValue
        }, 0) / viewedQuestions.length
      : 0

    const difficultyLabel = avgDiff > 2.5 ? 'Hard' : avgDiff > 1.5 ? 'Medium' : 'Easy'

    setStats({
      totalViewed,
      totalBookmarked: savedBookmarks.length,
      avgDifficulty: difficultyLabel,
      timeSpent: Math.round(totalViewed * 3),
    })
  }, [])

  const bookmarkedQuestions = isClient ? allQuestions.filter(q => bookmarks.includes(q.id)) : []
  const recentlyViewed = isClient ? allQuestions
    .filter(q => views[q.id])
    .sort((a, b) => (views[b.id] || 0) - (views[a.id] || 0))
    .slice(0, 3) : []

  const topicProgress = allQuestions.reduce((acc, q) => {
    if (!acc[q.topic]) {
      acc[q.topic] = { total: 0, viewed: 0 }
    }
    acc[q.topic].total++
    if (views[q.id]) {
      acc[q.topic].viewed++
    }
    return acc
  }, {} as Record<string, { total: number; viewed: number }>)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Your Study Dashboard</h1>
          <p className="text-lg text-foreground/60">Track your progress and manage your bookmarks</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 border-primary/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Questions Viewed</p>
                  <p className="text-3xl font-bold text-primary">{stats.totalViewed}</p>
                </div>
                <Eye className="w-6 h-6 text-primary opacity-50" />
              </div>
            </Card>

            <Card className="p-6 border-primary/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Bookmarked</p>
                  <p className="text-3xl font-bold text-accent">{stats.totalBookmarked}</p>
                </div>
                <Bookmark className="w-6 h-6 text-accent opacity-50" />
              </div>
            </Card>

            <Card className="p-6 border-primary/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Avg Difficulty</p>
                  <p className="text-3xl font-bold text-secondary">{stats.avgDifficulty}</p>
                </div>
                <TrendingUp className="w-6 h-6 text-secondary opacity-50" />
              </div>
            </Card>

            <Card className="p-6 border-primary/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Study Time (est.)</p>
                  <p className="text-3xl font-bold text-blue-500">{stats.timeSpent}h</p>
                </div>
                <Clock className="w-6 h-6 text-blue-500 opacity-50" />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recently Viewed */}
              {recentlyViewed.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Recently Viewed</h2>
                  <div className="space-y-3">
                    {recentlyViewed.map(q => (
                      <Card key={q.id} className="p-4 border-primary/10 hover:shadow-md transition-shadow">
                        <Link href={`/question/${q.id}`} className="block group">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-primary uppercase mb-1">{q.topic}</p>
                              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {q.question_stem}
                              </h3>
                              <div className="flex gap-2 mt-2">
                                <Badge variant="secondary" className="text-xs">{q.question_type}</Badge>
                                <Badge variant="outline" className="text-xs">{q.predicted_marks}M</Badge>
                              </div>
                            </div>
                            <div className="flex-shrink-0 text-right">
                              <p className="text-xs text-foreground/60">Viewed</p>
                              <p className="font-semibold text-primary">{views[q.id] || 0}x</p>
                            </div>
                          </div>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Bookmarked Questions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Bookmarked Questions</h2>
                  <Badge variant="secondary">{bookmarkedQuestions.length}</Badge>
                </div>
                
                {bookmarkedQuestions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookmarkedQuestions.map(q => (
                      <QuestionCard key={q.id} question={q} />
                    ))}
                  </div>
                ) : (
                  <Card className="p-12 border-primary/10 text-center">
                    <Bookmark className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                    <p className="text-foreground/60 mb-4">No bookmarks yet</p>
                    <p className="text-sm text-foreground/50 mb-6">Click the bookmark icon on any question to save it for later</p>
                    <Link href="/questions">
                      <Button variant="outline" className="border-primary/20">
                        Browse Questions
                      </Button>
                    </Link>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar - Topic Progress */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Topic Progress</h3>
                
                {Object.entries(topicProgress).map(([topic, { total, viewed }]) => {
                  const percentage = Math.round((viewed / total) * 100)
                  return (
                    <div key={topic} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">{topic}</p>
                        <Badge variant="secondary" className="text-xs">{viewed}/{total}</Badge>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-foreground/60">{percentage}% completed</p>
                    </div>
                  )
                })}
              </div>

              {/* Quick Actions */}
              <Card className="p-6 border-primary/10 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Link href="/questions" className="w-full block">
                    <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 justify-start">
                      View All Questions
                    </Button>
                  </Link>
                  <Link href="/topics" className="w-full block">
                    <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 justify-start">
                      Explore Topics
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Stats Summary */}
              <Card className="p-6 border-primary/10">
                <h3 className="font-bold mb-4">Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Total Questions</span>
                    <span className="font-semibold text-foreground">{allQuestions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Progress</span>
                    <span className="font-semibold text-primary">
                      {stats.totalViewed > 0 ? Math.round((stats.totalViewed / allQuestions.length) * 100) : 0}%
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-primary/10">
                    <span className="text-foreground/60">Completion</span>
                    <span className="font-semibold text-accent">
                      {allQuestions.length > 0 ? Math.round((stats.totalViewed / allQuestions.length) * 100) : 0}%
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/60">
          <p>Better Physics Shell © 2024 | Made by SANJAYKANTH | Comprehensive CBSE Class 12 Physics Question Bank</p>
        </div>
      </footer>
    </div>
  )
}
