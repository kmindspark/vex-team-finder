import type {VercelRequest, VercelResponse} from '@vercel/node'

const handler = (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send(`Welcome to the API!`)
}
export default handler
