// src/lib/readingTime.ts
import readingTime from 'reading-time';

const WPM_BY_LOCALE: Record<string, number> = {
  en: 225,
  ar: 200,
};

// Helper to extract text from Contentful Rich Text JSON or plain strings
function extractText(node: any): string {
  if (!node || typeof node !== 'object') return '';

  // If it's a Rich Text node with text content
  if (node.nodeType === 'text' && typeof node.value === 'string') {
    return node.value;
  }

  // If it's a container (like document or paragraph) recurse into children
  if (Array.isArray(node.content)) {
    return node.content.map(extractText).join(' ');
  }

  return '';
}

// Main conversion function
export function toPlainText(content: unknown): string {
  // Case 1: It's already a string
  if (typeof content === 'string') return content;
  
  // Case 2: It's a Rich Text object (Document)
  if (content && typeof content === 'object' && 'nodeType' in content) {
    return extractText(content);
  }

  // Case 3: It's null, number, boolean, etc. -> return empty string
  return '';
}

export function getReadingTime(content: unknown, locale: string) {
  const text = toPlainText(content);
  
  // Safety check: if text is empty, return 0 or 1
  if (!text) {
    return { minutes: 0, label: '0 min read' };
  }

  const stats = readingTime(text, {
    wordsPerMinute: WPM_BY_LOCALE[locale] ?? 225,
  });

  const minutes = Math.max(1, Math.ceil(stats.minutes));

  return {
    minutes,
    label: locale === 'ar' ? `${minutes} دقيقة قراءة` : `${minutes} min read`,
  };
}