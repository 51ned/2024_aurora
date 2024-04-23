import s from './toggle.module.scss'


type InputLabelProps = {
  children?: React.ReactNode,
  labelText: string
}


interface ToggleProps {
  checkedAttrHande?: () => boolean,
  inputID: string,
  inputLabels: InputLabelProps[],
  legendID: string,
  legendText: string
  onChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export function Toggle({
  checkedAttrHande,
  inputID,
  inputLabels,
  legendID,
  legendText,
  onChangeHandle,
}: ToggleProps) {
  const isChecked = checkedAttrHande ? checkedAttrHande() : false
  
  let otherLabelOpts: {[key: string]: string} = {}

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
          checked={isChecked}
          className={s.input}
          id={inputID}
          onChange={onChangeHandle}
          role='switch'
          type='checkbox'
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