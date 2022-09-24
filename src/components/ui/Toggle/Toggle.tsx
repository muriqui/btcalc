import React, { useId } from "react";
import Label from "components/ui/Label/Label";

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
      className={`${disabled ? "cursor-not-allowed opacity-60" : ""} ${
        checked ? "text-amber-700 dark:text-amber-500" : ""
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
          checked
            ? "border-amber-500 bg-amber-400 dark:bg-amber-500"
            : "border-slate-900 dark:border-slate-300"
        } relative inline-flex h-6 w-11 flex-none items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900`}
      >
        <span
          className={`${
            checked
              ? "translate-x-6 border-amber-400 bg-slate-900 dark:border-slate-900"
              : "translate-x-1 border-slate-100 bg-slate-900 dark:border-slate-900 dark:bg-slate-300"
          } inline-block h-4 w-4 transform rounded-full border transition-transform`}
        ></span>
      </button>
      <div
        className={`${
          disabled ? "pointer-events-none" : ""
        } ml-4 flex-auto text-sm`}
      >
        <Label id={`${id}-label`} htmlFor={`${id}-toggle`}>
          {label}
        </Label>
        {description && (
          <span
            id={`${id}-description`}
            onClick={disabled ? () => {} : handleChange}
            className="block cursor-pointer text-xs"
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
