import { ColorThemeToggle } from 'ui/mols'

import s from './aside.module.css'


export function Aside() {
  return (
    <aside className={s.wrap}>
      <ColorThemeToggle />
    </aside>
  )
}