import React, { forwardRef, useState, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useColor } from '@/providers/theme-provider';
import type { SelectProps, SelectOption } from './types';

// Styled components
const SelectContainer = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $error: boolean;
  $disabled: boolean;
  $borderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $bgColor: string;
  $disabledBgColor: string;
  $textColor: string;
  $disabledTextColor: string;
  $placeholderColor: string;
}>`
  position: relative;
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
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
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

const SelectButton = styled.button<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $textColor: string;
  $disabledTextColor: string;
  $placeholderColor: string;
  $hasValue: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  background: transparent;
  border: none;
  color: ${props => {
    if (props.$disabled) return props.$disabledTextColor;
    return props.$hasValue ? props.$textColor : props.$placeholderColor;
  }};
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  font-weight: 400;
  text-align: left;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  outline: none;

  &:focus {
    outline: none;
  }
`;

const SelectValue = styled.span<{ $hasValue: boolean }>`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.$hasValue ? 'inherit' : 'inherit'};
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
  margin-left: 8px;
  flex-shrink: 0;
`;

const DropdownContainer = styled.div<{
  $isOpen: boolean;
  $bgColor: string;
  $borderColor: string;
  $textColor: string;
  $selectedBgColor: string;
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
  margin-top: 4px;
`;

const DropdownItem = styled.button<{
  $isSelected: boolean;
  $isDisabled: boolean;
  $bgColor: string;
  $selectedBgColor: string;
  $textColor: string;
  $selectedTextColor: string;
  $disabledTextColor: string;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  background-color: ${props => props.$isSelected ? props.$selectedBgColor : props.$bgColor};
  color: ${props => {
    if (props.$isDisabled) return props.$disabledTextColor;
    return props.$isSelected ? props.$selectedTextColor : props.$textColor;
  }};
  border: none;
  text-align: left;
  cursor: ${props => props.$isDisabled ? 'not-allowed' : 'pointer'};
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  opacity: ${props => props.$isDisabled ? 0.5 : 1};

  &:hover {
    background-color: ${props => props.$isDisabled ? props.$bgColor : props.$selectedBgColor};
    color: ${props => props.$isDisabled ? props.$disabledTextColor : props.$selectedTextColor};
  }
`;

const SearchInput = styled.input<{
  $textColor: string;
  $placeholderColor: string;
}>`
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid ${props => props.$placeholderColor}40;
  background: transparent;
  color: ${props => props.$textColor};
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: ${props => props.$placeholderColor};
  }
`;

const NoOptionsMessage = styled.div<{
  $textColor: string;
}>`
  padding: 12px;
  text-align: center;
  color: ${props => props.$textColor};
  font-size: 14px;
  font-style: italic;
`;

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options = [],
      value = '',
      defaultValue = '',
      placeholder = 'Select an option',
      size = 'medium',
      disabled = false,
      error = false,
      searchable = false,
      clearable = false,
      onChange,
      onFocus,
      onBlur,
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

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedValue, setSelectedValue] = useState(value || defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Filter options based on search term
    const filteredOptions = useMemo(() => {
      if (!searchable || !searchTerm) return options;
      return options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [options, searchTerm, searchable]);

    // Get selected option
    const selectedOption = useMemo(() => {
      return options.find(option => option.value === selectedValue);
    }, [options, selectedValue]);

    // Merge refs
    const mergedRef = useCallback((el: HTMLButtonElement) => {
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      }
    }, [ref]);

    const handleToggle = () => {
      if (disabled) return;
      setIsOpen(!isOpen);
      if (!isOpen && searchable) {
        // Focus search input when opening
        setTimeout(() => searchInputRef.current?.focus(), 0);
      }
    };

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;
      
      setSelectedValue(option.value);
      setIsOpen(false);
      setSearchTerm('');
      onChange?.(option.value);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValue('');
      onChange?.('');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    const handleFocus = () => {
      onFocus?.();
    };

    const handleBlur = () => {
      onBlur?.();
      // Close dropdown after a short delay to allow clicking on items
      setTimeout(() => {
        setIsOpen(false);
        setSearchTerm('');
      }, 150);
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearchTerm('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const hasValue = Boolean(selectedValue);
    const displayValue = selectedOption?.label || placeholder;

    return (
      <div ref={containerRef} className={className} style={{ position: 'relative' }}>
        <SelectContainer
          $size={size}
          $error={Boolean(error)}
          $disabled={disabled}
          $borderColor={colors.borderColor}
          $focusBorderColor={colors.focusBorderColor}
          $errorBorderColor={colors.errorBorderColor}
          $bgColor={colors.bgColor}
          $disabledBgColor={colors.disabledBgColor}
          $textColor={colors.textColor}
          $disabledTextColor={colors.disabledTextColor}
          $placeholderColor={colors.placeholderColor}
        >
          <SelectButton
            ref={mergedRef}
            type="button"
            disabled={disabled}
            onClick={handleToggle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            data-testid={dataTestId}
            $size={size}
            $disabled={disabled}
            $textColor={colors.textColor}
            $disabledTextColor={colors.disabledTextColor}
            $placeholderColor={colors.placeholderColor}
            $hasValue={hasValue}
          >
            <SelectValue $hasValue={hasValue}>
              {displayValue}
            </SelectValue>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {clearable && hasValue && (
                <button
                  type="button"
                  onClick={handleClear}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '2px',
                    fontSize: '12px',
                  }}
                  aria-label="Clear selection"
                >
                  ×
                </button>
              )}
              <ChevronIcon $isOpen={isOpen} />
            </div>
          </SelectButton>
        </SelectContainer>

        <DropdownContainer
          $isOpen={isOpen}
          $bgColor={colors.bgColor}
          $borderColor={colors.borderColor}
          $textColor={colors.textColor}
          $selectedBgColor={colors.selectedBgColor}
        >
          {searchable && (
            <SearchInput
              ref={searchInputRef}
              type="text"
              placeholder="Search options..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              $textColor={colors.textColor}
              $placeholderColor={colors.placeholderColor}
            />
          )}
          
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <DropdownItem
                key={option.value}
                $isSelected={option.value === selectedValue}
                $isDisabled={Boolean(option.disabled)}
                $bgColor={colors.bgColor}
                $selectedBgColor={colors.selectedBgColor}
                $textColor={colors.textColor}
                $selectedTextColor={colors.textColor}
                $disabledTextColor={colors.disabledTextColor}
                onClick={() => handleSelect(option)}
                type="button"
                disabled={option.disabled}
              >
                {option.icon && <span>{option.icon}</span>}
                <span>{option.label}</span>
              </DropdownItem>
            ))
          ) : (
            <NoOptionsMessage $textColor={colors.textColor}>
              No options found
            </NoOptionsMessage>
          )}
        </DropdownContainer>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
