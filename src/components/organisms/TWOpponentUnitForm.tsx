import { useEffect } from "react";
import { useFetcher } from "react-router";
import Button from "../atoms/Button";
import ButtonGroup from "../molecules/ButtonGroup";
import TextInput from "../molecules/TextInput";
import {
  type TWOpponentInterface,
  maxNameLength,
} from "~/services/totalWarfareService";

export interface TWOpponentUnitFormFetcherData {
  ok: boolean;
  error?: string;
}

export interface TWOpponentUnitFormProps {
  /** The unit, if we're editing an existing one; undefined if adding a new one. */
  unit?: TWOpponentInterface;
  /** Callback function after a successful save. */
  onSave: () => void;
  /** Callback function for canceling out of the form. */
  onCancel: () => void;
}

/**
 * The add/edit form for a Total Warfare opponent unit.
 */
export default function TWOpponentUnitForm({
  unit,
  onSave,
  onCancel,
}: TWOpponentUnitFormProps) {
  const fetcher = useFetcher<TWOpponentUnitFormFetcherData>();
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
