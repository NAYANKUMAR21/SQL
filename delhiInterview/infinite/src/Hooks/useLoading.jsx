import React, { useState } from 'react';

const useLoading = (boolean) => {
  const [loading, setLoading] = useState(boolean);
  return [loading, setLoading];
};

export default useLoading;
