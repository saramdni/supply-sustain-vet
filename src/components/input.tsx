'use client' // This marks the file as a Client Component

import React, { useState, ChangeEvent } from 'react'

// Define the interface for the props the component accepts
interface CustomInputProps {
  label?: string
  placeholder?: string
  type?: string // Type of the input (e.g., text, password, email)
  required?: boolean
  minLength?: number
  maxLength?: number
  disabled?: boolean
  icon?: React.ReactNode
  successMessage?: string
  errorMessage?: string
  onChange?: (value: string, isValid: boolean) => void
  customStyles?: React.CSSProperties
  inputStyles?: React.CSSProperties
  iconStyles?: React.CSSProperties
  rtl?: boolean
  helperText?: string
  tooltipText?: string
  additionalInfo?: string
}

// Define the CustomInput component
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type = 'text',
  required = false,
  minLength,
  maxLength,
  disabled = false,
  icon,
  successMessage,
  errorMessage,
  onChange,
  customStyles = {},
  inputStyles = {},
  iconStyles = {},
  rtl = false,
  helperText,
  tooltipText,
  additionalInfo,
}) => {
  // Local state to manage input value, focus, validity, and whether the input has been touched
  const [value, setValue] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [touched, setTouched] = useState<boolean>(false)

  // Function to handle changes in the input value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setValue(inputValue)
    setTouched(true)

    // Validation logic
    let valid = true
    if (required && !inputValue) valid = false
    if (minLength && inputValue.length < minLength) valid = false
    if (maxLength && inputValue.length > maxLength) valid = false

    setIsValid(valid)
    if (onChange) onChange(inputValue, valid) // Call the onChange callback if provided
  }

  return (
    <div
      className={`flex flex-col mb-4 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={customStyles}
      dir={rtl ? 'rtl' : 'ltr'} // Set the text direction based on rtl prop
    >
      {label && (
        <label
          className={`text-sm text-gray-600 transition-all ease-in-out duration-300 mb-2 ${
            isFocused || value ? 'text-xs text-blue-500' : ''
          }`}
          style={{ textAlign: rtl ? 'right' : 'left' }} // Align label text based on rtl prop
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center border p-2 rounded transition-all ease-in-out duration-300 ${
          isFocused ? 'border-blue-500' : 'border-gray-300'
        } ${!isValid && touched ? 'border-red-500' : ''} ${isValid && touched ? 'border-green-500' : ''} ${
          disabled ? 'bg-gray-200' : ''
        }`}
        style={{
          ...inputStyles, // Apply custom styles to the input container
          flexDirection: rtl ? 'row-reverse' : 'row', // Adjust icon and input alignment based on rtl prop
        }}
      >
        {icon && (
          <span className={`mr-2 ${rtl ? 'ml-2' : 'mr-2'}`} style={iconStyles}>
            {icon} {/* Display the optional icon */}
          </span>
        )}
        <input
          type={type}
          value={value}
          placeholder={isFocused ? '' : placeholder}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)} // Update focus state on focus
          onBlur={() => setIsFocused(false)} // Update focus state on blur
          disabled={disabled}
          className={`w-full border-none outline-none text-base ${
            disabled ? 'bg-gray-200 text-gray-800 cursor-not-allowed' : ''
          }`}
          aria-invalid={!isValid}
          aria-required={required}
          aria-disabled={disabled}
          style={{
            paddingLeft: rtl && icon ? undefined : icon ? '2.5em' : undefined,
            paddingRight: rtl && icon ? '2.5em' : undefined,
            textAlign: rtl ? 'right' : 'left',
          }}
        />
      </div>

      {/* Display error or success message based on validity and touched state */}
      {!isValid && touched && (
        <span className={`mt-1 text-xs text-red-500 ${rtl ? 'text-right' : 'text-left'}`}>{errorMessage}</span>
      )}
      {isValid && touched && successMessage && (
        <span className={`mt-1 text-xs text-green-500 ${rtl ? 'text-right' : 'text-left'}`}>{successMessage}</span>
      )}

      {/* Display helper text if provided */}
      {helperText && (
        <span className={`mt-1 text-xs text-gray-500 ${rtl ? 'text-right' : 'text-left'}`}>{helperText}</span>
      )}

      {/* Display tooltip text if provided */}
      {tooltipText && (
        <div className="relative group">
          <span className="absolute -top-2 right-0 p-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {tooltipText}
          </span>
        </div>
      )}

      {/* Display additional info if provided */}
      {additionalInfo && (
        <span className={`mt-1 text-xs text-gray-600 ${rtl ? 'text-right' : 'text-left'}`}>{additionalInfo}</span>
      )}
    </div>
  )
}

export default CustomInput
