import natural from "natural"

const tokenizer = new natural.WordTokenizer()

export const extractKeywords = (text) => {
  const words = tokenizer.tokenize(text.toLowerCase())
  const frequency = {}

  words.forEach((w) => {
    if (w.length > 3) frequency[w] = (frequency[w] || 0) + 1
  })

  return Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a])
    .slice(0, 20)
}
