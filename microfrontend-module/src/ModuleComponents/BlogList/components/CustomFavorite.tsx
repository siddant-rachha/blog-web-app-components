import React from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export const CustomFavorite = ({
  show,
  fill,
  handleClick,
}: {
  show: boolean;
  fill: boolean;
  handleClick: () => void;
}) => {
  return (
    <>
      {show ? (
        fill ? (
          <Favorite
            sx={{
              color: 'red',
              position: 'absolute',
              right: 10,
              top: 10,
              cursor: 'pointer',
            }}
            onClick={() => handleClick()}
          />
        ) : (
          <FavoriteBorder
            sx={{
              position: 'absolute',
              right: 10,
              top: 10,
              cursor: 'pointer',
            }}
            onClick={() => handleClick()}
          />
        )
      ) : null}
    </>
  );
};
