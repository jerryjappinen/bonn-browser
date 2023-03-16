import urlAsPdfEndpoint from '../vercel/urlAsPdfEndpoint'

export default async (request, response) => {
  request.query.url = 'https://news.ycombinator.com/'

  return urlAsPdfEndpoint(request, response)
}
