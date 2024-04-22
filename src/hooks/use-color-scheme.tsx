import { useLayoutEffect, useState } from 'react'


export function useColorScheme() {
  const [isChecked, setChecked] = useState<boolean | null>(null)

  useLayoutEffect(() => {
    if (!localStorage.getItem('color-scheme')) {
      setChecked(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }

    localStorage.getItem('color-scheme') === 'dark'
      ? setChecked(true)
      : setChecked(false)
  }, [])

  return isChecked
}
