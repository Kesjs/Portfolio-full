// Loader.jsx
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="loader-container">
      <DotLottieReact
        src="https://lottie.host/f1f33b25-db1f-47d0-812d-69bd3748eda7/Zn9UZvOekr.lottie"
        loop
        autoplay
        style={{ width: 150, height: 150 }} // Tu peux ajuster la taille ici
      />
    </div>
  );
};

export default Loader;
