import getUrlAsScreenshot from '../src/getUrlAsScreenshot'

export default async (request, response) => {
  const img = await getUrlAsScreenshot(request.query.url, request.query)

  response.setHeader('Content-Type', 'image/' + (request.query.jpg ? 'jpeg' : 'png'))
  response.setHeader('Content-Length', img.length)
  response.status(200)
  response.end(img)
}
