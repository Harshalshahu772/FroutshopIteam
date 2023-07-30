import "./AddFroutApp.css";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import AddListItem from "./AddListItem";
const AddFroutApp = () => {
  const [valueItem, setValueItem] = useState("");
  const [listItem, setListItem] = useState<string[]>([]);
  const inputItem = (event: any) => {
    setValueItem(event.target.value);
  };
  const submitItemValue = () => {
    setListItem((oldValue) => {
      return [...oldValue, valueItem];
    });
    setValueItem("");
  };
  return (
    <>
      <div className="mainconatnair">
        <div className="container">
          <TextField
            id="standard-basic"
            label="write food item"
            variant="standard"
            value={valueItem}
            onChange={inputItem}
          />
          <Button className="btnColor" onClick={submitItemValue}>
            <AddIcon />
          </Button>

          <div className="container">
            <ul className="no-bullets">
              {listItem.map((value: any ,index) => {
                return <AddListItem key={index} text={value}/>;
              })}
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddFroutApp;
