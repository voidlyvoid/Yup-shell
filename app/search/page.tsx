import { Header } from '@/components/header'
import { Suspense } from 'react'
import SearchPageContent from './search-content'

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={<div className="py-12 text-center">Loading search...</div>}>
        <SearchPageContent />
      </Suspense>

    </div>
  )
}
