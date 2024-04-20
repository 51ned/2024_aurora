import s from './toggle.module.scss'


type InputLabelProps = {
  children?: React.ReactNode,
  labelText: string
}


interface ToggleProps {
  inputLabels: InputLabelProps[],
  legendID: string,
  legendText: string,
  onChangeHandle: (e: {target: {value: string}}) => void
}


export function Toggle({
  inputLabels,
  legendID,
  legendText,
  onChangeHandle
}: ToggleProps) {
  return (
    <fieldset>
      <legend className='sr-only' id={legendID}>
        { legendText }
      </legend>

      <label className={s.label}>
        <input
          aria-labelledby={legendID}
          className={s.input}
          onChange={onChangeHandle}
          role='switch'
          type='checkbox'
        />

        {inputLabels.map((label, index) => (
          <span
            aria-label={label.labelText}
            className={s.span}
            key={index}
            role={label.children ? 'img' : ''}
          >
            { label.children && label.children }
          </span>
        ))}
      </label>
    </fieldset>
  )
}