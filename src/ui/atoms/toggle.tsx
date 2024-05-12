/**
  * Reusable & full-customisable toggle component. I hate inline-styles too, but.
  * Having been impressed by this video: https://www.youtube.com/watch?v=8LFbS78a4Rw, i choose radio buttons.
  * But Makeev hardcoded the animation in CSS for the three-position, horisontal-oriented toggle only.
  * Unlike that, I wanted to create a toggle that could have any number of positions and free orientation.
  * As you can see, the animation of the 'div.status' relies on the index of the checked input and it size.
  * Then, I think it makes sense to keep values like the size of 'div.status', border-radii and offsets inside.
  * All other styling is placed in the CSS module and the global styles.
  * 
  @param { string } customStyles:
  A string representing a className for customizing the appearance of the component.
  This prop allows applying custom styles to the component from outside.
  @param { inputProps[] } inputsData:
  An array of objects representing data for each position in the toggle.
  Each object contains properties ariaLabel, name, and value, used to create radio buttons.
  @param { string } legendText:
  A string representing the text used as the legend of the toggle.
  The legend provides additional information about the toggle to users.
  @param { (value: string) => void } onInputChange:
  A callback function called when the selected position in the toggle changes.
  It takes the new value as an argument.
  @param { 'horisontal' | 'vertical' } toggleDir:
  Determines the direction of the positions layout in the toggle.
  Can be either 'horizontal' or 'vertical'.
  @param { string | null } valueToCompare:
  The value against which the values of the radio buttons are compared to determine the currently selected position in the toggle.
  Can be null if none of the positions are selected.
*/


'use client'


import { useEffect, useState } from 'react'
import cn from 'classnames'

import s from './toggle.module.css'


type inputProps = {
  ariaLabel: string,
  name: string,
  value: string
}

interface ToggleProps {
  customStyles?: string;
  inputsData: inputProps[],
  inputSize: number,
  legendText: string,
  onInputChange: (value: string) => void,
  toggleDir: 'horisontal' | 'vertical',
  valueToCompare: string | null
}


export function Toggle({
  customStyles,
  inputsData,
  inputSize,
  toggleDir,
  legendText,
  onInputChange,
  valueToCompare
}: ToggleProps) {
  // Find index of checked input (it needs for 'div.status' animate):
  const [checkedIndex, setCheckedIndex] = useState(0)

  useEffect(() => {
    setCheckedIndex(inputsData.findIndex(i => i.value === valueToCompare))
  }, [inputsData, valueToCompare])

  // Setting up toggle geometry (no need to change anything):
  const gridDir = toggleDir === 'horisontal'
    ? 'gridTemplateColumns'
    : 'gridTemplateRows'
  
  const axle = toggleDir === 'horisontal' ? 'X' : 'Y'
  const borderSize = 4
  const statusSize = inputSize - borderSize * 2
  const getHalf = (num: number) => { return num / 2 }
  
  // Define input's handle:
  const onChangeHandle = (value: string, index: number) => {
    onInputChange(value)
    setCheckedIndex(index)
  }

  // ...and styles:
  let inputStyles = s.input

  if (customStyles) {
    inputStyles = cn(s.input, {
      [customStyles]: customStyles
    })
  }

  return (
    <fieldset className={s.wrap}>
      <legend className='sr-only'>
        { legendText }
      </legend>

      <div
        className={s.container}
        role='radiogroup'
        style={{
          borderRadius: getHalf(inputSize),
          [gridDir]: `repeat(${inputsData.length}, 1fr)`
        }}
      >
        {inputsData.map((item, index) => (
          <input
            aria-label={item.ariaLabel}
            checked={item.value === valueToCompare}
            className={inputStyles}
            key={index}
            name={item.name}
            onChange={() => onChangeHandle(item.value, index)}
            style={{
              height: inputSize,
              width: inputSize
            }}
            type='radio'
            value={item.value}
          />
        ))}
      </div>

      <div
        aria-live='polite'
        className={s.status}
        role='status'
        style={{
          borderRadius: getHalf(statusSize),
          height: statusSize,
          marginTop: `-${getHalf(statusSize)}px`,
          transform: `translate${axle}(${checkedIndex * inputSize + borderSize}px)`,
          width: statusSize
        }}
      />
    </fieldset>
  )
}
