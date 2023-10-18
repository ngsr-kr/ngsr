"use client";

import { setTitleModal } from "@/redux/slice/layoutSilce";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxTest() {
  const dispatch = useDispatch();
  const { title, content, isShow } = useSelector(
    (state: RootState) => state.layout.modal
  );

  const handleClickButton = () => {
    dispatch(setTitleModal("변경됨!"));
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={handleClickButton}>제목 바꾸기</button>
    </>
  );
}
