import React, { useEffect, useState } from 'react';

function FadeInEffect({children}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Set visible to true when component mounts
  }, []);

  return <div className={`fadeIn ${visible ? 'visible' : ''}`}>
    {children}
  </div>;
}

export default FadeInEffect;