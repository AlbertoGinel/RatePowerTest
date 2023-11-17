import React from "react";
import FavStar from "./FavStar";
import { useFavStore } from "../Store/store";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Planet {
  url: string;
  name: string;
  climate: string;
  diameter: string;
  population: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PlanetTableRow: React.FC<Planet> = (props) => {
  const { url, name, climate, diameter, population } = props;
  const favList = useFavStore((state) => state.planetFavs);
  const addFav = useFavStore((state) => state.addFav);
  const delFav = useFavStore((state) => state.delFav);

  const formatNumber = (value: string): string => {
    const numericValue = parseFloat(value);

    if (numericValue >= 1000000) {
      return (numericValue / 1000000).toFixed(1) + "M";
    } else if (numericValue >= 1000) {
      return (numericValue / 1000).toFixed(1) + "K";
    } else {
      return value.toString();
    }
  };

  const handleTdClickFav = () => {
    const extractedNumber = extractNumberFromUrl(url);

    if (extractedNumber) {
      const isFav = favList.includes(extractedNumber);

      if (isFav) {
        delFav(extractedNumber);
      } else {
        addFav(extractedNumber);
      }
    }
  };

  function extractNumberFromUrl(url: string | null): string {
    if (url === null) {
      return "";
    }

    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : "";
  }

  return (
    <tr key={url}>
      <td className="planet-name">
        <StyledLink to={`/planets/${extractNumberFromUrl(url)}`}>
          {name}
        </StyledLink>
      </td>
      <td>{climate}</td>
      <td>{formatNumber(diameter)}</td>
      <td>{formatNumber(population)}</td>
      <td className="star-container" onClick={handleTdClickFav}>
        <FavStar full={favList.includes(extractNumberFromUrl(url))} />
      </td>
    </tr>
  );
};

export default PlanetTableRow;
