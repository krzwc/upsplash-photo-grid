import React from "react";
import TextField from "@material-ui/core/TextField";

type onChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default ({ onChange }: onChangeProps) => {
  return (
    <TextField
      id="outlined-full-width"
      label="Search images of:"
      style={{ margin: 1 }}
      placeholder="Search..."
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true
      }}
      onChange={onChange}
    />
  );
};
