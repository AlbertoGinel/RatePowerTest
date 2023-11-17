import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlanetsInfo from "./PlanetsInfo";
import { StyledPlanets } from "./styles/Planets.styled";
import { StyledTable } from "./styles/Table.styled";
import PlanetTableRow from "./planetTableRow";
import styled from "styled-components";

interface Planet {
  name: string;
  climate: string;
  diameter: string;
  population: string;
  url: string;
}

interface PageData {
  results: Planet[];
  next: string | null;
}

const PlanetWrap = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const PlanetsTable = styled.div<{ showMargin: boolean }>`
  flex: 1;
  overflow-y: auto;
  margin-left: 240px;
  margin-right: ${(props) => (props.showMargin ? "300px" : "0")};
  transition: margin-left 0.3s;
`;

const PlanetsInfoContainer = styled.div`
  width: 300px;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

const SpanTitle = styled.span`
  font-weight: 400;
  padding-left: 10px;
  font-size: 18px;
`;

const FavHead = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Planets() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { planetId } = useParams<{ planetId?: string }>();

  const fetchData = async (url: string | null) => {
    try {
      if (url !== null) {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: PageData = await response.json();
        fetchData(data.next);
        setPlanets((previousPlanets) => [...previousPlanets, ...data.results]);
      } else {
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.message + ` at ${url}` || "An error occurred");
    }
  };

  useEffect(() => {
    fetchData("https://swapi.dev/api/planets");
  }, []);

  return (
    <PlanetWrap>
      <PlanetsTable showMargin={!!planetId}>
        <StyledPlanets>
          <div>
            <SpanTitle>Planets</SpanTitle>
          </div>

          {error && <p>Error: {error}</p>}

          {planets.length > 0 && (
            <StyledTable>
              <thead>
                <tr>
                  <th>
                    <span>Name</span>
                  </th>
                  <th>
                    <span>Climate</span>
                  </th>
                  <th>
                    <span>Diameter</span>
                  </th>
                  <th>
                    <span>Population</span>
                  </th>
                  <FavHead style={{}}>
                    <span>Favorite</span>
                  </FavHead>
                </tr>
              </thead>
              <tbody>
                {planets.map((planet) => (
                  <PlanetTableRow {...planet} key={planet.name} />
                ))}
              </tbody>
            </StyledTable>
          )}

          {loading && <p>Loading...</p>}
        </StyledPlanets>
      </PlanetsTable>
      {planetId && (
        <PlanetsInfoContainer>
          <PlanetsInfo />
        </PlanetsInfoContainer>
      )}
    </PlanetWrap>
  );
}

export default Planets;
