"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import AllComponents from "./allComponent";

store.subscribe(() => {
  console.log("pageredux:- ", store.getState());
});

export default function Home() {
  return (
    <Provider store={store}>
      <AllComponents />
    </Provider>
  );
}
