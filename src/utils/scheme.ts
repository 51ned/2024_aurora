'use server'


async function setColorScheme() {
  const us = getUserScheme()
  const ls = getLocalScheme()

  if (us === ls || !ls) return

  document.documentElement.setAttribute('data-color-scheme', ls)
}

function getUserScheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

function getLocalScheme() {
  return localStorage.getItem('colorScheme')
}


export { setColorScheme }
