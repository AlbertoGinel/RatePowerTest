import React from "react";
import styled from "styled-components";
import CloseCross from "./CloseCross";

interface CardProps {
  url: string;
  name: string;
  terrain: string;
  climate: string;
  gravity: string;
  onClose: (url: string, name: string) => void;
}

const CardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 40px;
`;

const CardHeader = styled.div``;

const CardTop = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const CardSubtitle = styled.span`
  margin: 0;
  font-size: 14px;
  padding: 10px;
  &.terrain {
    color: ${({ theme }) => theme.colors.greyMedium};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin: 10px 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavCard: React.FC<CardProps> = (props) => {
  const { url, name, terrain, climate, gravity, onClose } = props;

  const handleCardClose = () => {
    onClose(url, name);
  };

  return (
    <CardContainer key={url}>
      <CardHeader>
        <CardTop>
          <CardTitle>{name}</CardTitle>
          <div onClick={() => handleCardClose()}>
            <CloseCross />
          </div>
        </CardTop>
        <CardSubtitle className="terrain">{terrain}</CardSubtitle>
      </CardHeader>
      <CardImage src={"/SitePreview.png"} alt="Planet Image" />
      <CardContent>
        <CardSubtitle>Climate: {climate}</CardSubtitle>
        <CardSubtitle>Gravity: {gravity}</CardSubtitle>
      </CardContent>
    </CardContainer>
  );
};

export default FavCard;
