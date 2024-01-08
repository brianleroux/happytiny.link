import data from '@begin/data'

export async function post (req) {
  let table = 'links'
  let { incrs: count } = await data.incr({ table, key: 'auto-incr', prop: 'incrs' })
  let href = req.body.href
  let key = btoa(count).replace('==', '')
  let link = await data.set({table, key, href})
  let location = `/?href=${href}&key=${link.key}`
  return { location }
}
