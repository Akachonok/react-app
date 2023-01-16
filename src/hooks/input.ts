import { useState, ChangeEvent } from "react";

export function useInput(initialState: string) {
  const [value, setInput] = useState<string>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  return {
    value,
    onChange,
  };
}
