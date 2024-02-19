import { createSlice } from "@reduxjs/toolkit";

interface QrCode {
  isModal: boolean;
}

const initialState: QrCode = {
  isModal: false,
};

const QrCodeSlice = createSlice({
  name: "qrCode",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export default QrCodeSlice.reducer;

export const { openModal, closeModal } = QrCodeSlice.actions;
