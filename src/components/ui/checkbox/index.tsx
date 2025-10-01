"use client";

import * as React from "react";
import { Check, Minus } from "@phosphor-icons/react";

import { useColor } from "@/providers/theme-provider";

import {
  CheckboxIndicator,
  CheckboxRoot,
  HiddenCheckboxInput,
} from "./styles";

export type CheckedState = boolean | "indeterminate";

const SIZE_MAP = {
  small: { box: 16, icon: 10 },
  medium: { box: 20, icon: 12 },
  large: { box: 24, icon: 14 },
} as const;

export type CheckboxSize = keyof typeof SIZE_MAP;

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "defaultChecked" | "onChange" | "size"
>;

export interface CheckboxProps extends NativeInputProps {
  checked?: CheckedState;
  defaultChecked?: boolean;
  onCheckedChange?: (state: CheckedState) => void;
  size?: CheckboxSize;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const mergeRefs = <T,>(...refs: Array<React.Ref<T> | undefined>) =>
  (node: T) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        // eslint-disable-next-line no-param-reassign
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };

const withAlpha = (color: string, alpha: number) => {
  if (typeof color !== "string") return color;
  const hex = color.startsWith("#") ? color.slice(1) : color;
  if (hex.length !== 6 && hex.length !== 8) {
    return color;
  }

  const base = hex.length === 8 ? hex.slice(0, 6) : hex;
  const numeric = Number.parseInt(base, 16);
  if (Number.isNaN(numeric)) {
    return color;
  }

  const r = (numeric >> 16) & 255;
  const g = (numeric >> 8) & 255;
  const b = numeric & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const useCheckboxColors = () => ({
  backgroundColor: useColor("surface.surface-l0"),
  hoverBgColor: useColor("background.background-hover"),
  activeBgColor: useColor("background.background-pressed"),
  checkedBgColor: useColor("background.background-brand"),
  checkedHoverBgColor: useColor("background.background-brand-hover"),
  checkedActiveBgColor: useColor("background.background-brand-pressed"),
  borderColor: useColor("border.border-secondary"),
  hoverBorderColor: useColor("border.border-focus"),
  checkedBorderColor: useColor("border.border-brand"),
  disabledBorderColor: useColor("border.border-disabled"),
  disabledBgColor: useColor("background.background-disabled"),
  indicatorColor: useColor("content.content-primary-inverse"),
  disabledIndicatorColor: useColor("content.content-disabled"),
  focusRingColor: useColor("border.border-focus"),
  invalidBorderColor: useColor("border.border-negative"),
  invalidFocusRingColor: useColor("border.border-negative-focus"),
});

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked: checkedProp,
      defaultChecked,
      onCheckedChange,
      onChange,
      size = "medium",
      disabled = false,
      className,
      id,
      name,
      value,
      required,
      ...rest
    },
    ref
  ) => {
    const colors = useCheckboxColors();

    const internalRef = React.useRef<HTMLInputElement>(null);
    const composedRef = React.useMemo(
      () => mergeRefs(ref, internalRef),
      [ref]
    );

    const {
      ["aria-invalid"]: ariaInvalid,
      ["data-testid"]: dataTestId,
      ...inputProps
    } = rest as NativeInputProps & Record<string, unknown>;

    const isControlled = checkedProp !== undefined;
    const isIndeterminate = checkedProp === "indeterminate";
    const isCheckedControlled = checkedProp === true;

    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(
      defaultChecked ?? false
    );

    React.useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

    const currentChecked = isControlled
      ? isCheckedControlled
      : uncontrolledChecked;

    const state: CheckedState = isIndeterminate
      ? "indeterminate"
      : currentChecked;

    const visualState =
      state === "indeterminate"
        ? "indeterminate"
        : state
          ? "checked"
          : "unchecked";

    const dimensions = SIZE_MAP[size] ?? SIZE_MAP.medium;

    const focusRingBackground = withAlpha(colors.focusRingColor, 0.2);
    const invalidFocusRingBackground = withAlpha(
      colors.invalidFocusRingColor,
      0.2
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledChecked(event.target.checked);
      }

      const nextValue: CheckedState = event.target.checked;
      onCheckedChange?.(nextValue);
      onChange?.(event);
    };

    const inputCheckedValue = isControlled
      ? checkedProp === true
      : undefined;

    const inputAriaInvalid =
      ariaInvalid as React.AriaAttributes["aria-invalid"];

    const isInvalid =
      inputAriaInvalid === true ||
      inputAriaInvalid === "true" ||
      inputAriaInvalid === "grammar" ||
      inputAriaInvalid === "spelling";

    return (
      <CheckboxRoot
        data-slot="checkbox"
        className={className}
        data-state={visualState}
        data-disabled={disabled ? "true" : undefined}
        data-invalid={isInvalid ? "true" : undefined}
        $size={dimensions.box}
        $backgroundColor={colors.backgroundColor}
        $hoverBgColor={colors.hoverBgColor}
        $activeBgColor={colors.activeBgColor}
        $borderColor={colors.borderColor}
        $hoverBorderColor={colors.hoverBorderColor}
        $checkedBorderColor={colors.checkedBorderColor}
        $checkedBgColor={colors.checkedBgColor}
        $checkedHoverBgColor={colors.checkedHoverBgColor}
        $checkedActiveBgColor={colors.checkedActiveBgColor}
        $disabledBgColor={colors.disabledBgColor}
        $disabledBorderColor={colors.disabledBorderColor}
        $invalidBorderColor={colors.invalidBorderColor}
        $focusRingColor={colors.focusRingColor}
        $focusRingBackground={focusRingBackground}
        $invalidFocusRingColor={colors.invalidFocusRingColor}
        $invalidFocusRingBackground={invalidFocusRingBackground}
      >
        <HiddenCheckboxInput
          ref={composedRef}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          checked={inputCheckedValue}
          defaultChecked={isControlled ? undefined : defaultChecked}
          onChange={handleChange}
          aria-invalid={inputAriaInvalid}
          data-testid={dataTestId as string | undefined}
          {...inputProps}
        />
        <CheckboxIndicator
          data-slot="checkbox-indicator"
          data-state={visualState}
          data-disabled={disabled ? "true" : undefined}
          $iconSize={dimensions.icon}
          $indicatorColor={colors.indicatorColor}
          $disabledIndicatorColor={colors.disabledIndicatorColor}
        >
          {state === "indeterminate" && (
            <Minus weight="bold" />
          )}
          {state === true && (
            <Check weight="bold" />
          )}
        </CheckboxIndicator>
      </CheckboxRoot>
    );
  }
);

Checkbox.displayName = "Checkbox";
