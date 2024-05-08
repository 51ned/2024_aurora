'use client'


import { useEffect, useState } from 'react'

import { Toggle } from 'ui/atoms'
import { getFromWindow, setToCookies } from 'utils/.'


const labelsData = [
  { labelText: 'Светлая' },
  { labelText: 'Тёмная' }
]


export function ColorThemeToggle({ theme }: { theme: string | null }) {
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
      inputLabels={labelsData}
      isChecked={isChecked}
      legendText='Тема оформления'
      nameText='color-theme-toggle'
      onChangeHandle={onChangeHandle}
    />
  )
}
