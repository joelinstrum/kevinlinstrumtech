import { createSlice } from "@reduxjs/toolkit";
import { TImage } from "types/image";

interface GallerySliceState {
  gallery: TImage[];
  currentIndex: number;
}

const initialState: GallerySliceState = {
  gallery: [],
  currentIndex: 0,
};

const gallerySlice = createSlice({
  name: "gallerySlice",
  initialState,
  reducers: {
    setGallery: (state, action) => {
      state.gallery = action.payload;
    },
    setIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setGallery, setIndex } = gallerySlice.actions;
export default gallerySlice.reducer;
