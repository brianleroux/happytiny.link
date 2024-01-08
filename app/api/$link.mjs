import data from '@begin/data'

export async function get (req) {
  let link = await data.get({table: 'links', key: req.params.link })
  return {
    statusCode: 303,
    headers: {
      location: 'https://' + link.href
    }
  }
}
