'use client'

import { Toggle } from "ui/atoms"

import { useColorScheme } from 'hooks/.'

import s from './aside.module.scss'



function schemeChangeHandle(e: React.ChangeEvent<HTMLInputElement>) {
  e.target.checked
    ? document.body.setAttribute('data-color-scheme', 'dark')
    : document.body.setAttribute('data-color-scheme', 'light')
}

const switcherLabelsData = [
  {
    labelText: 'Светлая'
  },
  {
    labelText: 'Тёмная'
  }
]


export function Aside() {
  return (
    <aside className={s.wrap}>
      <Toggle
        inputID='color-scheme-input'
        inputLabels={switcherLabelsData}
        isChecked={useColorScheme()}
        legendID='color-scheme-switcher'
        legendText='Тема оформления'
        onChangeHandle={schemeChangeHandle}
      />
    </aside>
  )
}