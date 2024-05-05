'use client'

import { useEffect, useState } from 'react'

import { Toggle } from 'ui/atoms'


const labelsData = [
  { labelText: 'Светлая' },
  { labelText: 'Тёмная' }
]


export function ColorThemeToggle() {   
  const [isChecked, setChecked] = useState(false)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setChecked(true)
      }
    }
  }, [])
  
  const isCheckedHandle = isChecked
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {setChecked(!isChecked)}

  return (
    <Toggle
      inputLabels={labelsData}
      isChecked={isCheckedHandle}
      legendText='Тема оформления'
      nameText='color-theme-toggle-input'
      onChangeHandle={onChangeHandle}
    />
  )
}