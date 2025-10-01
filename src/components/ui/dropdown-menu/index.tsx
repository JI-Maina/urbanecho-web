"use client";

import * as React from "react";
import { Menu, Portal } from "@headlessui/react";
import { Check, Dot } from "@phosphor-icons/react";

import { useColor } from "@/providers/theme-provider";

import {
  DropdownMenuCheckboxItemButton,
  DropdownMenuContentWrapper,
  DropdownMenuItemButton,
  DropdownMenuLabelText,
  DropdownMenuSeparatorLine,
  DropdownMenuShortcutText,
  DropdownMenuWrapper,
} from "./styles";

function withAlpha(color: string, alpha: number) {
  const hex = color?.startsWith("#") ? color.slice(1) : color;
  if (!hex || (hex.length !== 6 && hex.length !== 8)) return color;

  const value = Number.parseInt(hex.slice(0, 6), 16);
  if (Number.isNaN(value)) return color;

  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
}

const useDropdownColors = () => ({
  backgroundColor: useColor("surface.surface-l0"),
  borderColor: useColor("border.border-subtle"),
  textColor: useColor("content.content-primary"),
  mutedTextColor: useColor("content.content-tertiary"),
  hoverBgColor: useColor("background.background-hover"),
  hoverTextColor: useColor("content.content-primary"),
  destructiveTextColor: useColor("content.content-negative"),
  destructiveHoverBgColor: withAlpha(
    useColor("background.background-negative"),
    0.18
  ),
  shadowColor: "rgba(16, 24, 40, 0.12)",
});


type MenuProps = React.ComponentPropsWithoutRef<typeof Menu>;

type Side = "top" | "bottom" | "left" | "right";

type Align = "start" | "end" | "center";

interface DropdownMenuContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Menu.Items>,
    "className" | "static"
  > {
  align?: Align;
  side?: Side;
  sideOffset?: number;
  className?: string;
}

interface DropdownMenuItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  inset?: boolean;
  variant?: "default" | "destructive";
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface DropdownMenuCheckboxItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

interface DropdownMenuRadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface DropdownMenuRadioItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  value: string;
  onSelect?: (value: string) => void;
}

const RadioGroupContext = React.createContext<{
  value?: string;
  onValueChange?: (nextValue: string) => void;
} | null>(null);

function DropdownMenu({ children, ...props }: MenuProps) {
  return (
    <Menu as={DropdownMenuWrapper} data-slot="dropdown-menu" {...props}>
      {children}
    </Menu>
  );
}

interface DropdownMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>(({ asChild = false, children, className, ...props }, ref) => {
  if (asChild) {
    if (!React.isValidElement(children)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "DropdownMenuTrigger: `asChild` expects a single React element child."
        );
      }
      return null;
    }

    const childElement = children as React.ReactElement;

    return (
      <Menu.Button as={React.Fragment} {...props}>
        {React.cloneElement(childElement, {
          ref: mergeRefs((childElement as any).ref, ref),
        } as unknown as Record<string, unknown>)}
      </Menu.Button>
    );
  }

  return (
    <Menu.Button as={React.Fragment} {...props}>
      <button
        ref={ref}
        type="button"
        data-slot="dropdown-menu-trigger"
        className={className}
      >
        {children}
      </button>
    </Menu.Button>
  );
});

DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuPortal = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Portal>) => (
  <Portal {...props}>{children}</Portal>
);

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(function DropdownMenuContentInner(
  {
    align = "start",
    side = "bottom",
    sideOffset = 4,
    children,
    className,
    ...props
  },
  ref
) {
  const colors = useDropdownColors();

  return (
    <Menu.Items as={React.Fragment} {...props}>
      <DropdownMenuContentWrapper
        ref={ref}
        data-slot="dropdown-menu-content"
        className={className}
        $align={align}
        $side={side}
        $sideOffset={sideOffset}
        $backgroundColor={colors.backgroundColor}
        $borderColor={colors.borderColor}
        $textColor={colors.textColor}
        $shadowColor={colors.shadowColor}
      >
        {children as React.ReactNode}
      </DropdownMenuContentWrapper>
    </Menu.Items>
  );
});

DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuGroup = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div data-slot="dropdown-menu-group" {...props}>
    {children}
  </div>
);

