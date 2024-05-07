import { Toggle } from 'ui/atoms'

import { getTheme } from 'utils/.'


const labelsData = [
  { labelText: 'Светлая' },
  { labelText: 'Тёмная' }
]


export async function ColorThemeToggle({ theme }: { theme: string | null }) {
  const isChecked = await getTheme() === 'dark'
  console.log(isChecked)
  return (
    <Toggle
      inputLabels={labelsData}
      isChecked={isChecked}
      legendText='Тема оформления'
      nameText='color-theme-toggle'
    />
  )
}