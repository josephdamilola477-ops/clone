import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StyleSuggester } from './StyleSuggester';

export default function SuggestStylesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary">AI Style Adaptation Tool</h1>
            <p className="mt-2 text-lg text-foreground/80">
              Get AI-powered suggestions to evolve your website's design based on current trends.
            </p>
          </div>
          <StyleSuggester />
        </div>
      </div>
    </div>
  );
}
