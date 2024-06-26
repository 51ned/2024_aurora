import React from 'react'
import cn from 'classnames'

import s from './box.module.css'


interface BoxProps {
  children: React.ReactNode,
  container: 'article' | 'div' | 'section',
  wrap?: 'header' | 'main' | 'div',
  wrapStyle?: string
}


export function Box({
  children,
  container: Container,
  wrap,
  wrapStyle
}: BoxProps) {
  const Wrap = wrap ?? React.Fragment
  let wrapDynamicClass: {[key: string]: string} = {}

  if (wrap) {
    wrapDynamicClass['className'] = `${s.wrap}`

    if (wrapStyle) {
      wrapDynamicClass['className'] = cn(s.wrap, {
        [wrapStyle]: wrapStyle
      })
    }
  }

  return (
    <Wrap {...wrapDynamicClass}>
      <Container className={s.container}>
        { children }
      </Container>
    </Wrap>
  )
}
