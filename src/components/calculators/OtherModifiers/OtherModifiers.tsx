import React from "react";
import { modifierInterface } from "utils/modifiers";
import SensorHit, {
  label as sensorLabel,
} from "components/modifiers/SensorHit/SensorHit";
import SensorHitSecond, {
  label as sensorSecondLabel,
} from "components/modifiers/SensorHitSecond/SensorHitSecond";
import ShoulderHit, {
  label as shoulderLabel,
} from "components/modifiers/ShoulderHit/ShoulderHit";
import UpperArmHit, {
  label as upperArmLabel,
} from "components/modifiers/UpperArmHit/UpperArmHit";
import LowerArmHit, {
  label as lowerArmLabel,
} from "components/modifiers/LowerArmHit/LowerArmHit";
import Heat, { label as heatLabel } from "components/modifiers/Heat/Heat";
import SecondaryTargetForward, {
  label as secondaryForwardLabel,
} from "components/modifiers/SecondaryTargetForward/SecondaryTargetForward";
import SecondaryTargetSideRear, {
  label as secondarySideRearLabel,
} from "components/modifiers/SecondaryTargetSideRear/SecondaryTargetSideRear";
import IndirectFire, {
  label as indirectLabel,
} from "components/modifiers/IndirectFire/IndirectFire";
import IndirectFireSpotterAttacked, {
  label as indirectSpotterAttackedLabel,
} from "components/modifiers/IndirectFireSpotterAttacked/IndirectFireSpotterAttacked";
import Spotter, {
  label as spotterLabel,
} from "components/modifiers/Spotter/Spotter";

interface OtherModifiersProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  selected?: Map<string, modifierInterface>;
  onChange?: (selected: Map<string, modifierInterface>) => void;
}

/**
 * Calculates the sum of all modifiers in GATOR's "Other" category.
 */
function OtherModifiers({
  selected = new Map(),
  onChange = () => {},
  ...props
}: OtherModifiersProps) {
  const handleChange = (label: string, modifier: modifierInterface) => {
    const newSelected = new Map(selected);
    if (modifier.value) {
      newSelected.set(label, modifier);

      // A shoulder hit means other arm hits are disregarded.
      if (label === shoulderLabel) {
        newSelected.delete(upperArmLabel);
        newSelected.delete(lowerArmLabel);
      }
      // The two secondary target options are mutually exclusive.
      else if (label === secondaryForwardLabel) {
        newSelected.delete(secondarySideRearLabel);
      } else if (label === secondarySideRearLabel) {
        newSelected.delete(secondaryForwardLabel);
      }
      // The three indirect fire options are mutually exclusive.
      else if (label === indirectLabel) {
        newSelected.delete(indirectSpotterAttackedLabel);
        newSelected.delete(spotterLabel);
      } else if (label === indirectSpotterAttackedLabel) {
        newSelected.delete(indirectLabel);
        newSelected.delete(spotterLabel);
      } else if (label === spotterLabel) {
        newSelected.delete(indirectLabel);
        newSelected.delete(indirectSpotterAttackedLabel);
      }
    } else {
      newSelected.delete(label);
    }
    onChange(newSelected);
  };

  return (
    <div {...props}>
      <SensorHit
        checked={selected.has(sensorLabel)}
        onChange={(label, value) => handleChange(sensorLabel, { label, value })}
      />
      <SensorHitSecond
        checked={selected.has(sensorSecondLabel)}
        onChange={(label, value) =>
          handleChange(sensorSecondLabel, { label, value })
        }
        disabled={!selected.has(sensorLabel)}
      />
      <ShoulderHit
        checked={selected.has(shoulderLabel)}
        onChange={(label, value) =>
          handleChange(shoulderLabel, { label, value })
        }
      />
      <UpperArmHit
        checked={selected.has(upperArmLabel)}
        onChange={(label, value) =>
          handleChange(upperArmLabel, { label, value })
        }
        disabled={selected.has(shoulderLabel)}
      />
      <LowerArmHit
        checked={selected.has(lowerArmLabel)}
        onChange={(label, value) =>
          handleChange(lowerArmLabel, { label, value })
        }
        disabled={selected.has(shoulderLabel)}
      />
      <Heat
        selected={
          selected.has(heatLabel) ? selected.get(heatLabel)!.label : undefined
        }
        onChange={(label, value) => handleChange(heatLabel, { label, value })}
      />
      <SecondaryTargetForward
        checked={selected.has(secondaryForwardLabel)}
        onChange={(label, value) =>
          handleChange(secondaryForwardLabel, { label, value })
        }
      />
      <SecondaryTargetSideRear
        checked={selected.has(secondarySideRearLabel)}
        onChange={(label, value) =>
          handleChange(secondarySideRearLabel, { label, value })
        }
      />
      <IndirectFire
        checked={selected.has(indirectLabel)}
        onChange={(label, value) =>
          handleChange(indirectLabel, { label, value })
        }
      />
      <IndirectFireSpotterAttacked
        checked={selected.has(indirectSpotterAttackedLabel)}
        onChange={(label, value) =>
          handleChange(indirectSpotterAttackedLabel, { label, value })
        }
      />
      <Spotter
        checked={selected.has(spotterLabel)}
        onChange={(label, value) =>
          handleChange(spotterLabel, { label, value })
        }
      />
      <div>@todo Terrain modifiers</div>
    </div>
  );
}

export default OtherModifiers;
