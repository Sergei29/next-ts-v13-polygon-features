import React, { createContext, useContext, useState } from "react";

type CtxType = {
  state: {
    favorites: (string | number)[];
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      favorites: (string | number)[];
    }>
  >;
};

const AppContext = createContext<CtxType>({
  state: { favorites: [] },
  setState: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const FavoritesProvider = ({ children }: IProps): JSX.Element => {
  const [state, setState] = useState<{ favorites: (string | number)[] }>({
    favorites: [],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useFavorites = () => useContext<CtxType>(AppContext);

export default FavoritesProvider;
