// single selection
// multiple selection

import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    // console.log(getCurrentId);
    let cpyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    // console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultipleSelected(cpyMultiple);
  };

  console.log(selected, multipleSelected);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                )  
              }
              {/* {selected === dataItem.id ||
              multipleSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <h1>No Data Available</h1>
        )}
      </div>
    </div>
  );
};

export default Accordian;
