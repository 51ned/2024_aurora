/**
 * ColorThemeToggle component for toggling between light and dark themes.
 * 
 * @param {string | null} theme - The current theme ('light' or 'dark'), or null if not specified.
 * 
 * Theme is passed from 'src/app/layout.tsx' and retrieved from HTTP headers (if using a Chromium browser) or cookies (if they exist).
 * Inside the 'useEffect' hook, the theme, retrieved from the browser's 'Window' object is recorded to cookies for better performance.
 */


'use client'


import { useEffect, useState } from 'react'

import { Toggle } from 'ui/atoms'
import { getFromWindow, setToCookies } from 'utils/theme-handles/.'
import { labelsData } from 'lib/components-data/theme-toggle'


export function ThemeToggle({ theme }: { theme: string | null }) {
  const [isChecked, setChecked] = useState(theme === 'dark')

  useEffect(() => {
    if (!theme) {
      const windowTheme = getFromWindow()

      setChecked(windowTheme === 'dark')
      setToCookies(windowTheme)
    }
  }, [theme])

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked)
  }
  
  return (
    <Toggle
      labelsData={labelsData}
      isChecked={isChecked}
      legendText='Тема оформления'
      nameText='theme-toggle'
      onChangeHandle={onChangeHandle}
    />
  )
}
