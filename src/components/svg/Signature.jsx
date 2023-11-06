import { useEffect, useRef, useState } from "react";

const Signature = ({pathClass}) => {
  const signRef = useRef(null);
  const [signLen,setSignLen] = useState(0);
  useEffect(() => {
    const sign = signRef.current;
    if (sign) {
      setSignLen(sign.getTotalLength());
    }
  }, []);
  return (
    <svg
      width="214"
      height="64"
      viewBox="0 0 214 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClass}
        ref={signRef}
        d="M2 20.1433C2.3391 23.8564 6.9165 26.451 13.7021 26.9773C19.2519 27.4078 26.1224 27.4396 31.6454 26.8997C38.0826 26.2703 42.9901 24.5514 48.5248 22.7837C50.5703 22.1305 52.6355 21.5168 54.6596 20.8423C55.7232 20.4878 59.4154 20.1433 58.1702 20.1433C56.0666 20.1433 53.6005 20.2213 52.4255 21.347C50.9051 22.8038 46.0398 24.7661 43.1347 25.0553C41.636 25.2045 36.9753 25.3728 35.9716 25.8124C34.5487 26.4357 32.1995 25.9759 30.4397 26.589C29.8751 26.7858 28.1644 26.6389 27.8865 26.8997C27.0712 27.6649 27.5528 29.0951 27.4965 29.9284C27.3903 31.4973 27.0369 33.0583 26.8936 34.6268C26.4706 39.2589 26.2553 43.8711 26.2553 48.5084C26.2553 49.3846 25.1807 53.0267 26.539 53.6921C32.6752 56.6981 49.0679 49.05 43.7021 47.0523C38.0041 44.9309 37.7447 51.9847 37.7447 53.6921C37.7447 55.1452 40.5799 54.7405 42.5319 54.7405C45.7737 54.7405 47.1187 54.1989 49.3759 52.9155C51.1508 51.9064 55.4651 49.8225 55.617 48.4501C55.7978 46.817 59.5006 47.1675 60.4043 48.256C60.9312 48.8906 62.0251 49.032 60.4043 49.1685C58.1967 49.3544 57.8523 50.6025 56.2553 51.1682C55.4373 51.458 55.617 51.7815 55.617 52.2943C55.617 53.2628 56.9599 52.9932 58.4539 52.9932C60.2118 52.9932 62.6383 51.4348 62.6383 50.4693C62.6383 48.2444 61.9525 48.5952 62.6738 50.3722C63.7081 52.9205 72.6605 52.0856 75.0496 50.8964C77.8516 49.5018 79.0107 51.2335 79.7305 52.3719C80.1158 52.9813 80.5106 53.3758 80.5106 54.0416C80.5106 55.209 81.8755 52.7921 82.1064 52.469C83.0192 51.1919 84.9269 49.2306 88.1702 50.2751C89.9197 50.8386 87.4449 55.3836 91.2908 52.4884C93.0244 51.1833 94.5647 50.4924 96.1135 52.2943C96.8102 53.1049 97.6589 56.3839 99.3759 55.3812C100.992 54.4372 112.13 43.0106 113.844 44.606C115.527 46.1721 109.621 44.6536 109.27 45.5185C108.508 47.3946 109.234 49.8075 109.234 51.7507C109.234 55.1449 113.064 49.1325 113.064 47.8289C113.064 47.5985 112.774 45.7965 113.206 45.7321C115.414 45.4024 117.171 53.6324 117.496 54.4493C117.942 55.5661 117.614 57.5293 119.908 58.0411C126.001 59.4003 129.99 57.5892 133.348 54.7405C146.725 43.3901 146.51 29.8265 141.362 16.9981C139.492 12.3396 136.354 5.20335 128.099 2.39817C124.932 1.32175 124.025 2.34376 123.95 4.0096C123.494 14.1262 122.087 24.5913 124.199 34.6656C125.309 39.9641 127.836 45.4232 130.794 50.5081C131.953 52.4997 133.743 54.6951 134.092 56.7985C134.257 57.7939 133.931 58.4712 134.163 57.0121C134.464 55.1189 135.956 53.184 138.738 52.0225C140.193 51.4148 144.737 48.279 147.248 49.6539C148.928 50.5736 148.17 52.8678 148.17 54.0416C148.17 55.4031 147.248 57.4771 150.227 58.0799C155.287 59.1036 158.383 57.8329 158.383 55.09C158.383 53.2717 156.674 52.9932 153.418 52.9932C150.983 52.9932 152 55.2485 152 56.2937C152 57.9751 163.297 58.3933 166.184 58.2352C168.908 58.0861 170.408 56.2523 171.929 55.2453C172.425 54.9168 174.599 53.1062 175.369 53.0126C180.35 52.4066 175.953 53.7949 175.014 54.5658C173.972 55.4218 174.34 56.5491 174.34 57.5363C174.34 59.0836 176.894 57.8217 176.894 56.6626C176.894 54.9951 177.134 54.6252 178.028 56.2161C178.913 57.7906 179.867 58.7062 181.362 60.1379C183.151 61.8525 185.483 59.7476 186.468 59.0118C188.365 57.5959 189.308 54.7405 193.206 54.7405C196.668 54.7405 193.246 54.4636 192.355 55.4395C191.064 56.8528 191.574 58.5633 191.574 60.1184C191.574 63.1214 198.49 61.9802 199.872 59.9825C204.092 53.8866 199.625 47.1423 196.255 41.3055C192.775 35.2773 188.034 29.4744 182.035 24.0651C181.726 23.7859 177.801 20.2326 177.567 22.0266C177.034 26.1145 179.441 29.9426 182.355 33.6172C188.407 41.2508 192.804 49.3616 201.645 56.1384C204.911 58.6419 205.253 61.3804 212 61.3804"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={signLen}
        strokeDashoffset={signLen}
      />
    </svg>
  );
};

export default Signature;
