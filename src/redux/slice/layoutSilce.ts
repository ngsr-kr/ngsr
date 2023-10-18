import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  modal: {
    isShow: boolean;
    content: any;
    title: string;
  };
}

const initialState: LayoutState = {
  modal: {
    isShow: false,
    content: "",
    title: "default title",
  },
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsShowModal(state, action: PayloadAction<boolean>) {
      state.modal.isShow = action.payload;
    },

    setContentModal(state, action: PayloadAction<any>) {
      state.modal.content = action.payload;
    },

    setTitleModal(state, action: PayloadAction<string>) {
      state.modal.title = action.payload;
    },

    resetModal(state) {
      state.modal.isShow = false;
      state.modal.content = "";
    },
  },
});

export const { setIsShowModal, setContentModal, setTitleModal, resetModal } =
  layoutSlice.actions;
export default layoutSlice.reducer;
