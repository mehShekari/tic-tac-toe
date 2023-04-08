import React from "react";

import styled from "styled-components";

import Components from "../components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
`;

const Experience = () =>
{
  return (
    <Wrapper>
      <Components.Container />
    </Wrapper>
  )
}

export default Experience;