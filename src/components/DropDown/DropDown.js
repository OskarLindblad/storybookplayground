import React, { useState } from 'react'
import './DropDown.css'
import PropTypes from 'prop-types'
import down from './down.svg'

export const DropDown = ({
  label,
  startValue, // boolean(picks first)
  name,
  className,
  options,
  error,
  errorMessage,
  helperText,
  smallField,
  width,
  placeHolderMaxWidth,
  boldBorder,
  onChange,
  reference,
  value,
  tagcolor,
  backgroundColor,
  borderColor,
  borderWidth,
  ...rest
}) => {
  const [labelShrink, setLabelShrink] = useState(
    startValue || value ? true : false,
  )
  const [selected, setSelected] = useState(false)
  const [newValue, setNewValue] = useState(value)

  let optionsList = []
  for (let i = 0; i < options.length; i++) {
    if (typeof options[i] === 'string' || typeof options[i] === 'number') {
      optionsList.push({ value: options[i], title: options[i] })
    } else {
      optionsList.push(options[i])
    }
  }

  const handleValue = (e) => {
    onChange(e)
    setNewValue(e.target.value)
    if (e.target.value === '') {
      setLabelShrink(false)
    } else {
      setLabelShrink(true)
    }
    setSelected(false)
  }

  return (
    <>
      <div
        className={`dropdown
    ${error ? 'dropdown-error' : ''}
    ${boldBorder ? 'boldBorder' : ''}
    `}
      >
        <label
          className={`
              input-label 
              ${error ? 'input-error' : ''}
            `}
          style={{ width: width }}
        >
          {label && (
            <div
              className={`dropdown-label-text
            dropdown-label-text-${labelShrink ? 'label' : 'placeholder'}
            ${selected ? 'dropdown-label-selected' : ''}`}
            >
              <p
                className="input-label-text-p"
                style={
                  labelShrink
                    ? borderColor
                      ? {
                          maxWidth: width,
                          color: error ? '#b00020' : tagcolor,
                        }
                      : {
                          maxWidth: width,
                          color: error ? '#b00020' : tagcolor,
                        }
                    : borderColor
                    ? {
                        maxWidth: placeHolderMaxWidth,
                        color: borderColor,
                      }
                    : {
                        maxWidth: placeHolderMaxWidth,
                      }
                }
              >
                {label}
              </p>
              {labelShrink && (
                <div
                  className="dropdown-label-background"
                  style={{ backgroundColor: backgroundColor }}
                ></div>
              )}
            </div>
          )}
          <select
            name={name}
            className={`dropdown-select ${
              selected ? 'dropdown-select-selected' : ''
            } ${className ? className : null} `}
            value={newValue}
            onFocus={() => {
              setLabelShrink(true)
              setSelected(true)
            }}
            onBlur={() => {
              newValue === '' && setLabelShrink(false)
              setSelected(false)
            }}
            style={{
              width: width,
              backgroundColor: backgroundColor,
              //borderColor: error ? '#b00020' : borderColor,
              border: error
                ? '2px solid #b00020'
                : `${borderWidth} solid ${borderColor}`,
            }}
            onChange={(e) => handleValue(e)}
            ref={reference}
            {...rest}
          >
            {newValue === '' && !startValue ? (
              <option
                value="notSelected"
                className="dropdown-notSelected"
                disabled={newValue === 'notSelected' ? true : false}
              ></option>
            ) : (
              <></>
            )}

            {optionsList.map((option, index) => (
              <option key={index} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
          <div className="dropdown-down-icon-container">
            <div className="dropdown-down-icon">
              <img src={down} alt="down" />
            </div>
          </div>
        </label>
        <div className="dropdown-helper-text">
          {errorMessage && error ? (
            <p className="dropdown-error-message">{errorMessage}</p>
          ) : (
            <p className={error ? 'dropdown-text-error' : ''}>{helperText}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default DropDown

DropDown.propTypes = {
  label: PropTypes.string,
  startValue: PropTypes.bool,
  className: PropTypes.string,
  placeHolderMaxWidth: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.string,
      }),
      PropTypes.string,
      PropTypes.number,
    ]),
  ),
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  smallField: PropTypes.bool,
  width: PropTypes.string,
  borderColor: PropTypes.string,
  tagcolor: PropTypes.string,
  backgroundColor: PropTypes.string,
  boldBorder: PropTypes.bool,
}

DropDown.defaultProps = {
  label: '',
  startValue: false,
  onChange: undefined,
  className: '',
  options: [{ value: '', title: '' }],
  error: false,
  errorMessage: '',
  helperText: '',
  placeHolderMaxWidth: '100%',
  smallField: false,
  width: '250px',
  borderColor: '#818181',
  tagcolor: '#818181',
  backgroundColor: '#ffffff',
  boldBorder: true,
}
