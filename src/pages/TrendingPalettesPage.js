import { useState, useEffect } from "react";
import { ColorBox } from "../components/ColorBox.js";
import styled from "styled-components";
import { getTrendingPalettes } from "../services/palettes.js";

export default function TrendingPalettesPage() {
  const [trendingPalettes, setTrendingPalettes] = useState([]);
  useEffect(() => {
    const loadTrendingPalettes = async () => {
      try {
        const data = await getTrendingPalettes();
        setTrendingPalettes(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadTrendingPalettes();
  }, []);
  return (
    <>
      {trendingPalettes ? (
        trendingPalettes.map((palette) => (
          <section key={palette._id}>
            <PaletteTitle>
              {palette.name}{" "}
              <HighlightSpan>by {palette.user.nickName}</HighlightSpan>
            </PaletteTitle>

            <Flex>
              {palette.colors.map((color) => {
                return (
                  <ColorBox key={color.id} color={color.code} readOnly={true} />
                );
              })}
            </Flex>
          </section>
        ))
      ) : (
        <p>No trending palettes yet!</p>
      )}
    </>
  );
}

const HighlightSpan = styled.span`
  color: var(--color-highlight);
`;

const PaletteTitle = styled.h3`
  text-align: left;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: 20px;
`;
