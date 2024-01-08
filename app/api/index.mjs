import data from '@begin/data'

export async function get (req) {
  let loggedIn = !!req.session.loggedIn
  if (loggedIn) {
    let links = await data.get({table: 'links'}) 
    return {
      json: { loggedIn, links }
    }
  }
  else {
    return {
      json: { loggedIn }
    }
  }
}

export async function post (req) {
  // logging out
  if (req.body.logout) {
    return { location: '/', session: {} }
  }
  // logging in
  if (req.body.password === process.env.PSWD) {
    return { location: '/', session: { loggedIn: true }}
  } 
  // bad pswd
  return { location: '/?fail' }
}
