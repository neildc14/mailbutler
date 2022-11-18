import { useState } from "react";

function useChangeInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind];
}

export default useChangeInput;
