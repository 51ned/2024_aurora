import s from './aside.module.css'


export function Aside({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <aside>
      <div className={s.wrap}>
        { children }

        <div className={s.plug1} />
        <div className={s.plug2} />
      </div>
    </aside>
  )
}
