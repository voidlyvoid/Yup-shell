'use client'

import { topics, questionTypes, marks } from '@/lib/questions-data'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface FilterSidebarProps {
  selectedTopics: string[]
  selectedTypes: string[]
  selectedMarks: number[]
  selectedDifficulty: string[]
  onTopicChange: (topic: string) => void
  onTypeChange: (type: string) => void
  onMarksChange: (mark: number) => void
  onDifficultyChange: (difficulty: string) => void
  onReset: () => void
}

export function FilterSidebar({
  selectedTopics,
  selectedTypes,
  selectedMarks,
  selectedDifficulty,
  onTopicChange,
  onTypeChange,
  onMarksChange,
  onDifficultyChange,
  onReset,
}: FilterSidebarProps) {
  return (
    <div className="space-y-4">
      <Card className="p-4 border-primary/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Filters</h3>
          {(selectedTopics.length > 0 || selectedTypes.length > 0 || selectedMarks.length > 0 || selectedDifficulty.length > 0) && (
            <button
              onClick={onReset}
              className="text-xs text-primary hover:text-accent transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      </Card>

      {/* Topics */}
      <Card className="p-4 border-primary/10 space-y-3">
        <h4 className="font-semibold text-sm text-foreground">Topics</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {topics.map((topic) => (
            <label key={topic} className="flex items-center gap-2 cursor-pointer hover:bg-primary/5 p-2 rounded transition-colors">
              <Checkbox
                checked={selectedTopics.includes(topic)}
                onCheckedChange={() => onTopicChange(topic)}
              />
              <span className="text-sm text-foreground/80">{topic}</span>
            </label>
          ))}
        </div>
      </Card>

      {/* Question Types */}
      <Card className="p-4 border-primary/10 space-y-3">
        <h4 className="font-semibold text-sm text-foreground">Question Type</h4>
        <div className="space-y-2">
          {questionTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-primary/5 p-2 rounded transition-colors">
              <Checkbox
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => onTypeChange(type)}
              />
              <span className="text-sm text-foreground/80">{type}</span>
            </label>
          ))}
        </div>
      </Card>

      {/* Marks */}
      <Card className="p-4 border-primary/10 space-y-3">
        <h4 className="font-semibold text-sm text-foreground">Marks</h4>
        <div className="space-y-2">
          {marks.map((mark) => (
            <label key={mark} className="flex items-center gap-2 cursor-pointer hover:bg-primary/5 p-2 rounded transition-colors">
              <Checkbox
                checked={selectedMarks.includes(mark)}
                onCheckedChange={() => onMarksChange(mark)}
              />
              <span className="text-sm text-foreground/80">{mark} marks</span>
            </label>
          ))}
        </div>
      </Card>

      {/* Difficulty */}
      <Card className="p-4 border-primary/10 space-y-3">
        <h4 className="font-semibold text-sm text-foreground">Difficulty</h4>
        <div className="space-y-2">
          {['easy', 'medium', 'hard'].map((difficulty) => (
            <label key={difficulty} className="flex items-center gap-2 cursor-pointer hover:bg-primary/5 p-2 rounded transition-colors">
              <Checkbox
                checked={selectedDifficulty.includes(difficulty)}
                onCheckedChange={() => onDifficultyChange(difficulty)}
              />
              <span className="text-sm text-foreground/80 capitalize">{difficulty}</span>
            </label>
          ))}
        </div>
      </Card>
    </div>
  )
}
