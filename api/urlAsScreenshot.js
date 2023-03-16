import urlAsScreenshotEndpoint from '../vercel/urlAsScreenshotEndpoint'

export default async (request, response) => {
  request.query.url = 'https://news.ycombinator.com/'

  return urlAsScreenshotEndpoint(request, response)
}
