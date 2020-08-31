import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;

const ListContainer = styled.div`
  margin-top: 40px;
`;

const OptionsContainer = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 20px
`;

const Options = styled.div`
  font-size: 19px;
  padding: 10px 30px 10px 30px;
  background-color: ${(props) => props.isSelected ? 'white' : ''};
  color: ${(props) => props.isSelected ? 'black' : 'white'};
  font-weight: bold;
  border-radius: 100px 0px 0px 100px;
`;

function LeftBar() {
  return (
    <MainContainer>
      <h3>Outlook</h3>
      <ListContainer>
        <span>Dossiers</span>
        <OptionsContainer>
          {[
            "Boite de reception",
            "Courrier indesirables",
            "Brouillions",
            "Elements envoyes",
            "Elements supprimes",
            "Archives",
            "Notes",
          ].map((e, index) => {
            return <Options isSelected={index === 0} key={index}>{e}</Options>;
          })}
        </OptionsContainer>
      </ListContainer>
    </MainContainer>
  );
}

export default LeftBar;
