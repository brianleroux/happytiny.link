export default function page ({ html, state }) {
  let login = `<form-login></form-login>`
  let links = `<form-logout></form-logout><form-link></form-link><list-links></list-links>`
  return html`${ state.store.loggedIn? links : login }`
}
