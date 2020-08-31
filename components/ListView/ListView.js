import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import ListItem from "../ListItem/ListItem";

const ListViewContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 45px;
`;

const ListActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    display: flex;
    align-items: center;
  }
`;

const ListContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow: auto;
`;

function ListView(props) {
  return (
    <ListViewContainer>
      <ListActions>
        <h3>
          Prioritaire <FaAngleDown />
        </h3>
        <p>
          <BsPlusCircleFill />
        </p>
      </ListActions>
      <ListContainer>
        {props.lists.map((list) => (
          <ListItem
            handleList={props.handleList}
            listItem={list}
            selected={props.selected}
            key={list.id}
          />
        ))}
      </ListContainer>
    </ListViewContainer>
  );
}

export default ListView;
