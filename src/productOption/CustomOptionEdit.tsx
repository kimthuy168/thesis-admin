import * as React from "react";
import { useInput } from "react-admin";
import { Button, TextField } from "@material-ui/core";

export const CustomOptionEdit = (props: any) => {
  const {
    input: { name, onChange, ...rest },
  } = useInput(props);
  console.log(props);

  const [options, setOptions] = React.useState<
    { name: string; value: string }[] | null
  >(props.record?.options?.data || null);

  const handleOptionsChange = (
    type: "name" | "value",
    index: number,
    value: string
  ) => {
    if (options) {
      const newOptions = [...options];
      newOptions[index] = {
        ...newOptions[index],
        [type]: value,
      };
      setOptions(newOptions);
    }
  };

  const removeOption = () => {
    if (options) {
      setOptions(options.slice(0, -1));
    }
  };

  const addOption = () => {
    setOptions((prev) => {
      if (prev) return [...prev, { name: "", value: "0" }];
      else return [{ name: "", value: "0" }];
    });
  };

  React.useEffect(() => {
    if (options) {
      onChange({ data: options });
    }
  }, [onChange, options]);

  return (
    <>
      <TextField
        style={{
          width: "50%",
          marginLeft: "20%",
          display: "none",
        }}
        label={props.label}
        onChange={onChange}
        variant="filled"
        multiline
        fullWidth
        {...rest}
      />
      <div style={{ marginTop: "10px" }}>
        <Button variant="outlined" color="primary" onClick={removeOption}>
          Remove
        </Button>
        {options?.map((option, index) => (
          <div
            style={{
              display: "flex",
              width: "60rem",
              gap: "10px",
              margin: "10px 0",
            }}
            key={index}
          >
            <TextField
              label="Name"
              value={option.name}
              onChange={(e) =>
                handleOptionsChange("name", index, e.target.value)
              }
            />
            <TextField
              label="Value"
              value={option.value}
              type="number"
              onChange={(e) =>
                handleOptionsChange("value", index, e.target.value)
              }
            />
          </div>
        ))}
        <Button variant="outlined" color="primary" onClick={addOption}>
          Add Option
        </Button>
      </div>{" "}
    </>
  );
};
