/**
 * Weighted Search Utility
 * Weights: Title (10), Tags (7), Category (5), Description (3)
 */

interface SearchItem {
  title: string;
  description: string;
  category: string;
  tags: string[];
  [key: string]: any;
}

const WEIGHTS = {
  title: 10,
  tags: 7,
  category: 5,
  description: 3,
};

export function calculateSearchScore(item: SearchItem, query: string): number {
  const normalizedQuery = query.toLowerCase().trim();
  const keywords = normalizedQuery.split(/\s+/);
  let totalScore = 0;

  // Fuzzy check: for each keyword, check if it's contained in the fields
  keywords.forEach((keyword) => {
    if (!keyword) return;

    if (item.title.toLowerCase().includes(keyword)) {
      totalScore += WEIGHTS.title;
    }
    if (item.category.toLowerCase().includes(keyword)) {
      totalScore += WEIGHTS.category;
    }
    if (item.description.toLowerCase().includes(keyword)) {
      totalScore += WEIGHTS.description;
    }
    if (item.tags?.some((tag) => tag.toLowerCase().includes(keyword))) {
      totalScore += WEIGHTS.tags;
    }
  });

  return totalScore;
}

export function sortItemsByScore<T extends SearchItem>(items: T[], query: string): T[] {
  return items
    .map((item) => ({
      item,
      score: calculateSearchScore(item, query),
    }))
    .filter((res) => res.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((res) => res.item);
}
