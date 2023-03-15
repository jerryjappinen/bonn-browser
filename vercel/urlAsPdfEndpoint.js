import getUrlAsPdf from '../src/getUrlAsPdf'

export default async (request, response) => {
  const pdf = await getUrlAsPdf(request.query.url, request.query)

  response.setHeader('Content-Type', 'application/pdf')
  response.setHeader('Content-Length', pdf.length)
  response.status(200)
  response.end(pdf)
}
