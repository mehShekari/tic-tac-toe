import React from 'react';

import styled from "styled-components";

import Players from "../players";
import Template from "../template";
import { useTemplateContext } from "../../context/template";

const Wrapper = styled.div`
  width: 400px;
  height: 400px;

  h1
  {
    span
    {
      color: #dd8787;
      display: block;
      height: 70px;
    }
  }
`;

const Container = () =>
{

  const { winner = "" }= useTemplateContext();

  return (
    <Wrapper>
      {winner.length > 1 && <h1>winner is <span> {winner}</span></h1>}
      <Players />
      <Template />
    </Wrapper>
  )
}

export default Container;