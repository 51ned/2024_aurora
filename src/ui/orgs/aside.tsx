'use client'

import { Toggle } from "ui/atoms"

import s from './aside.module.scss'


const schemeChangeHandle = (e: {target: {value: string}}) => {
  document.documentElement.setAttribute('data-color-scheme', e.target.value)
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
        inputLabels={switcherLabelsData}
        legendID='color-scheme-switcher'
        legendText='Выбор темы оформления:'
        onChangeHandle={schemeChangeHandle} />
    </aside>
  )
}