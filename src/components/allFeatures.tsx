'use client' // Ensure this file is treated as a Client Component

import React, { useState } from 'react'
import CustomInput from '@/components/input'
import { FaSearch, FaCheck, FaExclamationTriangle, FaTimes, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

const AllFeatures: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (value: string, isValid: boolean) => {
    setter(value)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Input Component Examples</h2>

      {/* Default State */}
      <section>
        <h3>1. Default State</h3>
        <CustomInput
          label="Username"
          placeholder="Enter your username"
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          errorMessage="Username is required and must be between 3 and 20 characters."
          successMessage="Username looks good!"
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setUsername)}
        />
      </section>

      {/* Focused State */}
      <section>
        <h3>2. Focused State</h3>
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          required
          type="email"
          icon={<FaCheck />}
          errorMessage="Invalid email address."
          successMessage="Email is valid!"
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setEmail)}
        />
      </section>

      {/* Disabled State */}
      <section>
        <h3>3. Disabled State</h3>
        <CustomInput
          label="Disabled Input"
          placeholder="This input is disabled"
          disabled
          customStyles={{ marginBottom: '20px', width: '300px' }}
        />
      </section>

      {/* Error State */}
      <section>
        <h3>4. Error State</h3>
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          required
          minLength={6}
          type="password"
          icon={<FaExclamationTriangle />}
          errorMessage="Password must be at least 6 characters."
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setPassword)}
        />
      </section>

      {/* Success State */}
      <section>
        <h3>5. Success State</h3>
        <CustomInput
          label="Confirm Password"
          placeholder="Confirm your password"
          required
          minLength={6}
          type="password"
          icon={<FaCheck />}
          successMessage="Passwords match!"
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setConfirmPassword)}
        />
      </section>

      {/* Placeholder Only */}
      <section>
        <h3>6. Placeholder Only</h3>
        <CustomInput
          placeholder="Search here"
          icon={<FaSearch />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={(value, isValid) => setSearchQuery(value)}
        />
      </section>

      {/* RTL Support */}
      <section>
        <h3>7. RTL Support</h3>
        <CustomInput
          label="نام کاربری" // Example in Farsi (Persian)
          placeholder="نام کاربری خود را وارد کنید"
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          errorMessage="نام کاربری الزامی است و باید بین ۳ تا ۲۰ کاراکتر باشد."
          successMessage="نام کاربری درست است!"
          customStyles={{ marginBottom: '20px', width: '300px' }}
          inputStyles={{ padding: '10px', fontSize: '16px' }}
          iconStyles={{ color: '#555' }}
          onChange={(value, isValid) => console.log('نام کاربری:', value)}
          rtl={true}
        />
      </section>

      {/* Custom Styles */}
      <section>
        <h3>8. Custom Styles</h3>
        <CustomInput
          label="Custom Styled Input"
          placeholder="Custom padding and font size"
          required
          icon={<FaLock />}
          customStyles={{ marginBottom: '20px', width: '300px', backgroundColor: '#f9f9f9' }}
          inputStyles={{ padding: '15px', fontSize: '18px' }}
          iconStyles={{ color: '#333' }}
          onChange={(value, isValid) => console.log('Custom Input:', value)}
        />
      </section>

      {/* Icon Only */}
      <section>
        <h3>9. Icon Only</h3>
        <CustomInput
          placeholder="Enter search term"
          icon={<FaSearch />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          inputStyles={{ padding: '10px', fontSize: '16px' }}
        />
      </section>

      {/* No Label */}
      <section>
        <h3>10. No Label</h3>
        <CustomInput
          placeholder="No label provided"
          icon={<FaSearch />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
        />
      </section>

      {/* Large Font Size */}
      <section>
        <h3>11. Large Font Size</h3>
        <CustomInput
          label="Large Font"
          placeholder="Large font size input"
          icon={<FaUser />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          inputStyles={{ fontSize: '24px' }}
        />
      </section>

      {/* Small Font Size */}
      <section>
        <h3>12. Small Font Size</h3>
        <CustomInput
          label="Small Font"
          placeholder="Small font size input"
          icon={<FaUser />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          inputStyles={{ fontSize: '12px' }}
        />
      </section>

      {/* Password Visibility Toggle */}
      <section>
        <h3>13. Password Visibility Toggle</h3>
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          required
          type={showPassword ? 'text' : 'password'}
          icon={
            <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          }
          errorMessage="Password must be at least 6 characters."
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setPassword)}
        />
      </section>

      {/* Input with Helper Text */}
      <section>
        <h3>14. Input with Helper Text</h3>
        <CustomInput
          label="Username"
          placeholder="Enter your username"
          helperText="This will be used as your login identifier."
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setUsername)}
        />
      </section>

      {/* Animated Label */}
      <section>
        <h3>15. Animated Label</h3>
        <CustomInput
          label="Animated Label"
          placeholder="Label animates when focused"
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          inputStyles={{ fontSize: '16px', transition: 'all 0.3s ease' }}
          onChange={handleChange(setUsername)}
        />
      </section>

      {/* Input with Additional Info */}
      <section>
        <h3>16. Input with Additional Info</h3>
        <CustomInput
          label="Username"
          placeholder="Enter your username"
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          additionalInfo="Make sure your username is unique."
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setUsername)}
        />
      </section>

      {/* Input with Custom Padding */}
      <section>
        <h3>17. Input with Custom Padding</h3>
        <CustomInput
          label="Padded Input"
          placeholder="Input with extra padding"
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          customStyles={{ marginBottom: '20px', width: '300px' }}
          inputStyles={{ padding: '20px', fontSize: '16px' }}
          onChange={handleChange(setUsername)}
        />
      </section>

      {/* Input with Tooltip */}
      <section>
        <h3>18. Input with Tooltip</h3>
        <CustomInput
          label="Tooltip Example"
          placeholder="Hover for tooltip"
          required
          minLength={3}
          maxLength={20}
          icon={<FaUser />}
          tooltipText="Enter your username here. It should be unique."
          customStyles={{ marginBottom: '20px', width: '300px' }}
          onChange={handleChange(setUsername)}
        />
      </section>

      {/* Multiple Inputs */}
      <section>
        <h3>19. Multiple Inputs Together</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <CustomInput
            label="First Name"
            placeholder="Enter your first name"
            required
            icon={<FaUser />}
            customStyles={{ width: '200px' }}
            onChange={handleChange(setUsername)}
          />
          <CustomInput
            label="Last Name"
            placeholder="Enter your last name"
            required
            icon={<FaUser />}
            customStyles={{ width: '200px' }}
            onChange={handleChange(setUsername)}
          />
        </div>
      </section>
    </div>
  )
}

export default AllFeatures
