import puppeteer from "puppeteer"

export const generatePDF = async (resume) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  })

  const page = await browser.newPage()

  await page.setContent(`
    <h1>${resume.content.name}</h1>
    <p>${resume.content.email}</p>
  `)

  const pdf = await page.pdf({ format: "A4" })
  await browser.close()
  return pdf
}
