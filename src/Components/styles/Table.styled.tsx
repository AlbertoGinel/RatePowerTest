import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 0.25px solid ${({ theme }) => theme.colors.greyMedium};
  }

  th {
    font-weight: 400;
    font-size: 14px;
    border-top: 0.25px solid ${({ theme }) => theme.colors.greyMedium};
    color: ${({ theme }) => theme.colors.greyMedium};
  }

  td {
    height: 50px;
    color: ${({ theme }) => theme.colors.greyDark};
    font-size: 14px;
  }
  .planet-name {
    font-weight: 700;
    font-size: 16px;
  }

  .star-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
