import styled from 'styled-components';

export const CheckboxRoot = styled.label<{
  $size: number;
  $backgroundColor: string;
  $hoverBgColor: string;
  $activeBgColor: string;
  $borderColor: string;
  $hoverBorderColor: string;
  $checkedBorderColor: string;
  $checkedBgColor: string;
  $checkedHoverBgColor: string;
  $checkedActiveBgColor: string;
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
  border-radius: 4px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  user-select: none;
  line-height: 0;
  --checkbox-focus-ring: ${({ $focusRingColor }) => $focusRingColor};
  --checkbox-focus-ring-bg: ${({ $focusRingBackground }) => $focusRingBackground};

  &:not([data-disabled='true']):hover {
    border-color: ${({ $hoverBorderColor }) => $hoverBorderColor};
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
  }

  &:not([data-disabled='true']):active {
    background-color: ${({ $activeBgColor }) => $activeBgColor};
  }

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    border-color: ${({ $checkedBorderColor }) => $checkedBorderColor};
    background-color: ${({ $checkedBgColor }) => $checkedBgColor};
    color: inherit;
  }

  &[data-state='checked']:not([data-disabled='true']):hover,
  &[data-state='indeterminate']:not([data-disabled='true']):hover {
    background-color: ${({ $checkedHoverBgColor }) => $checkedHoverBgColor};
  }

  &[data-state='checked']:not([data-disabled='true']):active,
  &[data-state='indeterminate']:not([data-disabled='true']):active {
    background-color: ${({ $checkedActiveBgColor }) => $checkedActiveBgColor};
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    background-color: ${({ $disabledBgColor }) => $disabledBgColor};
    border-color: ${({ $disabledBorderColor }) => $disabledBorderColor};
  }

  &[data-invalid='true'] {
    border-color: ${({ $invalidBorderColor }) => $invalidBorderColor};
    --checkbox-focus-ring: ${({ $invalidFocusRingColor }) => $invalidFocusRingColor};
    --checkbox-focus-ring-bg: ${({ $invalidFocusRingBackground }) => $invalidFocusRingBackground};
  }
`;

export const CheckboxIndicator = styled.span<{
  $iconSize: number;
  $indicatorColor: string;
  $disabledIndicatorColor: string;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  color: ${({ $indicatorColor }) => $indicatorColor};
  transition: color 0.2s ease;

  &::after {
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

  svg {
    width: ${({ $iconSize }) => `${$iconSize}px`};
    height: ${({ $iconSize }) => `${$iconSize}px`};
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &[data-state='unchecked'] svg {
    opacity: 0;
    transform: scale(0.75);
  }

  &[data-state='checked'] svg,
  &[data-state='indeterminate'] svg {
    opacity: 1;
    transform: scale(1);
  }

  &[data-disabled='true'] {
    color: ${({ $disabledIndicatorColor }) => $disabledIndicatorColor};
  }
`;

export const HiddenCheckboxInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
  appearance: none;

  &:focus-visible + ${CheckboxIndicator}::after {
    opacity: 1;
    border-color: var(--checkbox-focus-ring);
    background-color: var(--checkbox-focus-ring-bg);
  }
`;
