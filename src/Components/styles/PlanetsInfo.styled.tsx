import styled from "styled-components";

export const StyledPlanetsInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #f2f2f2;
  width: 220px;
  height: 108px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  margin: 0 0px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #333333;
`;

export const PlanetTitle = styled.h2`
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: white;
`;
