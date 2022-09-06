import { useState } from 'react';

const useError = () => {
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showTryAgainBtn, setShowTryAgainBtn] = useState<boolean>(false);

  return { showErrorMessage, setShowErrorMessage, showTryAgainBtn, setShowTryAgainBtn };
};

export default useError;
