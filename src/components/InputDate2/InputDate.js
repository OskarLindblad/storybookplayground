import React, { useState } from 'react'
import './InputDate.css'
import PropTypes from 'prop-types'
//import { useFormContext } from "react-hook-form";

export const InputDate = ({
  defaultValue,
  onChange,
  suffix,
  suffixImg,
  label,
  helperText,
  readOnly,
  smallField,
  error,
  errorMessage,
  width,
  placeHolderMaxWidth,
  className,
  reference,
  name,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(
    defaultValue || readOnly || defaultValue === '' ? true : false,
  )
  const [selected, setSeleted] = useState(false)
  //const { getValues } = useFormContext();

  /*
  
              onBlur={() => {
              !getValues(name) && setLabelShrink(false)

              setSelected(false)
            }}
   */

  const handleChange = (e) => {
    onChange(e)
    setSeleted(false)
  }

  return (
    <div className="inputdate" style={{ width: width }}>
      <label
        className={`
          inputdate-label 
          ${error ? 'inputdate-error' : ''}
          ${smallField ? 'inputdate-smallField' : ''}
        `}
      >
        {label && (
          <div
            className={`inputdate-label-text
          inputdate-label-text-${labelShrink ? 'label' : 'label'}
          ${selected ? 'inputdate-label-selected' : ''}
          `}
          >
            <p
              style={
                labelShrink
                  ? { maxWidth: width }
                  : { maxWidth: placeHolderMaxWidth }
              }
            >
              {label}
            </p>
          </div>
        )}
        <div className="inputdate-container" style={{ width: width }}>
          <input
            type="date"
            className={`inputdate-inputfield ${
              selected ? 'inputdate-inputfield-selected' : ''
            }
            ${className ? className : ''}
            `}
            readOnly={readOnly ? readOnly : false}
            defaultValue={defaultValue}
            name={name}
            ref={reference}
            onChange={handleChange}
            onFocus={() => {
              !defaultValue && setLabelShrink(true)
              setSeleted(true)
            }}
            onBlur={() => {
              !defaultValue && setLabelShrink(true)
              setSeleted(false)
            }}
            style={labelShrink ? { color: 'black' } : { color: 'white' }}
            {...rest}
          />
          <div
            className={`inputdate-suffix 
            ${selected ? 'inputdate-suffix-selected' : ''}
            ${suffixImg ? 'suffix-image' : ''}
            `}
          >
            {suffixImg ? (
              <img src={suffixImg} className="suffixImg" alt="suffixImg" />
            ) : (
              suffix && <p>{suffix}</p>
            )}
          </div>
        </div>
        <div className="inputdate-helper-text">
          {errorMessage && error ? <p>{errorMessage}</p> : <p>{helperText}</p>}
        </div>
      </label>
    </div>
  )
}

export default InputDate

InputDate.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  suffix: PropTypes.string,
  suffixImg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  smallField: PropTypes.bool,
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  placeHolderMaxWidth: PropTypes.string,
  className: PropTypes.string,
}

InputDate.defaultProps = {
  defaultValue: '',
  suffix: '',
  suffixImg: false,
  label: '',
  helperText: '',
  smallField: false,
  error: false,
  errorMessage: '',
  onChange: undefined,
  width: '250px',
  placeHolderMaxWidth: '100%',
  readOnly: false,
  className: '',
}
