'use client'


import { useEffect, useState } from 'react'

import { Toggle } from 'ui/atoms'
import { getFromWindow, setToCookies } from 'utils/theme-handles'
import { inputsData } from 'lib/components-data/theme-toggle'

import s from './theme-toggle.module.css'


export function ThemeToggle({ theme }: { theme: string | null }) {
  const [currTheme, setCurrTheme] = useState(theme)

  useEffect(() => {
    if (!theme) {
      const windowTheme = getFromWindow()

      setCurrTheme(windowTheme)
      setToCookies(windowTheme)
    }
  }, [theme])

  const onInputChange = (value: string) => {
    setCurrTheme(value)
  }
  
  return (
    <Toggle
      customStyles={s.icon}
      inputsData={inputsData}
      inputSize={32}
      legendText='Тема оформления'
      onInputChange={onInputChange}
      toggleDir='horisontal'
      valueToCompare={currTheme}
    />
  )
}
