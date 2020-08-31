import React from "react";
import styled from "styled-components";
import { FaRegFrown } from "react-icons/fa";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  heigth: 50%;
  width: 50%;
  padding: 40px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: #777;
`;

const SearchError = () => {
  return (
    <MainContainer>
      <h1> No Result Found</h1>
      <FaRegFrown />
    </MainContainer>
  );
};

export default SearchError;
