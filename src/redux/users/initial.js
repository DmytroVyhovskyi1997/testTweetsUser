export const handlePending = state => {
    state.isLoading = true;
  };


  export const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
  };

  export const handleFulfilled = (state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    state.items = payload;
  };