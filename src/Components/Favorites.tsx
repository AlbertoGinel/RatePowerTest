import { useState, useEffect } from "react";
import styled from "styled-components";
import { useFavStore } from "../Store/store";
import FavCard from "./FavCard";
import WarningMessage from "./WarningMessage";

interface FavPlanet {
  url: string;
  name: string;
  terrain: string;
  climate: string;
  gravity: string;
  onClose: () => void;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin: 20px;
`;

const WrapFavorites = styled.div`
  margin-left: 260px;
  width: calc(100% - 300px);
  height: 100vh;
  overflow-y: auto;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88%;
  overflow: hidden;
`;

const SpanTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
`;

const Favorites = () => {
  const favList = useFavStore((state) => state.planetFavs);
  const [favData, setFavData] = useState<FavPlanet[]>([]);
  const [currentRemove, setCurrentRemove] = useState<string>("0");
  const [showWarning, setShowWarning] = useState(false);
  const delFav = useFavStore((state) => state.delFav);

  function extractNumberFromUrl(url: string | null): string {
    if (url === null) {
      return "";
    }
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : "";
  }

  const handleClose = (url: string) => {
    setShowWarning(true);
    console.log(extractNumberFromUrl(url));
    setCurrentRemove(extractNumberFromUrl(url));
  };

  const handleWarningResponse = (response: boolean) => {
    if (response) {
      delFav(currentRemove);
      console.log("delFav", currentRemove);
    }
    console.log(response);
    setShowWarning(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const promises = favList.map(async (url) => {
        const response = await fetch("https://swapi.dev/api/planets/" + url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${url}`);
        }
        return (await response.json()) as FavPlanet; // Explicit type assertion
      });

      try {
        const data = await Promise.all(promises);
        setFavData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [favList]);

  return (
    <WrapFavorites>
      {showWarning && <WarningMessage onResponse={handleWarningResponse} />}
      <SpanTitle>Favorites</SpanTitle>
      <>
        {delFav.length === 0 ? (
          <Frame>
            <span>No favorites</span>
          </Frame>
        ) : (
          <GridContainer>
            {favData.map((fav) => (
              <FavCard
                key={fav.url}
                {...fav}
                onClose={() => handleClose(fav.url)}
              />
            ))}
          </GridContainer>
        )}
      </>
    </WrapFavorites>
  );
};

export default Favorites;
