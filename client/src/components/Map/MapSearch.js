import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styled from "styled-components";

const MapSearch = ({ panTo }) => {
  const inputStyle = {
    padding: "14px",
    width: "300px",
    textAlign: "center",
    border: "solid 1px #183A1D",
    backgroundColor: "#faf9f0",
  };
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 45.52984, lng: () => -73.62733 },
      radius: 200 * 1000,
    },
  });
  return (
    <Combobox
      onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
          const results = await getGeocode({ address });

          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log("error");
        }
      }}
    >
      <Input
        style={inputStyle}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        placeholder="Enter an address"
      />

      <ComboboxPopover>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <ComboboxOption key={id} value={description} />
          ))}
      </ComboboxPopover>
    </Combobox>
  );
};

export default MapSearch;

const Input = styled(ComboboxInput)`
  &::placeholder {
    color: #183a1d;
  }
  &:focus {
    outline: none;
    border: solid 2px #40916c;
  }
`;
