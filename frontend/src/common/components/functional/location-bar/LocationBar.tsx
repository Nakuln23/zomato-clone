import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface LocationBarProps {
  options?: any;
}

export default function LocationBar(props: any) {
  const { options } = props;
  // if (!options) return;
  return (
    <Autocomplete
      id='combo-box-demo'
      options={[]}
      freeSolo
      // defaultValue='ggg'
      value={options?.length ? options[0].title : null}
      // getOptionLabel={(option: any) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <div>Popular Locations</div>
        </React.Fragment>
      )}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label='Combo box' variant='outlined' />
      )}
    />
  );
}
