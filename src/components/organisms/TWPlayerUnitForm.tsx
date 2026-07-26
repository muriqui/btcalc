import { useEffect } from "react";
import { useFetcher } from "react-router";
import Button from "../atoms/Button";
import ButtonGroup from "../molecules/ButtonGroup";
import TextInput from "../molecules/TextInput";
import Select from "../molecules/Select";
import {
  type TWPlayerInterface,
  maxNameLength,
} from "~/services/totalWarfareService";

export interface TWPlayerUnitFormFetcherData {
  ok: boolean;
  error?: string;
}

export interface TWPlayerUnitFormProps {
  /** The unit, if we're editing an existing one; undefined if adding a new one. */
  unit?: TWPlayerInterface;
  /** Callback function after a successful save. */
  onSave: () => void;
  /** Callback function for canceling out of the form. */
  onCancel: () => void;
}

/**
 * The add/edit form for a Total Warfare player unit.
 */
export default function TWPlayerUnitForm({
  unit,
  onSave,
  onCancel,
}: TWPlayerUnitFormProps) {
  const fetcher = useFetcher<TWPlayerUnitFormFetcherData>();
  const saved = fetcher.data?.ok ?? false;
  const error = fetcher.data?.error ?? "";

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
      <Select
        name="gunnery"
        label="Gunnery skill"
        required
        defaultValue={unit?.gunnery ?? 4}
      >
        <option value={7}>7 (Novice)</option>
        <option value={6}>6 (Really green)</option>
        <option value={5}>5 (Green)</option>
        <option value={4}>4 (Regular)</option>
        <option value={3}>3 (Veteran)</option>
        <option value={2}>2 (Elite)</option>
        <option value={1}>1 (Heroic)</option>
        <option value={0}>0 (Legendary)</option>
      </Select>
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
