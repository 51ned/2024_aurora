'use client'


import { useLayoutEffect, useState } from 'react'


function useColorSchemeChecker() {
  const [isChecked, setChecked] = useState(false)

  useLayoutEffect(() => {
    if (!localStorage.getItem('color-scheme')) {
      setChecked(window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.body.setAttribute('data-color-scheme', 'dark')
    }
    
    else {
      if (localStorage.getItem('color-scheme') === 'dark') {
        setChecked(true)
        document.body.setAttribute('data-color-scheme', 'dark')
      }
      
      else {
        setChecked(false)
        document.body.setAttribute('data-color-scheme', 'light')
      }
    }
  }, [])
  
  return isChecked
}

function useColorSchemeHandle(e: React.ChangeEvent<HTMLInputElement>) {
  e.target.checked
    ? document.body.setAttribute('data-color-scheme', 'dark')
    : document.body.setAttribute('data-color-scheme', 'light')
}


export { useColorSchemeChecker, useColorSchemeHandle }