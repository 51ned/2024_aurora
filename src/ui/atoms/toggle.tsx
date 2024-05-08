/**
 * Toggle component represents a customizable toggle switch with labels.
 * Component can be controlled or uncontrolled (based on onChangeHandle in props presence).
 * Labels can be text mark only (for a11y) or text mark & icon.
 * @param { object } props - Props object for Toggle component.
 * @param { InputLabelProps[] } props.inputLabels - An array of input label props.
 * @param { boolean } [props.isChecked] - Specifies whether the toggle switch is checked.
 * @param { string } props.legendText - The text for the legend of the fieldset.
 * @param { string } [props.nameText] - The name attribute value for the input element.
 * @param { (e: React.ChangeEvent<HTMLInputElement>) => void } [props.onChangeHandle] - Function to handle onChange event of the input element.
 * @returns { TSX.Element } - Returns the Toggle component TSX.
 */


import { useId } from 'react'
import cn from 'classnames'

import s from './toggle.module.css'


type labelsDataProps = {
  icon?: string,
  text: string[]
}

interface ToggleProps {
  labelsData: labelsDataProps,
  isChecked?: boolean | void,
  legendText: string,
  nameText?: string
  onChangeHandle?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export function Toggle({
  labelsData,
  isChecked,
  legendText,
  nameText,
  onChangeHandle,
}: ToggleProps) {

  // Generate unique ID's for a11y
  const legendId = useId()
  const inputId = useId()

  // Dynamic addition of 'input' tag attrs:
  let otherInputAttrs: {[key: string]: any} = {}

  if (onChangeHandle) {
    otherInputAttrs['checked'] = isChecked
    otherInputAttrs['onChange'] = onChangeHandle
  } else {
    otherInputAttrs['defaultChecked'] = isChecked
  }
  
  if (nameText) {
    otherInputAttrs['name'] = nameText
  }

  // Dynamic addition of 'label' tag attrs:
  let otherLabelAttrs: {[key: string]: string} = {}

  if (labelsData.icon) {
    otherLabelAttrs['role'] = 'img'
  }

  // Dynamic addition of 'label' styles (if they were passed):
  let labelStyle = `${s.label}`

  if (labelsData.icon) {
    labelStyle = cn(s.label, {
      [s[labelsData.icon]]: labelsData.icon
    })
  }

  return (
    <fieldset>
      <legend className='sr-only' id={legendId}>
        { legendText }
      </legend>

      <label className={s.wrap}>
        <input
          aria-labelledby={legendId}
          className={s.input}
          id={inputId}
          role='switch'
          type='checkbox'
          {...otherInputAttrs}
        />

        {labelsData.text.map((txt, index) => (
          <span
            aria-label={txt}
            className={labelStyle}
            // htmlFor={inputId}
            key={index}
            {...otherLabelAttrs}
          />
        ))}
      </label>
    </fieldset>
  )
}
