import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import Button from "~/components/atoms/Button";
import ButtonGroup from "~/components/molecules/ButtonGroup";
import Checkbox from "~/components/molecules/Checkbox";
import NumberInput from "~/components/molecules/NumberInput";
import TextInput from "~/components/molecules/TextInput";
import {
  type ASOpponentInterface,
  maxNameLength,
  maxTMM,
  minTMM,
} from "~/services/alphaStrikeService";

export interface ASOpponentUnitFormFetcherData {
  ok: boolean;
  error?: string;
}

export interface ASOpponentUnitFormProps {
  /** The unit, if we're editing an existing one; undefined if adding a new one. */
  unit?: ASOpponentInterface;
  /** Callback function after a successful save. */
  onSave: () => void;
  /** Callback function for canceling out of the form. */
  onCancel: () => void;
}

/**
 * The add/edit form for an Alpha Strike opponent unit.
 */
export default function ASOpponentUnitForm({
  unit,
  onSave,
  onCancel,
}: ASOpponentUnitFormProps) {
  const fetcher = useFetcher<ASOpponentUnitFormFetcherData>();
  const saved = fetcher.data?.ok ?? false;
  const error = fetcher.data?.error ?? "";
  const [showJumpTmm, setShowJumpTmm] = useState(unit?.jump ?? false);
  const handleJumpClick = () => {
    setShowJumpTmm(!showJumpTmm);
  };

  useEffect(() => {
    if (saved) {
      onSave();
    }
  }, [onSave, saved]);

  return (
    <fetcher.Form method="post" className="flex flex-col gap-2.5">
      <TextInput
        name="name"
        label="Unit name"
        required
        maxLength={maxNameLength}
        autoFocus
        defaultValue={unit?.name}
      />
      <NumberInput
        name="tmm"
        label="Target movement modifier"
        required
        min={minTMM}
        max={maxTMM}
        step={1}
        defaultValue={unit?.tmm}
      />
      <Checkbox
        name="jump"
        label="Jump-capable?"
        defaultChecked={unit?.jump}
        onClick={handleJumpClick}
      />
      {showJumpTmm && (
        <NumberInput
          name="jumpTmm"
          label="TMM while jumping (if different)"
          required
          min={minTMM}
          max={maxTMM}
          step={1}
          defaultValue={unit?.jumpTmm}
          className="ml-11"
        />
      )}
      <Checkbox name="stl" label="Stealth?" defaultChecked={unit?.stl} />
      <div role="alert" className="text-center">
        {error && <p>{error}</p>}
      </div>
      <ButtonGroup className="mt-3 -mb-6">
        <Button type="submit">Save</Button>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </fetcher.Form>
  );
}
