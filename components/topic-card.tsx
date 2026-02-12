import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface TopicCardProps {
  topic: string
  questionCount: number
  progress?: number
}

const topicIcons = {
  'Electrostatics': '⚡',
  'Current Electricity': '🔌',
  'Magnetism': '🧲',
  'EM Induction': '🌊',
  'AC Circuits': '⛓️',
  'Ray Optics': '🔍',
  'Wave Optics': '🌈',
  'Dual Nature of Matter': '🔬',
  'Atoms': '⚛️',
  'Semiconductor Devices': '📱',
}

export function TopicCard({ topic, questionCount, progress = 0 }: TopicCardProps) {
  const icon = (topicIcons as Record<string, string>)[topic] || '📚'

  return (
    <Link href={`/topics/${topic}`}>
      <Card className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-primary/10 group h-full">
        <div className="space-y-4">
          {/* Icon and Title */}
          <div className="space-y-2">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {topic}
            </h3>
          </div>

          {/* Question Count */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {questionCount} {questionCount === 1 ? 'question' : 'questions'}
            </span>
            <Badge variant="secondary" className="text-xs">
              {Math.round(progress)}%
            </Badge>
          </div>

          {/* Progress Bar */}
          {progress > 0 && (
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
            Explore
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
