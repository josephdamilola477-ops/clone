"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestStyleAdaptations } from '@/ai/flows/suggest-style-adaptations';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  currentStyleDescription: z.string().min(20, {
    message: "Please describe your style in at least 20 characters.",
  }),
});

export function StyleSuggester() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentStyleDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await suggestStyleAdaptations(values);
      setSuggestion(result.suggestedAdaptations);
    } catch (error) {
      console.error("Error getting style suggestions:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get style suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Describe Your Style</CardTitle>
          <CardDescription>
            Enter a description of your current website's design, and our AI will suggest modern adaptations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="currentStyleDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Style Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'Minimalist design with a monochromatic color scheme, serif fonts, and ample white space.'"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Suggestions
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-6 w-6 animate-spin text-primary" />
                    <p className="text-foreground/80">AI is thinking...</p>
                </div>
            </CardContent>
        </Card>
      )}

      {suggestion && (
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Suggested Adaptations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                {suggestion.split('\n').map((line, index) => (
                    line.trim() ? <p key={index}>{line.replace(/^- /, '• ')}</p> : null
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
