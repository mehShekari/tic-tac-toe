import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 85%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-bottom: 10px;

  .wrapper
  {
    width: 40%;
    height: 30px;

    background-color: #458879;

    border-radius: 7px;
    padding: 0px 10px;

    display: flex;
    justify-content: space-between;
  }
`;

const Players = ({ _crossScore = "-", _circleScore = "-" }) =>
{
  return (
    <Wrapper>
      <div className="wrapper cross_wrapper active">
        <span>cross:</span> <span>{_crossScore}</span>
      </div>

      <div className="wrapper circle_wrapper">
        <span>cirlce:</span> <span>{_circleScore}</span>
      </div>
    </Wrapper>   
  )
}

export default Players;