// src/lib/readingTime.ts
import readingTime from "reading-time";

const WPM_BY_LOCALE: Record<string, number> = {
  "en-US": 225,
  ar: 200,
};

export function getReadingTime(markdown: string, locale: string) {
  const stats = readingTime(markdown, {
    wordsPerMinute: WPM_BY_LOCALE[locale] ?? 225,
  });
  const minutes = Math.max(1, Math.ceil(stats.minutes));

  return {
    words: stats.words,
    text:
      locale === "ar"
        ? `${minutes} دقيقة قراءة`
        : `${minutes} min read`, // "3 min read"
  };
}
