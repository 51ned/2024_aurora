import s from './aside.module.css'


export function Aside({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <aside className={s.wrap}>
      { children }
    </aside>
  )
}
