'use client'

import { Header } from '@/components/header'
import { TopicCard } from '@/components/topic-card'
import { QuestionCard } from '@/components/question-card'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { questionsData, topics } from '@/lib/questions-data'
import { comprehensiveQuestions } from '@/lib/comprehensive-questions'
import { extendedQuestionsSet1 } from '@/lib/extended-questions-1'
import { extendedQuestionsSet2 } from '@/lib/extended-questions-2'
import { extendedQuestionsSet3 } from '@/lib/extended-questions-3'
import { importantQuestions } from '@/lib/important-questions'
import { BookOpen, Zap, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [stats, setStats] = useState({ total: 0, topics: 0, marks5: 0, marks4: 0, marks2: 0 })

  useEffect(() => {
    // Combine all questions
    const allQuestions = [...questionsData, ...comprehensiveQuestions, ...extendedQuestionsSet1, ...extendedQuestionsSet2, ...extendedQuestionsSet3, ...importantQuestions]
    
    const marks5 = allQuestions.filter(q => q.predicted_marks === 5).length
    const marks4 = allQuestions.filter(q => q.predicted_marks === 4).length
    const marks2 = allQuestions.filter(q => q.predicted_marks === 2).length
    setStats({
      total: allQuestions.length,
      topics: topics.length,
      marks5,
      marks4,
      marks2,
    })
  }, [])

  const allQuestions = [...questionsData, ...comprehensiveQuestions, ...extendedQuestionsSet1, ...extendedQuestionsSet2, ...extendedQuestionsSet3, ...importantQuestions]
  const topicStats = topics.map(topic => ({
    topic,
    count: allQuestions.filter(q => q.topic === topic).length,
  }))

  const featuredQuestions = allQuestions.slice(0, 3)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit bg-primary/10 text-primary border-0 px-3 py-1">
                  Master Class 12 Physics
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-bold text-balance">
                  Better Physics Shell
                </h1>
                <p className="text-xl text-foreground/70">
                  Master CBSE Class 12 Physics with comprehensive predicted questions, detailed solutions, and expert explanations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/questions" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                    Start Practicing
                  </Button>
                </Link>
                <Link href="/topics" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 hover:bg-primary/5">
                    Explore Topics
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/10">
                <div>
                  <p className="text-3xl font-bold text-primary">{stats.total}</p>
                  <p className="text-sm text-foreground/60">Total Questions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">{stats.topics}</p>
                  <p className="text-sm text-foreground/60">Topics Covered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">{stats.marks5 + stats.marks4 + stats.marks2}</p>
                  <p className="text-sm text-foreground/60">Study Hours</p>
                </div>
              </div>
            </div>

            {/* Right - Feature Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
              <Card className="relative p-8 border-primary/20 bg-white/50 backdrop-blur-sm space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Why Choose Better Physics Shell?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">Predicted questions with confidence scores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">Step-by-step solutions for every question</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">Track your progress and performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground/80">Organized by topics and difficulty levels</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Learning Dashboard</h2>
            <p className="text-lg text-foreground/60">Comprehensive statistics to track your preparation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-primary/10 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">{stats.total}</div>
              <p className="text-foreground/60">Total Questions</p>
            </Card>
            <Card className="p-6 border-primary/10 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-2">{stats.marks5}</div>
              <p className="text-foreground/60">5-Marks Questions</p>
            </Card>
            <Card className="p-6 border-primary/10 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-secondary mb-2">{stats.marks4}</div>
              <p className="text-foreground/60">4-Marks Questions</p>
            </Card>
            <Card className="p-6 border-primary/10 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-500 mb-2">{stats.marks2}</div>
              <p className="text-foreground/60">2-Marks Questions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Physics Topics</h2>
            <p className="text-lg text-foreground/60">Explore questions across all major topics</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicStats.map(({ topic, count }) => (
              <TopicCard key={topic} topic={topic} questionCount={count} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/topics">
              <Button variant="outline" size="lg" className="border-primary/20">
                View All Topics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Questions</h2>
            <p className="text-lg text-foreground/60">Top predicted exam questions to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredQuestions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/questions">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                View All Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Ready to Excel in Physics?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of students preparing for their CBSE Class 12 Physics exam with Better Physics Shell. Start with high-confidence predicted questions and detailed solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questions">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                Start Practicing Now
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-primary/20">
                View Your Progress
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Better Physics Shell</h3>
              <p className="text-foreground/60">Master Class 12 CBSE Physics with comprehensive question bank and solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-foreground/60">
                <li><Link href="/topics" className="hover:text-primary transition-colors">Topics</Link></li>
                <li><Link href="/questions" className="hover:text-primary transition-colors">Questions</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/10 text-center text-foreground/60">
            <p>© 2026 Better Physics Shell | Made by SANJAYKANTH | All rights reserved. | Made with dedication for Class 12 Physics</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
