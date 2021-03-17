import { FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import { onChangeProps } from "./types";

const MUITextField: FunctionComponent<onChangeProps> = ({ onChange }) => {
  return (
    <TextField
      id="outlined-full-width"
      label="Search images of:"
      className="max-w-screen-md"
      placeholder="Search..."
      fullWidth
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={onChange}
    />
  );
};

export default MUITextField;
