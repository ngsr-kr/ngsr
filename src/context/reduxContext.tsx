"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";

interface ReduxtContextProviderProps {
  children: React.ReactNode;
}

export default function ReduxContextProvider({
  children,
}: ReduxtContextProviderProps) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
