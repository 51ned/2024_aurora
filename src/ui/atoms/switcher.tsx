import cn from 'classnames'

import s from './switcher.module.scss'


type SwithcerInputProps = {
  handle: (e: { target: { value: string } }) => void,
  labelText: string,
  additionalStyle?: string,
  nameText: string,
  valueText: string
}

interface SwitcherProps {
  orientation: 'horizontal' | 'vertical',
  legendText: string,
  inputsData: SwithcerInputProps[]
}


export function Switcher({
  orientation,
  legendText,
  inputsData
}: SwitcherProps) {

  const wrapClassName = orientation === 'horizontal'
    ? s['wrap']
    : s['wrap__vertical']

  const wrapStyle = orientation === 'horizontal'
    ? { gridTemplateColumns: `repeat(${inputsData.length}, 1fr)` }
    : { gridTemplateRows: `repeat(${inputsData.length}, 1fr)` }

  return (
    <fieldset
      className={wrapClassName}
      style={wrapStyle}
    >
      <legend className={s.legend}>
        { legendText }
      </legend>

      {inputsData.map((item, index) => (
        <input
          aria-label={item.labelText}
          className={cn(s.input, item.additionalStyle)}
          name={item.nameText}
          key={index}
          type='radio'
          value={item.valueText}
        />
      ))}

      <div className={s.status} />
    </fieldset>
  )
}