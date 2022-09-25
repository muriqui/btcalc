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
        checked ? "text-amber-700 dark:text-amber-400" : ""
      } flex items-center gap-4 px-5 py-4`}
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
            ? "border-amber-400 bg-amber-400"
            : "border-slate-900 dark:border-slate-300"
        } relative inline-flex h-7 w-14 flex-none items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-amber-400 dark:focus:ring-offset-slate-900`}
      >
        <span
          className={`${
            checked
              ? "translate-x-7 border-amber-400 bg-slate-900 dark:border-slate-900"
              : "translate-x-1 border-slate-100 bg-slate-900 dark:border-slate-900 dark:bg-slate-300"
          } inline-block h-5 w-5 transform rounded-full border transition-transform`}
        ></span>
      </button>
      <div className={`${disabled ? "pointer-events-none" : ""} flex-auto`}>
        <Label id={`${id}-label`} htmlFor={`${id}-toggle`}>
          {label}
        </Label>
        {description && (
          <span
            id={`${id}-description`}
            onClick={disabled ? () => {} : handleChange}
            className="block cursor-pointer text-sm"
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
