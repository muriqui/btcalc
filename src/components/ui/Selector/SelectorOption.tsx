import React, { useId } from "react";
import Label from "components/ui/Label/Label";

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
          ? "border-amber-400 bg-amber-400 font-semibold text-slate-900"
          : "border-slate-900 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900 dark:border-slate-300"
      } relative flex w-full cursor-pointer items-center justify-between rounded-lg border px-5 py-4 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100 dark:focus-within:ring-amber-400 dark:focus-within:ring-offset-slate-900`}
      onClick={disabled ? () => {} : handleChange}
      {...props}
    >
      <div className={`${disabled ? "pointer-events-none" : ""} flex-auto`}>
        <input
          type="radio"
          id={`${id}-radio`}
          checked={checked}
          disabled={disabled}
          aria-describedby={description && `${id}-description`}
          onChange={handleChange}
          className="sr-only"
        />
        <Label htmlFor={`${id}-radio`}>{label}</Label>
        {description && (
          <span id={`${id}-description`} className="block text-sm">
            {description}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default SelectorOption;
