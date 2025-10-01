import styled, { css } from 'styled-components';
import AppTheme from '@/lib/theme';

export const DropdownMenuWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const DropdownMenuContentWrapper = styled.div<{
  $side: 'top' | 'bottom' | 'left' | 'right';
  $align: 'start' | 'end' | 'center';
  $sideOffset: number;
  $backgroundColor: string;
  $borderColor: string;
  $textColor: string;
  $shadowColor: string;
}>`
  position: absolute;
  z-index: 50;
  min-width: 8rem;
  max-height: 320px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $textColor }) => $textColor};
  box-shadow: 0 18px 40px ${({ $shadowColor }) => $shadowColor};
  padding: ${AppTheme.spacing['04']};
  outline: none;
  transform-origin: ${({ $side, $align }) => {
    if ($side === 'top') {
      if ($align === 'start') return 'bottom left';
      if ($align === 'end') return 'bottom right';
      return 'bottom center';
    }
    if ($side === 'bottom') {
      if ($align === 'start') return 'top left';
      if ($align === 'end') return 'top right';
      return 'top center';
    }
    if ($side === 'left') {
      if ($align === 'start') return 'right top';
      if ($align === 'end') return 'right bottom';
      return 'right center';
    }
    if ($align === 'start') return 'left top';
    if ($align === 'end') return 'left bottom';
    return 'left center';
  }};
  transition: opacity 0.12s ease-out;

  ${({ $side, $sideOffset }) => {
    const offset = `${$sideOffset}px`;
    switch ($side) {
      case 'top':
        return css`
          bottom: calc(100% + ${offset});
        `;
      case 'bottom':
        return css`
          top: calc(100% + ${offset});
        `;
      case 'left':
        return css`
          right: calc(100% + ${offset});
        `;
      case 'right':
      default:
        return css`
          left: calc(100% + ${offset});
        `;
    }
  }}

  ${({ $side, $align }) => {
    switch ($side) {
      case 'top':
      case 'bottom':
        if ($align === 'center') {
          return css`
            left: 50%;
            transform: translateX(-50%);
          `;
        }
        if ($align === 'end') {
          return css`
            right: 0;
          `;
        }
        return css`
          left: 0;
          transform: none;
        `;
      case 'left':
      case 'right':
      default:
        if ($align === 'center') {
          return css`
            top: 50%;
            transform: translateY(-50%);
          `;
        }
        if ($align === 'end') {
          return css`
            bottom: 0;
          `;
        }
        return css`
          top: 0;
          transform: none;
        `;
    }
  }}

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ $borderColor }) => `${$borderColor}66`};
    border-radius: 9999px;
  }
`;

const baseItemStyles = css<{
  $inset?: boolean;
  $textColor: string;
  $hoverBgColor: string;
  $hoverTextColor: string;
  $mutedTextColor: string;
  $destructiveTextColor: string;
  $destructiveHoverBgColor: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${AppTheme.spacing['08']};
  padding: ${AppTheme.spacing['08']} ${AppTheme.spacing['12']};
  ${({ $inset }) =>
    $inset &&
    css`
      padding-left: calc(${AppTheme.spacing['12']} + ${AppTheme.spacing['16']});
    `}
  border: none;
  background: transparent;
  color: ${({ $textColor }) => $textColor};
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
  font: inherit;
  font-size: ${AppTheme.typography.label['14/regular'].fontSize};
  line-height: ${AppTheme.typography.label['14/regular'].lineHeight};
  transition: background-color 0.12s ease-out, color 0.12s ease-out;

  &[data-active='true'] {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
    color: ${({ $hoverTextColor }) => $hoverTextColor};
  }

  &[data-variant='destructive'] {
    color: ${({ $destructiveTextColor }) => $destructiveTextColor};

    &[data-active='true'] {
      background-color: ${({ $destructiveHoverBgColor }) =>
        $destructiveHoverBgColor};
      color: ${({ $destructiveTextColor }) => $destructiveTextColor};
    }
  }

  &[data-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export const DropdownMenuItemButton = styled.button<{
  $inset?: boolean;
  $textColor: string;
  $hoverBgColor: string;
  $hoverTextColor: string;
  $mutedTextColor: string;
  $destructiveTextColor: string;
  $destructiveHoverBgColor: string;
}>`
  ${baseItemStyles}
`;

export const DropdownMenuCheckboxItemButton = styled.button<{
  $textColor: string;
  $hoverBgColor: string;
  $hoverTextColor: string;
  $mutedTextColor: string;
  $destructiveTextColor: string;
  $destructiveHoverBgColor: string;
}>`
  ${baseItemStyles}
  padding-left: calc(${AppTheme.spacing['12']} + ${AppTheme.spacing['16']});
  position: relative;

  & .dropdown-menu-item__indicator {
    position: absolute;
    left: ${AppTheme.spacing['12']};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${AppTheme.spacing['16']};
    height: ${AppTheme.spacing['16']};
    color: ${({ $textColor }) => $textColor};
  }

  & .dropdown-menu-item__indicator svg {
    width: 14px;
    height: 14px;
  }
`;

export const DropdownMenuSeparatorLine = styled.div<{
  $borderColor: string;
}>`
  height: 1px;
  width: 100%;
  background-color: ${({ $borderColor }) => $borderColor};
  margin: ${AppTheme.spacing['04']} 0;
`;

export const DropdownMenuLabelText = styled.div<{
  $mutedTextColor: string;
  $inset?: boolean;
}>`
  padding: ${AppTheme.spacing['08']} ${AppTheme.spacing['12']};
  ${({ $inset }) =>
    $inset &&
    css`
      padding-left: calc(${AppTheme.spacing['12']} + ${AppTheme.spacing['16']});
    `}
  font-weight: 600;
  font-size: ${AppTheme.typography.label['12/semibold'].fontSize};
  line-height: ${AppTheme.typography.label['12/semibold'].lineHeight};
  color: ${({ $mutedTextColor }) => $mutedTextColor};
`;

export const DropdownMenuShortcutText = styled.span<{
  $mutedTextColor: string;
}>`
  margin-left: auto;
  font-size: ${AppTheme.typography.label['12/regular'].fontSize};
  line-height: ${AppTheme.typography.label['12/regular'].lineHeight};
  letter-spacing: 0.12em;
  color: ${({ $mutedTextColor }) => $mutedTextColor};
`;
