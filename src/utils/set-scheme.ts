export function setColorScheme() {
  const prefScheme = window.matchMedia('(prefers-color-scheme: dark)')

  prefScheme.matches
    ? console.log('тёмная тема')
    : console.log('светлая тема')
}
