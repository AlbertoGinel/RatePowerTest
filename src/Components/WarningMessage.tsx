import React from "react";
import styled from "styled-components";
import CloseCross from "./CloseCross";

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 9998;
`;

const WarningCard = styled.div`
  position: fixed;
  //height: 135px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  z-index: 9999;
`;

const WarningTopBar = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const WarningText = styled.span`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.red};
  padding-left: 20px;
`;

const WarningContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  align-self: flex-end;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  padding: 8px 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 400;
  size: 14px;
  &.redButton {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    size: 12px;
  }
`;

const StyledCloseCross = styled.div`
  svg {
    width: 16px;
    height: 16px;
  }
`;

const WarningTitle = styled.span``;

interface WarningMessageProps {
  onResponse: (response: boolean) => void;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ onResponse }) => {
  const handleResponse = (response: boolean) => {
    onResponse(response);
  };
  return (
    <>
      <BlurOverlay />
      <WarningCard>
        <WarningTopBar>
          <WarningText>Remove favorite</WarningText>
          <StyledCloseCross onClick={() => handleResponse(false)}>
            <CloseCross />
          </StyledCloseCross>
        </WarningTopBar>
        <WarningContent>
          <WarningTitle>Planet will be removed from favorites</WarningTitle>
          <ButtonContainer>
            <StyledButton onClick={() => handleResponse(false)}>
              Cancel
            </StyledButton>
            <StyledButton
              className="redButton"
              onClick={() => handleResponse(true)}
            >
              Remove
            </StyledButton>
          </ButtonContainer>
        </WarningContent>
      </WarningCard>
    </>
  );
};

export default WarningMessage;
