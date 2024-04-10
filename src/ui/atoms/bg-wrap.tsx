import s from './bg-wrap.module.scss'


interface BGWrapProps {
  bgColor: string
  children: React.ReactNode,
}


export function BGWrap({children, bgColor}: BGWrapProps) {
  return (
    <div
      className={s.wrap}
      style={{ backgroundColor: bgColor}}
    >
      { children }
    </div>
  )
}