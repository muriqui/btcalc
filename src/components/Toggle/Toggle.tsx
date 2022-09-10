import React, { useId } from "react";
import Label from "components/Label/Label";

export interface ToggleProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** The toggle switch label. */
  label: string;
  /** An optional description. */
  description?: string;
  /** Whether the toggle switch is on (checked) or off (not checked). */
  checked?: boolean;
  /** Whether the toggle switch control is disabled (unable to accept input). */
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

/**
 * A toggle switch.
 */
function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange = () => {},
  children,
  ...props
}: ToggleProps) {
  const id = useId();
  const handleChange = () => onChange(!checked);

  return (
    <div
      className={`${
        disabled ? "cursor-not-allowed opacity-60" : ""
      } flex items-center px-5 py-4`}
      {...props}
    >
      <button
        type="button"
        id={`${id}-toggle`}
        role="switch"
        aria-checked={checked}
        aria-readonly={disabled}
        aria-labelledby={`${id}-label`}
        aria-describedby={description && `${id}-description`}
        onClick={disabled ? () => {} : handleChange}
        className={`${disabled ? "pointer-events-none" : ""} ${
          checked ? "bg-sky-800" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60 focus:ring-offset-2 focus:ring-offset-sky-300`}
      >
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        ></span>
      </button>
      <div className={`${disabled ? "pointer-events-none" : ""} ml-4 text-sm`}>
        <Label id={`${id}-label`} htmlFor={`${id}-toggle`}>
          {label}
        </Label>
        {description && (
          <span
            id={`${id}-description`}
            onClick={disabled ? () => {} : handleChange}
            className="block cursor-pointer"
          >
            {description}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default Toggle;
