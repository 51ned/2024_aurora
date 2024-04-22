import s from './toggle.module.scss'


type InputLabelProps = {
  children?: React.ReactNode,
  labelText: string
}


interface ToggleProps {
  inputID: string,
  inputLabels: InputLabelProps[],
  isChecked?: boolean,
  legendID: string,
  legendText: string
  onChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export function Toggle({
  inputID,
  inputLabels,
  isChecked,
  legendID,
  legendText,
  onChangeHandle,
}: ToggleProps) {
  let inputCheckedOpt: {[key: string]: boolean} = {}

  isChecked !== undefined
    && (inputCheckedOpt['checked'] = isChecked)

  let otherLabelOpts: {[key: string]: boolean | string | undefined} = {}

  inputLabels.some(l => l.children !== undefined && l.children !== null)
    && (otherLabelOpts['role'] = 'img')

  return (
    <fieldset>
      <legend className='sr-only' id={legendID}>
        { legendText }
      </legend>

      <div className={s.wrap}>
        <input
          aria-labelledby={legendID}
          className={s.input}
          id={inputID}
          onChange={onChangeHandle}
          role='switch'
          type='checkbox'
          checked={isChecked}
        />

        {inputLabels.map((label, index) => (
          <label
            aria-label={label.labelText}
            className={s.span}
            htmlFor={inputID}
            key={index}
            {...otherLabelOpts}
          >
            { label.children && label.children }
          </label>
        ))}
      </div>
    </fieldset>
  )
}