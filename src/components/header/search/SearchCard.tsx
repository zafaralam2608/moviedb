import { Card, CardActionArea, CardHeader, CardMedia } from "@mui/material";
import { IMAGE_URL_W185 } from "api";
import { ISearchMultiResults } from "interfaces/search";
import React, { useState } from "react";

const FALLBACK_IMAGE = `${process.env.PUBLIC_URL}/imagenotfound.png`;

export interface SearchCardProps {
  option: ISearchMultiResults;
}

export const SearchCard: React.FC<SearchCardProps> = ({ option }) => {
  const [imgSrc, setImgSrc] = useState<string>(
    option.poster_path
      ? `${IMAGE_URL_W185}/${option.poster_path}`
      : FALLBACK_IMAGE,
  );

  return (
    <Card>
      <CardActionArea
        sx={{ display: "flex", justifyContent: "left" }}
        href={`#/movie/${option.id}`}
      >
        <CardMedia
          component="img"
          sx={{ height: "75px", width: "50px" }}
          src={imgSrc}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          alt="404"
        />
        <CardHeader
          title={option.original_title}
          subheader={option.release_date}
        />
      </CardActionArea>
    </Card>
  );
};
