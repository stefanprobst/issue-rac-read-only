"use client";

import { TextField, Label, Input } from "react-aria-components";

export function Check() {
  return (
    <>
      <TextField className="grid" isReadOnly>
        <Label>Check readonly</Label>
        <Input className="border-2 read-only:border-sky-600" name="check-readonly" />
      </TextField>

      <TextField className="grid" isRequired>
        <Label>Check required</Label>
        <Input className="border-2 required:border-pink-600" name="check-required" />
      </TextField>

      <TextField className="grid" isDisabled>
        <Label>Check disabled</Label>
        <Input className="border-2 disabled:border-purple-600" name="check-disabled" />
      </TextField>

      <TextField className="grid" isInvalid>
        <Label>Check invalid</Label>
        <Input className="border-2 invalid:border-red-600" name="check-invalid" />
      </TextField>
    </>
  );
}
