import React, { useId } from "react";
import Label from "components/Label/Label";

export interface SelectorOptionProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** The option label. */
  label: string;
  /** An optional description. */
  description?: string;
  /** Whether the option is selected. */
  checked?: boolean;
  /** Whether the option is disabled (unable to accept input). */
  disabled?: boolean;
  onChange?: (label: string) => void;
}

/**
 * An option in a Selector.
 */
function SelectorOption({
  label,
  description,
  checked,
  disabled,
  onChange = () => {},
  children,
  ...props
}: SelectorOptionProps) {
  const id = useId();
  // @todo Fix handler double-firing during keyboard navigation.
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onChange(label);
  };

  return (
    <div
      className={`${
        disabled
          ? "cursor-not-allowed opacity-60"
          : checked
          ? "bg-sky-800 text-white"
          : "bg-white hover:bg-sky-100"
      } relative flex w-full cursor-pointer items-center justify-between rounded-lg px-5 py-4 shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-opacity-60 focus-within:ring-offset-2 focus-within:ring-offset-sky-300`}
      onClick={disabled ? () => {} : handleChange}
      {...props}
    >
      <div className={`${disabled ? "pointer-events-none" : ""} text-sm`}>
        <input
          type="radio"
          id={`${id}-radio`}
          checked={checked}
          disabled={disabled}
          aria-describedby={description && `${id}-description`}
          onChange={handleChange}
          className="sr-only"
        />
        <Label htmlFor={`${id}-radio`} darkBackground={checked && !disabled}>
          {label}
        </Label>
        {description && (
          <span
            id={`${id}-description`}
            className={`${checked && !disabled ? "text-sky-100" : ""} block`}
          >
            {description}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default SelectorOption;
