export const generateCoverLetter = async (req, res) => {
  const { name, role, company } = req.body

  const letter = `
Dear Hiring Manager,

My name is ${name}. I am excited to apply for the ${role} position at ${company}.
I believe my skills and experience align perfectly.

Sincerely,
${name}
`

  res.json({ letter })
}
