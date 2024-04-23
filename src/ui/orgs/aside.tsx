'use client'


import { Toggle } from "ui/atoms"

import { useColorSchemeChecker, useColorSchemeHandle } from 'hooks/.'

import s from './aside.module.scss'


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
        checkedAttrHande={useColorSchemeChecker}
        inputID='color-scheme-input'
        inputLabels={switcherLabelsData}
        legendID='color-scheme-toggle'
        legendText='Тема оформления'
        onChangeHandle={useColorSchemeHandle}
      />
    </aside>
  )
}