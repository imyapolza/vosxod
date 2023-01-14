import React from "react";

interface MainContextType {
  setConnectionLostPage: (arg: boolean) => void;
}

const initalContext = {
  setConnectionLostPage: () => null,
};

const MainContext = React.createContext<MainContextType>(initalContext);

export default MainContext;
