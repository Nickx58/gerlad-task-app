import React from "react";
import styled from "styled-components";
import { FaSistrix, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

const MainContainer = styled.div`
  margin: 5px 60px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  border: 0px;
  outline: none;
  font-size: 17px;
  margin-left: 5px;
`;

const IconsContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.3;
`;

function Search({ term, handleChange }) {
  return (
    <MainContainer>
      <div>
        <span>
          <FaSistrix />
        </span>
        <SearchInput
          type="text"
          onChange={handleChange}
          placeholder="Rechercher"
          value={term}
        ></SearchInput>
      </div>
      <IconsContainer>
        <FaCalendarAlt />
        <FiSettings />
        <AiFillQuestionCircle />
        <GrAnnounce />
        <FaUserAlt />
      </IconsContainer>
    </MainContainer>
  );
}

export default Search;
