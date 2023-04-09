import {useEffect, useState} from "react";

function setBackground(image) {
  const [screenSize, setScreenSize] = useState('desktop');
  const [initValue, setInitValue] = useState(true);

  if (initValue === true) detectScreenSize();

  useEffect(() => {
    window.addEventListener('resize', () => {
      detectScreenSize()
    });
  }, []);

  function detectScreenSize() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setScreenSize('mobile');
    } else if (window.matchMedia('(min-width:769px) and (max-width: 1024px)').matches) {
      setScreenSize('tablet');
    } else {
      setScreenSize('desktop');
    }
    setInitValue(false);
  }

  document.body.style.setProperty('--img-background-image', `url('../assets/` + image + `/background-` + image + `-` + screenSize + `.jpg')`)
}

export default setBackground;