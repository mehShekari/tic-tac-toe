import React, { useState, useContext, useRef } from "react";
import { checkColumns, checkCross, checkRows } from "../utils/helper";

const TemplateContext = React.createContext({});

export const useTemplateContext = () =>
{
  return useContext(TemplateContext);
}

const Provider = ({ children }) =>
{
  // initalize state's
  const turn = useRef(false);
  const done = useRef(false);
  const winner = useRef("");

  const craeteTemplate = () =>
  {
    const counter = [];
    for(let i = 0; i < 3 * 3; i++)
    {
      let obj = {};
      obj.id = i + 1;
      obj.type = null;

      counter[i] = obj;
    };
    return counter;
  }
  const [temp, setTemp] = useState(() =>
  {
    return craeteTemplate();
  });

  // add to board and check for changes

  const addField = (_cell, _ref) =>
  {
    if(done.current) return;
    let fakeTemp = [...temp];
    let i = temp.findIndex((_temp) =>
    {
      return _temp.id === _cell.id;
    })

    if(!fakeTemp[i].type)
    {
      // true means circle and false means cross
      fakeTemp[i].type = turn.current ? "circle" : "cross";
      _ref.textContent = turn.current ? "o" : "×";
      turn.current = !turn.current;
    }
    
    if(checkRows(fakeTemp, "cross") || checkColumns(fakeTemp, "cross") || checkCross(fakeTemp, "cross"))
    {
      done.current = true;
      winner.current = "cross";
    }

    if(checkRows(fakeTemp, "circle") || checkColumns(fakeTemp, "circle") || checkCross(fakeTemp, "circle"))
    {
      done.current = true;
      winner.current = "circle";
    }

    setTemp([...fakeTemp]);
  };

  const resetGame = () =>
  {

  }
  
  // set data's to context api
  const value = {};
  value.temp = temp;
  value.addField = addField;
  value.turn = turn;
  value.winner = winner.current;

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  )
}

export default  Provider;