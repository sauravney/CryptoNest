import { configureStore } from "@reduxjs/toolkit";
import { callApi } from "../services/CallApi";

export default configureStore({
  reducer: { [callApi.reducerPath]: callApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(callApi.middleware),
});
