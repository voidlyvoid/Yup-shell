'use client'

import { Header } from '@/components/header'
import { TopicCard } from '@/components/topic-card'
import { questionsData, topics } from '@/lib/questions-data'
import { useState, useEffect } from 'react'

export default function TopicsPage() {
  const [progress, setProgress] = useState<Record<string, number>>({})

  useEffect(() => {
    const views = JSON.parse(localStorage.getItem('views') || '{}')
    const newProgress: Record<string, number> = {}
    
    topics.forEach(topic => {
      const topicQuestions = questionsData.filter(q => q.topic === topic)
      const viewedCount = topicQuestions.filter(q => views[q.id]).length
      newProgress[topic] = topicQuestions.length > 0 
        ? (viewedCount / topicQuestions.length) * 100 
        : 0
    })
    
    setProgress(newProgress)
  }, [])

  const topicStats = topics.map(topic => ({
    topic,
    count: questionsData.filter(q => q.topic === topic).length,
    progress: progress[topic] || 0,
  }))

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">All Physics Topics</h1>
          <p className="text-lg text-foreground/60">Master Class 12 CBSE Physics with {topics.length} comprehensive topics</p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicStats.map(({ topic, count, progress }) => (
              <TopicCard 
                key={topic} 
                topic={topic} 
                questionCount={count}
                progress={progress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Topics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">{topics.length}</p>
              <p className="text-foreground/60">Total Topics</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">{questionsData.length}</p>
              <p className="text-foreground/60">Total Questions</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">100+</p>
              <p className="text-foreground/60">Study Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/60">
          <p>Better Physics Shell © 2024 | Comprehensive CBSE Class 12 Physics Question Bank</p>
        </div>
      </footer>
    </div>
  )
}
