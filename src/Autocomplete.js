import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";

//autocomplete components
import { Stack, TextField, Autocomplete } from "@mui/material";

const MyAutocomplete = () => {
  const [results, setResults] = useState([]);
  const { state, dispatch } = useStateValue();
  function focusInput() {
    dispatch({ type: "focus input", payload: true });
  }
  function blurInput() {
    dispatch({ type: "focus input", payload: false });
  }

  async function getData(userInput) {
    const response = await fetch(
      `https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix=${userInput}`
    );
    const data = await response.json();
    const suggestions = data.suggestions.map((item) => item.value);
    setResults(suggestions);
    console.log(data.suggestions.map((item) => item.value));
  }

  function onInputChange(event, value, reason) {
    if (value) {
      getData(value);
    } else {
      setResults([]);
    }
  }
  //   useEffect(() => {
  //     getData("iph");
  //   }, []);

  return (
    <div>
      <Autocomplete
        onFocus={focusInput}
        onBlur={blurInput}
        sx={{
          //   marginTop: 10,
          //   width: 500,
          //   height: "2rem",

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "10px",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            // border: "5px solid #fcb12d",
            // borderRadius: "10px",
            // borderTopRightRadius: "0",
            // borderBottomRightRadius: "0",
            // outline: "none",
          },

          "& .MuiFormControl-root": {
            // border: "5px solid orange",
            // borderRadius: "10px",
          },
          " & .MuiInputBase-input": {
            height: "0.85rem",
          },
        }}
        className="autocomplete"
        id="autocomplete"
        options={results}
        // getOptionLabel={(option) =>
        //   `${option.name.common}, ${option.continents} `
        // }
        noOptionsText={"no available suggestions"}
        renderInput={(params) => <TextField {...params} />}
        onInputChange={onInputChange}
      ></Autocomplete>
    </div>
  );
};

export default MyAutocomplete;
