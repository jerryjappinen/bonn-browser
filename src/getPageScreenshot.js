// https://pptr.dev/api/puppeteer.page.screenshot#parameters
export default async (page, options) => {
  const {
    jpg,
    quality,
    full,
    clip,
    omitBackground
  } = (options || {})

  const pageOptions = {
    type: 'png',
    fullPage: !!full,
    clip,
    omitBackground
  }

  if (jpg) {
    pageOptions.type = 'jpeg'

    if (quality) {
      pageOptions.quality = Math.min(Math.abs(quality), 100)
    }
  }

  const screenshot = await page.screenshot(pageOptions)

  return screenshot
}
