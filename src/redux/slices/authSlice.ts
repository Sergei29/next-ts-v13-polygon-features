import { createSlice } from "@reduxjs/toolkit";
import { AppState, AuthState } from "@/types";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice<any, any>({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state: AuthState, action: Record<string, any>) {
      state.authState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state: AppState, action: Record<string, any>) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
