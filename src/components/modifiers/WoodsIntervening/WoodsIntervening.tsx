import React from "react";
import Modifier from "components/ui/Modifier/Modifier";
import NumberInput from "components/ui/NumberInput/NumberInput";

export interface WoodsInterveningState {
  /** The number of intervening light woods hexes. */
  lightWoods?: number;
  /** The number of intervening heavy woods hexes. */
  heavyWoods?: number;
}

export interface WoodsInterveningProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange">,
    WoodsInterveningState {
  onChange?: (
    label: string,
    value?: number,
    state?: WoodsInterveningState
  ) => void;
}

export const label = "Intervening woods";

/**
 * Computes the current modifier value.
 *
 * @param lightWoods
 * @param heavyWoods
 * @returns number
 */
function computeValue(lightWoods?: number, heavyWoods?: number) {
  let sanitizedLightWoods = lightWoods || 0;
  sanitizedLightWoods = sanitizedLightWoods < 0 ? 0 : sanitizedLightWoods;
  let sanitizedHeavyWoods = heavyWoods || 0;
  sanitizedHeavyWoods = sanitizedHeavyWoods < 0 ? 0 : sanitizedHeavyWoods;
  const total = sanitizedLightWoods + sanitizedHeavyWoods * 2;
  return total >= 3 ? Infinity : total;
}

/**
 * Calculates the total modifier for intervening woods hexes.
 */
function WoodsIntervening({
  lightWoods,
  heavyWoods,
  onChange = () => {},
  ...props
}: WoodsInterveningProps) {
  const value = computeValue(lightWoods, heavyWoods);
  const handleChange = ({ lightWoods, heavyWoods }: WoodsInterveningState) =>
    onChange(label, computeValue(lightWoods, heavyWoods), {
      lightWoods,
      heavyWoods,
    });

  return (
    <div {...props}>
      <strong>Intervening woods hexes (not including the target hex)</strong>
      <Modifier value={value} hidden={value === 0} />
      <NumberInput
        label="Light woods"
        value={lightWoods}
        min={0}
        onChange={(lightWoods) => handleChange({ lightWoods, heavyWoods })}
      />
      <NumberInput
        label="Heavy woods"
        value={heavyWoods}
        min={0}
        onChange={(heavyWoods) => handleChange({ lightWoods, heavyWoods })}
      />
    </div>
  );
}

export default WoodsIntervening;
