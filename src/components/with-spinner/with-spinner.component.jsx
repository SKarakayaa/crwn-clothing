import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

import React from "react";

const WithSpinner = (WrappedContainer) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedContainer {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
