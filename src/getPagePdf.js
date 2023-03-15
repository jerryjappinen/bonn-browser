// https://pptr.dev/api/puppeteer.pdfoptions#properties
export default async (page, options) => {
  const {
    format,
    paperHeight,
    paperWidth,
    omitBackground,

    footerTemplate,
    headerTemplate,

    margin,
    marginLeft,
    marginTop,
    marginRight,
    marginBottom
  } = (options || {})

  const defaultMargin = margin || '1cm'

  const pdf = await page.pdf({
    format: format || 'A4',
    paperHeight,
    paperWidth,
    omitBackground,
    printBackground: true,
    displayHeaderFooter: false,

    footerTemplate,
    headerTemplate,

    margin: {
      left: marginLeft || defaultMargin,
      top: marginTop || defaultMargin,
      right: marginRight || defaultMargin,
      bottom: marginBottom || defaultMargin
    }
  })

  return pdf
}
