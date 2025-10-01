import styled from 'styled-components';

export const RadioGroupRoot = styled.div<{ $orientation: 'horizontal' | 'vertical' }>`
  display: inline-flex;
  flex-direction: ${({ $orientation }) =>
    $orientation === 'horizontal' ? 'row' : 'column'};
  gap: 12px;
`;

export const RadioItemRoot = styled.label<{
  $size: number;
  $backgroundColor: string;
  $hoverBgColor: string;
  $activeBgColor: string;
  $borderColor: string;
  $hoverBorderColor: string;
  $checkedBorderColor: string;
  $disabledBgColor: string;
  $disabledBorderColor: string;
  $invalidBorderColor: string;
  $focusRingColor: string;
  $focusRingBackground: string;
  $invalidFocusRingColor: string;
  $invalidFocusRingBackground: string;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 9999px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  user-select: none;
  line-height: 0;
  --radio-focus-ring: ${({ $focusRingColor }) => $focusRingColor};
  --radio-focus-ring-bg: ${({ $focusRingBackground }) => $focusRingBackground};

  &:not([data-disabled='true']):hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
    border-color: ${({ $hoverBorderColor }) => $hoverBorderColor};
  }

  &:not([data-disabled='true']):active {
    background-color: ${({ $activeBgColor }) => $activeBgColor};
  }

  &[data-state='checked'] {
    border-color: ${({ $checkedBorderColor }) => $checkedBorderColor};
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    background-color: ${({ $disabledBgColor }) => $disabledBgColor};
    border-color: ${({ $disabledBorderColor }) => $disabledBorderColor};
  }

  &[data-invalid='true'] {
    border-color: ${({ $invalidBorderColor }) => $invalidBorderColor};
    --radio-focus-ring: ${({ $invalidFocusRingColor }) => $invalidFocusRingColor};
    --radio-focus-ring-bg: ${({ $invalidFocusRingBackground }) => $invalidFocusRingBackground};
  }
`;

export const RadioIndicator = styled.span<{
  $size: number;
  $indicatorColor: string;
  $disabledIndicatorColor: string;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: color 0.2s ease;
  color: ${({ $indicatorColor }) => $indicatorColor};

  &::after {
    content: '';
    position: absolute;
    width: ${({ $size }) => `${Math.max($size - 8, 4)}px`};
    height: ${({ $size }) => `${Math.max($size - 8, 4)}px`};
    border-radius: inherit;
    background-color: currentColor;
    transform: scale(0.4);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &[data-state='checked']::after {
    transform: scale(1);
    opacity: 1;
  }

  &[data-disabled='true'] {
    color: ${({ $disabledIndicatorColor }) => $disabledIndicatorColor};
  }

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: inherit;
    border: 2px solid transparent;
    background-color: transparent;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  }
`;

export const HiddenRadioInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
  appearance: none;

  &:focus-visible + ${RadioIndicator}::before {
    opacity: 1;
    border-color: var(--radio-focus-ring);
    background-color: var(--radio-focus-ring-bg);
  }
`;
