import React from 'react';

import styled from "styled-components";
import Cell from "../cell";

import { useTemplateContext } from "../../context/template";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 15%);

  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  background-color: #458879;
`;

const Template = () =>
{
  const { temp, addField } = useTemplateContext();

  const cellRenderer = () =>
  {
    return temp.map((_cell) =>
    {
      return <Cell 
        _cell={_cell}
        key={_cell.id}
        addField={addField}
      />
    })
  }

  return (
    <Wrapper>
      {cellRenderer()}
    </Wrapper>
  )
}

export default Template;