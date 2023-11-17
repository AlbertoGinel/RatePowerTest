import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  StyledPlanetsInfo,
  Container,
  Content,
  Subtitle,
  Span,
  PlanetTitle,
} from "./styles/PlanetsInfo.styled";

interface PlanetData {
  name: string;
  climate: string;
  gravity: string;
}

interface PlanetsInfoProps {
  // Define any props if needed
}

const PlanetsInfo: React.FC<PlanetsInfoProps> = () => {
  const { planetId } = useParams<{ planetId: string }>();
  const [planetData, setPlanetData] = useState<PlanetData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const response = await fetch(
          `https://swapi.dev/api/planets/${planetId}/`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: PlanetData = await response.json();
        setPlanetData(data);
        setLoading(false);
      } catch (error: any) {
        setError((error as Error).message || "An error occurred");
        setLoading(false);
      }
    };

    if (planetId) {
      fetchPlanetData();
    }

    return () => {};
  }, [planetId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!planetData) {
    return <p>No data available for the specified planet ID</p>;
  }

  return (
    <StyledPlanetsInfo>
      <PlanetTitle>{planetData.name}</PlanetTitle>
      <Container>
        <Content>
          <Subtitle>Climate: {planetData.climate}</Subtitle>
          <Span>Gravity: {planetData.gravity}</Span>
        </Content>
      </Container>
    </StyledPlanetsInfo>
  );
};

export default PlanetsInfo;