const DropdownMenuItem = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuItemProps
>(({ inset, variant = "default", disabled, onClick, onSelect, children, ...props }, ref) => {
  const colors = useDropdownColors();

  return (
    <Menu.Item disabled={disabled} as={React.Fragment}>
      {({ active, disabled: itemDisabled }) => (
        <DropdownMenuItemButton
          ref={ref}
          type="button"
          role="menuitem"
          data-slot="dropdown-menu-item"
          data-active={active ? "true" : undefined}
          data-disabled={itemDisabled ? "true" : undefined}
          data-variant={variant}
          $inset={inset}
          $textColor={colors.textColor}
          $hoverBgColor={colors.hoverBgColor}
          $hoverTextColor={colors.hoverTextColor}
          $mutedTextColor={colors.mutedTextColor}
          $destructiveTextColor={colors.destructiveTextColor}
          $destructiveHoverBgColor={colors.destructiveHoverBgColor}
          onClick={(event) => {
            onSelect?.(event);
            onClick?.(event);
          }}
          {...props}
        >
          {children}
        </DropdownMenuItemButton>
      )}
    </Menu.Item>
  );
});

DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuCheckboxItemProps
>(({ checked = false, onCheckedChange, disabled, children, onClick, ...props }, ref) => {
  const colors = useDropdownColors();

  return (
    <Menu.Item disabled={disabled} as={React.Fragment}>
      {({ active, disabled: itemDisabled }) => (
        <DropdownMenuCheckboxItemButton
          ref={ref}
          type="button"
          role="menuitemcheckbox"
          aria-checked={checked}
          data-slot="dropdown-menu-checkbox-item"
          data-active={active ? "true" : undefined}
          data-disabled={itemDisabled ? "true" : undefined}
          $textColor={colors.textColor}
          $hoverBgColor={colors.hoverBgColor}
          $hoverTextColor={colors.hoverTextColor}
          $mutedTextColor={colors.mutedTextColor}
          $destructiveTextColor={colors.destructiveTextColor}
          $destructiveHoverBgColor={colors.destructiveHoverBgColor}
          onClick={(event) => {
            event.preventDefault();
            if (itemDisabled) {
              return;
            }
            onCheckedChange?.(!checked);
            onClick?.(event);
          }}
          {...props}
        >
          <span className="dropdown-menu-item__indicator" aria-hidden>
            {checked ? <Check weight="bold" size={14} /> : null}
          </span>
          {children}
        </DropdownMenuCheckboxItemButton>
      )}
    </Menu.Item>
  );
});

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

const DropdownMenuRadioGroup = ({
  value,
  onValueChange,
  children,
}: DropdownMenuRadioGroupProps) => {
  const contextValue = React.useMemo(
    () => ({ value, onValueChange }),
    [value, onValueChange]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div data-slot="dropdown-menu-radio-group">{children}</div>
    </RadioGroupContext.Provider>
  );
};

const DropdownMenuRadioItem = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuRadioItemProps
>(({ value, disabled, children, onSelect, onClick, ...props }, ref) => {
  const context = React.useContext(RadioGroupContext);
  const colors = useDropdownColors();
  const checked = context?.value === value;

  return (
    <Menu.Item disabled={disabled} as={React.Fragment}>
      {({ active, disabled: itemDisabled }) => (
        <DropdownMenuCheckboxItemButton
          ref={ref}
          type="button"
          role="menuitemradio"
          aria-checked={checked}
          data-slot="dropdown-menu-radio-item"
          data-active={active ? "true" : undefined}
          data-disabled={itemDisabled ? "true" : undefined}
          $textColor={colors.textColor}
          $hoverBgColor={colors.hoverBgColor}
          $hoverTextColor={colors.hoverTextColor}
          $mutedTextColor={colors.mutedTextColor}
          $destructiveTextColor={colors.destructiveTextColor}
          $destructiveHoverBgColor={colors.destructiveHoverBgColor}
          onClick={(event) => {
            event.preventDefault();
            if (itemDisabled) {
              return;
            }
            context?.onValueChange?.(value);
            onSelect?.(value);
            onClick?.(event);
          }}
          {...props}
        >
          <span className="dropdown-menu-item__indicator" aria-hidden>
            {checked ? <Dot weight="fill" size={12} /> : null}
          </span>
          {children}
        </DropdownMenuCheckboxItemButton>
      )}
    </Menu.Item>
  );
});

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

const DropdownMenuSeparator = () => {
  const colors = useDropdownColors();
  return (
    <DropdownMenuSeparatorLine
      data-slot="dropdown-menu-separator"
      $borderColor={withAlpha(colors.borderColor, 0.6)}
    />
  );
};

const DropdownMenuLabel = ({
  inset,
  children,
  ...props
}: {
  inset?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const colors = useDropdownColors();
  return (
    <DropdownMenuLabelText
      data-slot="dropdown-menu-label"
      $mutedTextColor={colors.mutedTextColor}
      $inset={inset}
      {...props}
    >
      {children}
    </DropdownMenuLabelText>
  );
};

const DropdownMenuShortcut = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const colors = useDropdownColors();
  return (
    <DropdownMenuShortcutText
      data-slot="dropdown-menu-shortcut"
      $mutedTextColor={colors.mutedTextColor}
      {...props}
    >
      {children}
    </DropdownMenuShortcutText>
  );
};

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuShortcut,
};
