import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  font-size: 40px;

  background: #282c34;

  display:grid;
  place-items: center;

  cursor: pointer;
`;

const Cell = ({ _cell, addField }) =>
{
  const cellRef = useRef(null);

  const handleClick = (_event) =>
  {
    addField(_cell, cellRef.current);
  }

  return (
    <Wrapper onClick={(_e) => handleClick(_e)} ref={cellRef} />
  ) 
}

export default Cell