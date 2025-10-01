"use client";

import * as React from "react";

import { useColor } from "@/providers/theme-provider";

import {
  HiddenRadioInput,
  RadioGroupRoot,
  RadioIndicator,
  RadioItemRoot,
} from "./styles";

const SIZE_MAP = {
  small: { box: 16 },
  medium: { box: 20 },
  large: { box: 24 },
} as const;

export type RadioSize = keyof typeof SIZE_MAP;

type Orientation = "horizontal" | "vertical";

export interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  orientation?: Orientation;
  required?: boolean;
}

type NativeRadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "defaultChecked" | "name" | "value" | "onChange" | "size"
>;

export interface RadioGroupItemProps extends NativeRadioProps {
  value: string;
  size?: RadioSize;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

type RadioGroupContextValue = {
  name: string;
  value?: string;
  disabled: boolean;
  required?: boolean;
  orientation: Orientation;
  isInvalid: boolean;
  onValueChange: (value: string) => void;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(
  null
);

const mergeRefs = <T,>(...refs: Array<React.Ref<T> | undefined>) =>
  (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        // eslint-disable-next-line no-param-reassign
        (ref as React.RefObject<T | null>).current = node;
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

const useRadioColors = () => ({
  backgroundColor: useColor("surface.surface-l0"),
  hoverBgColor: useColor("background.background-hover"),
  activeBgColor: useColor("background.background-pressed"),
  borderColor: useColor("border.border-secondary"),
  hoverBorderColor: useColor("border.border-focus"),
  checkedBorderColor: useColor("border.border-brand"),
  indicatorColor: useColor("background.background-brand"),
  disabledIndicatorColor: useColor("content.content-disabled"),
  disabledBgColor: useColor("background.background-disabled"),
  disabledBorderColor: useColor("border.border-disabled"),
  focusRingColor: useColor("border.border-focus"),
  invalidBorderColor: useColor("border.border-negative"),
  invalidFocusRingColor: useColor("border.border-negative-focus"),
});

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      name,
      disabled = false,
      orientation = "vertical",
      required,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const groupName = name ?? `radio-group-${generatedId}`;

    const {
      ["aria-invalid"]: ariaInvalid,
      ...divProps
    } = rest as RadioGroupProps & Record<string, unknown>;

    const ariaInvalidValue =
      ariaInvalid as React.AriaAttributes["aria-invalid"];

    const isInvalid =
      ariaInvalidValue === true ||
      ariaInvalidValue === "true" ||
      ariaInvalidValue === "grammar" ||
      ariaInvalidValue === "spelling";

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = isControlled ? value : internalValue;

    const handleValueChange = React.useCallback(
      (nextValue: string) => {
        if (!isControlled) {
          setInternalValue(nextValue);
        }
        onValueChange?.(nextValue);
      },
      [isControlled, onValueChange]
    );

    const contextValue = React.useMemo<RadioGroupContextValue>(
      () => ({
        name: groupName,
        value: currentValue,
        disabled,
        required,
        orientation,
        isInvalid,
        onValueChange: handleValueChange,
      }),
      [groupName, currentValue, disabled, required, orientation, isInvalid, handleValueChange]
    );

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <RadioGroupRoot
          ref={ref}
          role="radiogroup"
          data-slot="radio-group"
          className={className}
          data-disabled={disabled ? "true" : undefined}
          data-invalid={isInvalid ? "true" : undefined}
          data-orientation={orientation}
          aria-invalid={ariaInvalidValue}
          $orientation={orientation}
          {...(divProps as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </RadioGroupRoot>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = React.forwardRef<
  HTMLInputElement,
  RadioGroupItemProps
>(
  (
    { value, size = "medium", disabled = false, className, onChange, id, ...rest },
    ref
  ) => {
    const context = React.useContext(RadioGroupContext);
    if (!context) {
      throw new Error("RadioGroupItem must be used within a RadioGroup");
    }

    const colors = useRadioColors();
    const dimensions = SIZE_MAP[size] ?? SIZE_MAP.medium;

    const isDisabled = context.disabled || disabled;
    const isChecked = context.value === value;
    const visualState = isChecked ? "checked" : "unchecked";

    const internalRef = React.useRef<HTMLInputElement>(null);
    const composedRef = React.useMemo(
      () => mergeRefs(ref, internalRef),
      [ref]
    );

    const {
      ["data-testid"]: dataTestId,
      ...inputProps
    } = rest as NativeRadioProps & Record<string, unknown>;

    const focusRingBackground = withAlpha(colors.focusRingColor, 0.2);
    const invalidFocusRingBackground = withAlpha(
      colors.invalidFocusRingColor,
      0.2
    );

    const inputId = id ?? `${context.name}-${value}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }

      if (event.target.checked) {
        context.onValueChange(value);
      }

      onChange?.(event);
    };

    return (
      <RadioItemRoot
        data-slot="radio-group-item"
        className={className}
        data-state={visualState}
        data-disabled={isDisabled ? "true" : undefined}
        data-invalid={context.isInvalid ? "true" : undefined}
        $size={dimensions.box}
        $backgroundColor={colors.backgroundColor}
        $hoverBgColor={colors.hoverBgColor}
        $activeBgColor={colors.activeBgColor}
        $borderColor={colors.borderColor}
        $hoverBorderColor={colors.hoverBorderColor}
        $checkedBorderColor={colors.checkedBorderColor}
        $disabledBgColor={colors.disabledBgColor}
        $disabledBorderColor={colors.disabledBorderColor}
        $invalidBorderColor={colors.invalidBorderColor}
        $focusRingColor={colors.focusRingColor}
        $focusRingBackground={focusRingBackground}
        $invalidFocusRingColor={colors.invalidFocusRingColor}
        $invalidFocusRingBackground={invalidFocusRingBackground}
      >
        <HiddenRadioInput
          ref={composedRef}
          type="radio"
          id={inputId}
          name={context.name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          required={context.required}
          data-testid={dataTestId as string | undefined}
          {...inputProps}
        />
        <RadioIndicator
          data-slot="radio-group-indicator"
          data-state={visualState}
          data-disabled={isDisabled ? "true" : undefined}
          $size={dimensions.box}
          $indicatorColor={colors.indicatorColor}
          $disabledIndicatorColor={colors.disabledIndicatorColor}
        />
      </RadioItemRoot>
    );
  }
);

RadioGroupItem.displayName = "RadioGroupItem";
