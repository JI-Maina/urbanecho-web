import React, { forwardRef, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useColor } from '@/providers/theme-provider';
import type { PhoneInputProps, Country } from './types';

// Country data - you can expand this with more countries
const COUNTRIES: Country[] = [
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
];

// Styled components
const PhoneInputContainer = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $error: boolean;
  $disabled: boolean;
  $borderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $bgColor: string;
  $disabledBgColor: string;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props => {
    switch (props.$size) {
      case 'small': return '36px';
      case 'large': return '48px';
      default: return '42px';
    }
  }};
  background-color: ${props => props.$disabled ? props.$disabledBgColor : props.$bgColor};
  border: 1px solid ${props => {
    if (props.$error) return props.$errorBorderColor;
    return props.$borderColor;
  }};
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'text'};
  opacity: ${props => props.$disabled ? 0.6 : 1};

  &:hover {
    border-color: ${props => {
      if (props.$disabled) return;
      if (props.$error) return props.$errorBorderColor;
      return props.$focusBorderColor;
    }};
  }

  &:focus-within {
    border-color: ${props => props.$error ? props.$errorBorderColor : props.$focusBorderColor};
    outline: 2px solid ${props => props.$error ? props.$errorBorderColor : props.$focusBorderColor}20;
    outline-offset: 2px;
  }
`;

const CountrySelector = styled.button<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $bgColor: string;
  $textColor: string;
  $disabledTextColor: string;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 100%;
  background-color: ${props => props.$bgColor};
  border: none;
  border-right: 1px solid ${props => props.$bgColor};
  color: ${props => props.$disabled ? props.$disabledTextColor : props.$textColor};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.$disabled ? props.$bgColor : `${props.$bgColor}80`};
  }

  &:focus {
    outline: none;
  }
`;

const PhoneNumberInput = styled.input<{
  $size: 'small' | 'medium' | 'large';
  $textColor: string;
  $disabledTextColor: string;
  $placeholderColor: string;
}>`
  flex: 1;
  height: 100%;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: ${props => props.$textColor};
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  font-weight: 400;
  outline: none;

  &::placeholder {
    color: ${props => props.$placeholderColor};
  }

  &:disabled {
    color: ${props => props.$disabledTextColor};
    cursor: not-allowed;
  }
`;

const DropdownContainer = styled.div<{
  $isOpen: boolean;
  $bgColor: string;
  $borderColor: string;
  $textColor: string;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.$bgColor};
  border: 1px solid ${props => props.$borderColor};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
  display: ${props => props.$isOpen ? 'block' : 'none'};
`;

const DropdownItem = styled.button<{
  $isSelected: boolean;
  $bgColor: string;
  $selectedBgColor: string;
  $textColor: string;
  $selectedTextColor: string;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  background-color: ${props => props.$isSelected ? props.$selectedBgColor : props.$bgColor};
  color: ${props => props.$isSelected ? props.$selectedTextColor : props.$textColor};
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.$selectedBgColor};
    color: ${props => props.$selectedTextColor};
  }
`;

const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid currentColor;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease-in-out;
`;

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value = '',
      defaultValue = '',
      defaultCountry = 'CH',
      placeholder = 'Enter phone number',
      size = 'medium',
      disabled = false,
      error = false,
      onChange,
      onFocus,
      onBlur,
      id,
      name,
      required,
      className,
      'data-testid': dataTestId,
    },
    ref
  ) => {
    const colors = {
      borderColor: useColor('border.border-secondary'),
      focusBorderColor: useColor('border.border-focus'),
      errorBorderColor: useColor('border.border-negative'),
      bgColor: useColor('surface.surface-l0'),
      disabledBgColor: useColor('background.background-disabled'),
      textColor: useColor('content.content-primary'),
      disabledTextColor: useColor('content.content-disabled'),
      placeholderColor: useColor('content.content-tertiary'),
      selectedBgColor: useColor('background.background-selected'),
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>(
      COUNTRIES.find(c => c.code === defaultCountry) || COUNTRIES[0]
    );
    const [phoneNumber, setPhoneNumber] = useState(value || defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Merge refs
    const mergedRef = useCallback((el: HTMLInputElement) => {
      inputRef.current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        (ref as React.RefObject<HTMLInputElement | null>).current = el;
      }
    }, [ref]);

    const handleCountrySelect = (country: Country) => {
      setSelectedCountry(country);
      setIsDropdownOpen(false);
      // Trigger onChange with the new country
      onChange?.(phoneNumber, country);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setPhoneNumber(newValue);
      onChange?.(newValue, selectedCountry);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
      // Close dropdown after a short delay to allow clicking on items
      setTimeout(() => setIsDropdownOpen(false), 150);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div ref={containerRef} className={className} style={{ position: 'relative' }}>
        <PhoneInputContainer
          $size={size}
          $error={Boolean(error)}
          $disabled={disabled}
          $borderColor={colors.borderColor}
          $focusBorderColor={colors.focusBorderColor}
          $errorBorderColor={colors.errorBorderColor}
          $bgColor={colors.bgColor}
          $disabledBgColor={colors.disabledBgColor}
        >
          <CountrySelector
            $size={size}
            $disabled={disabled}
            $bgColor={colors.bgColor}
            $textColor={colors.textColor}
            $disabledTextColor={colors.disabledTextColor}
            onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
            type="button"
            disabled={disabled}
          >
            <span>{selectedCountry.flag}</span>
            <span>{selectedCountry.dialCode}</span>
            <ChevronIcon $isOpen={isDropdownOpen} />
          </CountrySelector>

          <PhoneNumberInput
            ref={mergedRef}
            type="tel"
            id={id}
            name={name}
            value={phoneNumber}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            onChange={handlePhoneChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            data-testid={dataTestId}
            $size={size}
            $textColor={colors.textColor}
            $disabledTextColor={colors.disabledTextColor}
            $placeholderColor={colors.placeholderColor}
          />
        </PhoneInputContainer>

        <DropdownContainer
          $isOpen={isDropdownOpen}
          $bgColor={colors.bgColor}
          $borderColor={colors.borderColor}
          $textColor={colors.textColor}
        >
          {COUNTRIES.map((country) => (
            <DropdownItem
              key={country.code}
              $isSelected={country.code === selectedCountry.code}
              $bgColor={colors.bgColor}
              $selectedBgColor={colors.selectedBgColor}
              $textColor={colors.textColor}
              $selectedTextColor={colors.textColor}
              onClick={() => handleCountrySelect(country)}
              type="button"
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span>{country.dialCode}</span>
            </DropdownItem>
          ))}
        </DropdownContainer>
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
