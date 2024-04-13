'use client'

import { Switcher } from "ui/atoms"


const schemeChangeHandle = (e: { target: { value: string } }) => {
  document.documentElement.setAttribute('data-color-scheme', e.target.value)
}


const switcherInputsData = [
  {
    handle: schemeChangeHandle,
    labelText: 'Светлая',
    nameText: 'color-scheme',
    valueText: 'light'
  },
  {
    handle: schemeChangeHandle,
    labelText: 'Тёмная',
    nameText: 'color-scheme',
    valueText: 'dark'
  },
]


export function Aside() {
  return (
    <aside>
      <input
        type='radio'
        value='light'
        onChange={schemeChangeHandle}
      />
      <input
        type='radio'
        value='dark'
        onChange={schemeChangeHandle}
      />
      {/* <Switcher
        orientation='horizontal'
        legendText='Цветовая схема'
        inputsData={switcherInputsData}
      /> */}
    </aside>
  )
}