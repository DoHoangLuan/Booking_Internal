import { TextField, TextFieldProps } from "@mui/material";
import { Children } from "react";

type InputProps = TextFieldProps & {
  // labelName?: string;
  // type?: string;
  // err?: string | null;
};

const MyInput: React.FC<InputProps> = ({
  label,
  type,
  value,
  name,
  onChange,
  placeholder,
  className,
  error,
  ...rest
}) => {
  return (
    <div>
      <TextField
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        error={error}
        className={`w-[300px] ${className}`}
        {...rest}
      />
    </div>
  );
};
export default MyInput;
