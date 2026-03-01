export const calculateATSScore = (resumeText, keywords) => {
  let match = 0
  keywords.forEach((k) => {
    if (resumeText.includes(k)) match++
  })
  return Math.round((match / keywords.length) * 100)
}
