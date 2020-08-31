import React from "react";
import styled from "styled-components";
import { BsArrow90DegLeft, BsFillSlashCircleFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const ActionItems = styled.div`
  height: 15%;
  width: 100%;
`;

const Description = styled.div`
  height: 85%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionImage = styled.div``;

const Title = styled.div`
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const DescriptionText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  span {
    font-size: 20px;
    font-weight: bold;
    color: grey;
  }
`;

const UserName = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImage = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
  }
  h3 {
    color: rgb(1, 119, 211);
  }
`;

const Actions = styled.div`
  width: 17%;
  display: flex;
  justify-content: space-between;
  opacity: 0.3;
`;

const PleaseSelect = styled.div`
  color: #777;
`;

function DetailsView({ listItem }) {
  return (
    <MainContainer>
      {listItem ? (
        <>
          <ActionItems>
            <UserName>
              <h3>{listItem.subject}</h3>
              <Actions>
                <BsArrow90DegLeft />
                <RiDeleteBin6Fill />
                <BsFillSlashCircleFill />
                <FaTags />
              </Actions>
            </UserName>
            <UserImage>
              <img src={listItem.img} />
              <h3>View in browser</h3>
            </UserImage>
          </ActionItems>
          <Description>
            <DescriptionImage>
              <img src={listItem.img} />
            </DescriptionImage>
            <Title>
              <h1>{listItem.name}</h1>
            </Title>
            <DescriptionText>
              <span>{listItem.description}</span>
            </DescriptionText>
          </Description>
        </>
      ) : (
        <PleaseSelect>
          <h1>Please select the item</h1>
        </PleaseSelect>
      )}
    </MainContainer>
  );
}

export default DetailsView;
