import { IQuestionProps } from "models/interfaces/Questions.interfaces";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loading: FC<{ goToPage: () => void }> = ({ goToPage }): JSX.Element => {
  /** States */
  const [width, setWidth] = useState<number>(0);

  /** Effects */
  useEffect(() => {
    setTimeout(() => {
      if (width < 500) {
        setWidth(width + 50);
      } else if (width === 500) {
        goToPage();
      }
    }, 1000);
  }, [width]);

  return (
    <svg viewBox="0 0 1790.46 1103.7" height="100vh">
      <defs>
        <style>
          {`.cls-1 {
                    fill: none;
                }

                .cls-2 {
                    font-family: Helvetica-Bold, Helvetica;
                    font-size: 48.76px;
                    fill: #0a1318;
                }

                .cls-3 {
                    clip-path: url(#clippath);
                }

                .cls-4 {
                    mix-blend-mode: overlay;
                    opacity: .56;
                }

                .cls-5 {
                    fill: #693d2c;
                }

                .cls-6 {
                    fill: #f3d9b5;
                }

                .cls-7 {
                    fill: #fff;
                }

                .cls-8 {
                    fill: #e8e5d1;
                }

                .cls-9 {
                    fill: #fbf8ec;
                }

                .cls-10 {
                    fill: #900;
                }

                .cls-11 {
                    fill: #7d4115;
                }

                .cls-12 {
                    fill: #9f9aa1;
                }
                .cls-122 {
                  fill: #9f9aa1;
                  width: ${width}px;
              }

                .cls-13 {
                    fill: #304353;
                }

                .cls-14 {
                    fill: #333;
                }

                .cls-15 {
                    fill: #b87d61;
                }

                .cls-16 {
                    fill: #865038;
                }

                .cls-17 {
                    fill: #bca66d;
                }

                .cls-18 {
                    fill: #b14a5d;
                }

                .cls-19 {
                    fill: #b38b4e;
                }

                .cls-20 {
                    fill: #ccc;
                }

                .cls-21 {
                    fill: #d38792;
                }

                .cls-22 {
                    fill: #231f20;
                }

                .cls-23 {
                    fill: #1b2933;
                }

                .cls-24 {
                    fill: #534741;
                }

                .cls-25 {
                    fill: #79757a;
                }

                .cls-26 {
                    fill: #82916b;
                }

                .cls-27 {
                    fill: #4d4d4d;
                }

                .cls-28 {
                    fill: #46080d;
                }

               

                .cls-30 {
                    isolation: isolate;
                }

                .cls-31 {
                    fill: url(#Degradado_sin_nombre_17-2);
                }

                .cls-32 {
                    fill: url(#Degradado_sin_nombre_17);
                    filter: url(#drop-shadow-1);
                }`}
        </style>
        <clipPath id="clippath">
          <rect className="cls-1" width="1790.46" height="1103.7" />
        </clipPath>
        <linearGradient
          id="Degradado_sin_nombre_17"
          x1="1126.26"
          y1="842.59"
          x2="683.62"
          y2="728.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#900" />
          <stop offset="1" stopColor="#870303" />
        </linearGradient>
        <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
          <feOffset dx="3.96" dy="2.64" />
          <feGaussianBlur result="blur" stdDeviation="1.32" />
          <feFlood floodColor="#000" floodOpacity=".24" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="Degradado_sin_nombre_17-2"
          x1="1120.6"
          y1="841.12"
          x2="688.81"
          y2="729.49"
          xlinkHref="#Degradado_sin_nombre_17"
        />
        <clipPath id="clippath-1">
          <rect
            className="cls-1"
            x="639.64"
            y="755.21"
            width="245.94"
            height="54.18"
          />
        </clipPath>
      </defs>
      <g className="cls-30">
        <g id="Capa_2">
          <g id="Pantalla_de_Proyector">
            <g className="cls-3">
              <g>
                <g>
                  <g>
                    <rect
                      className="cls-23"
                      x="880.12"
                      y="1102.47"
                      width="31.22"
                      height="745.44"
                    />
                    <polygon
                      className="cls-23"
                      points="1154.7 1847.91 1032.8 1075.87 1001.97 1080.75 1123.11 1847.91 1154.7 1847.91"
                    />
                    <polygon
                      className="cls-23"
                      points="645.39 1847.91 766.52 1080.75 735.69 1075.87 613.78 1847.91 645.39 1847.91"
                    />
                  </g>
                  <rect
                    className="cls-16"
                    x="730.54"
                    y="1001.01"
                    width="322.59"
                    height="92.36"
                  />
                  <rect
                    className="cls-5"
                    x="730.54"
                    y="1001.01"
                    width="322.59"
                    height="46.2"
                  />
                  <rect
                    className="cls-11"
                    x="479.48"
                    y="981.49"
                    width="824.69"
                    height="39.03"
                  />
                  <rect
                    className="cls-13"
                    x="843.7"
                    y="1069.96"
                    width="104.06"
                    height="65.04"
                  />
                </g>
                <polygon
                  className="cls-20"
                  points="89.7 104.57 88.98 96.52 891.83 24.59 1688.56 96.52 1687.84 104.57 891.83 32.71 89.7 104.57"
                />
                <rect
                  className="cls-6"
                  x="43.68"
                  y="89.99"
                  width="1696.3"
                  height="895.51"
                />
                <rect
                  className="cls-12"
                  x="33.25"
                  y="964.39"
                  width="1717.17"
                  height="21.1"
                />
                <rect
                  className="cls-12"
                  x="33.25"
                  y="89.99"
                  width="1717.17"
                  height="21.1"
                />
                <g>
                  <path
                    className="cls-25"
                    d="M890.12,31.27h3.42c6.08,0,11.01,4.93,11.01,11.01v47.71h-25.44V42.28c0-6.08,4.93-11.01,11.01-11.01Z"
                  />
                  <path d="M889.72,28.65h4.21c7.48,0,13.56,6.08,13.56,13.56v14.3h-31.33v-14.3c0-7.48,6.08-13.56,13.56-13.56Z" />
                </g>
              </g>
            </g>
          </g>
          <g id="Barra_de_carga">
            <g>
              <rect
                className="cls-32"
                x="623.14"
                y="742.13"
                width="544.19"
                height="81.46"
                rx="40.73"
                ry="40.73"
              />
              <image
                width="604"
                height="142"
                transform="translate(596.23 715.03)"
                xlinkHref="data:image/png;base64,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"
              />
              <g className="cls-4">
                <image
                  width="604"
                  height="143"
                  transform="translate(589.23 709.03)"
                  xlinkHref="data:image/png;base64,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"
                />
              </g>
              <rect
                className="cls-31"
                x="629.64"
                y="748.05"
                width="531.17"
                height="69.61"
                rx="34.8"
                ry="34.8"
              />
              <rect
                className="cls-7"
                x="639.28"
                y="755.21"
                width="511.9"
                height="55.3"
                rx="27.65"
                ry="27.65"
              />
            </g>
          </g>
          <g id="Carga">
            <g className="cls-29">
              <rect
                className="cls-122"
                width="500"
                height="45.59"
                x="648.65"
                y="760.07"
                rx="22.79"
                ry="22.79"
              />
            </g>
          </g>
          <g id="Texto">
            <text className="cls-2" transform="translate(626.99 884.63)">
              <tspan x="0" y="0">
                Cargando resultados…
              </tspan>
            </text>
          </g>
          <g id="Gravadora">
            <g>
              <path
                className="cls-28"
                d="M769.14,656.66c-5.98-.03-10.96-1.71-14.81-5.04-6.91-5.97-7.61-14.98-7.64-15.36l-.02-.23,.04-.22c.07-.38,7.26-37.65,6.73-48.88-.48-10.34-13.12-20.94-17.88-24.93l-.58-.49c-3.8-2.94-81.91-33.1-133.48-52.66l1.23-3.26c13.27,5.03,129.77,49.27,134.5,53.25l.57,.48c5.55,4.65,18.56,15.56,19.11,27.44,.52,11.27-6.06,45.87-6.74,49.45,.14,1.27,1.16,8.23,6.45,12.78,3.71,3.19,8.76,4.56,15.02,4.08,21.56-1.65,61.02-10.68,61.41-10.77l.78,3.4c-.4,.09-40.11,9.17-61.92,10.84-.95,.08-1.88,.11-2.78,.11Z"
              />
              <g>
                <path
                  className="cls-21"
                  d="M717.89,568.78c-13.13-.04-23.86,10.6-23.9,23.73-.05,13.13,10.59,23.86,23.73,23.9,13.13,.05,23.85-10.6,23.9-23.72,.05-13.14-10.6-23.86-23.73-23.91Zm-.8,30.57c-3.72-.02-6.74-3.05-6.73-6.78,.01-3.72,3.05-6.74,6.78-6.73,3.72,.01,6.74,3.05,6.73,6.78-.01,3.72-3.06,6.74-6.78,6.73Z"
                />
                <path
                  className="cls-27"
                  d="M717.94,554.84c-20.82-.08-37.82,16.79-37.9,37.61-.08,20.82,16.8,37.82,37.62,37.9,20.82,.08,37.82-16.8,37.9-37.62,.08-20.82-16.8-37.82-37.62-37.89Zm-.23,61.57c-13.14-.04-23.78-10.77-23.73-23.9,.05-13.13,10.77-23.78,23.9-23.73,13.13,.05,23.78,10.77,23.73,23.91-.05,13.13-10.77,23.77-23.9,23.72Z"
                />
                <path
                  className="cls-27"
                  d="M717.13,587.58c-2.76,0-5.02,2.23-5.03,5,0,2.76,2.23,5.02,4.99,5.03,2.76,0,5.02-2.24,5.03-5,.01-2.77-2.23-5.02-4.99-5.03Z"
                />
                <path
                  className="cls-18"
                  d="M717.14,585.84c-3.72-.02-6.77,3.01-6.78,6.73-.01,3.73,3.01,6.77,6.73,6.78s6.77-3,6.78-6.73c.01-3.73-3-6.77-6.73-6.78Zm-.04,11.77c-2.76-.01-5-2.28-4.99-5.03,0-2.76,2.26-5,5.03-5,2.76,.02,5,2.27,4.99,5.03,0,2.76-2.26,5-5.03,5Z"
                />
              </g>
              <path
                className="cls-28"
                d="M962.02,645.02l-.77-3.4,82.7-18.73c1.27-.19,27.97-4.4,32.19-33.41,4.44-30.52,38.63-135.96,40.09-140.43l3.31,1.08c-.35,1.09-35.55,109.63-39.95,139.85-4.61,31.65-34.7,36.29-35.01,36.34l-82.56,18.71Z"
              />
              <g>
                <path
                  className="cls-21"
                  d="M1040.49,564.09c-13.13-.05-23.86,10.59-23.91,23.73-.05,13.13,10.6,23.86,23.73,23.91,13.13,.05,23.85-10.6,23.9-23.73,.05-13.13-10.6-23.85-23.72-23.9Zm-.11,30.57c-3.73-.01-6.74-3.06-6.73-6.78,.01-3.72,3.05-6.75,6.78-6.73,3.72,0,6.74,3.06,6.73,6.77-.01,3.73-3.05,6.74-6.78,6.73Z"
                />
                <path
                  className="cls-27"
                  d="M1040.54,550.15c-20.82-.08-37.82,16.79-37.9,37.61-.08,20.82,16.8,37.82,37.62,37.89,20.82,.08,37.82-16.79,37.9-37.61,.07-20.82-16.8-37.82-37.62-37.89Zm-.23,61.57c-13.13-.05-23.78-10.77-23.73-23.91,.05-13.13,10.77-23.77,23.91-23.73,13.13,.05,23.78,10.78,23.72,23.9-.05,13.13-10.77,23.78-23.9,23.73Z"
                />
                <path
                  className="cls-27"
                  d="M1040.42,582.9c-2.76-.01-5.02,2.23-5.03,4.99,0,2.76,2.23,5.02,4.99,5.02,2.76,.01,5.02-2.23,5.03-4.99,.01-2.76-2.23-5.02-4.99-5.03Z"
                />
                <path
                  className="cls-18"
                  d="M1040.43,581.15c-3.72-.02-6.76,3.01-6.78,6.73-.02,3.72,3,6.77,6.73,6.78,3.73,.01,6.77-3,6.78-6.73,.01-3.72-3.01-6.76-6.73-6.77Zm-.05,11.76c-2.76,0-5-2.26-4.99-5.02,.01-2.77,2.27-5,5.03-4.99,2.76,0,5,2.27,4.99,5.03-.01,2.76-2.27,5-5.03,4.99Z"
                />
              </g>
              <g>
                <path
                  className="cls-27"
                  d="M767.71,624.3c-6.57-.03-11.93,5.29-11.95,11.86-.03,6.56,5.3,11.92,11.86,11.95,6.56,.02,11.93-5.3,11.95-11.86,.02-6.57-5.3-11.93-11.87-11.95Z"
                />
                <path
                  className="cls-14"
                  d="M767.73,617.33c-10.41-.04-18.91,8.4-18.95,18.8-.04,10.41,8.4,18.92,18.81,18.96,10.41,.04,18.91-8.4,18.95-18.81,.04-10.41-8.4-18.91-18.81-18.95Zm-.11,30.79c-6.57-.03-11.89-5.39-11.86-11.95,.02-6.57,5.38-11.89,11.95-11.86,6.57,.02,11.89,5.38,11.87,11.95-.03,6.56-5.39,11.89-11.95,11.86Z"
                />
              </g>
              <path
                className="cls-22"
                d="M856.25,639.2c-.04,11.7-9.56,21.15-21.26,21.11-11.7-.05-21.15-9.56-21.11-21.26,.04-11.7,9.56-21.16,21.26-21.11,11.7,.04,21.15,9.56,21.1,21.26Z"
              />
              <path
                className="cls-22"
                d="M886,665.32c-.04,9.62-7.86,17.39-17.49,17.35-9.62-.03-17.39-7.86-17.35-17.48,.03-9.62,7.86-17.39,17.48-17.35,9.62,.04,17.39,7.86,17.36,17.49Z"
              />
              <path
                className="cls-22"
                d="M961.62,648.19c-.03,9.62-7.87,17.38-17.48,17.35-9.62-.03-17.39-7.86-17.35-17.48,.04-9.62,7.86-17.39,17.48-17.35,9.62,.03,17.39,7.86,17.35,17.49Z"
              />
              <path
                className="cls-22"
                d="M913.41,648c-.02,4.65-3.8,8.4-8.44,8.38-4.65-.02-8.4-3.8-8.38-8.44,.02-4.65,3.8-8.41,8.44-8.39,4.65,.02,8.4,3.79,8.38,8.44Z"
              />
              <path
                className="cls-10"
                d="M975.98,641.22l.09-56.77c.08-22.19-17.85-40.26-40.04-40.33l-98.59-.37c-22.19-.08-40.25,17.85-40.34,40.04l-.1,56.78c0,2.39,.2,4.73,.6,7.02l177.72,.66c.41-2.28,.64-4.62,.65-7.02Z"
              />
              <path
                className="cls-10"
                d="M798.41,660.17c3.26,18.86,19.65,33.24,39.44,33.31l98.59,.36c19.8,.07,36.29-14.19,39.68-33.02l-177.72-.65Z"
              />
              <g>
                <g>
                  <path
                    className="cls-24"
                    d="M952.69,610.98c-7.29-.03-13.22,5.86-13.24,13.15-.03,7.29,5.86,13.21,13.15,13.24,7.29,.03,13.22-5.86,13.24-13.15,.03-7.29-5.86-13.22-13.15-13.24Zm-.86,24.92c-6.47-.02-11.71-5.29-11.68-11.77,.02-6.48,5.29-11.71,11.77-11.68,6.48,.03,11.71,5.29,11.68,11.77-.02,6.48-5.29,11.7-11.77,11.68Z"
                  />
                  <path
                    className="cls-8"
                    d="M951.92,612.44c-6.48-.02-11.75,5.21-11.77,11.68-.02,6.48,5.21,11.74,11.68,11.77,6.48,.02,11.75-5.2,11.77-11.68,.02-6.48-5.21-11.75-11.68-11.77Z"
                  />
                </g>
                <g>
                  <path
                    className="cls-9"
                    d="M950.04,613.49s-6.22,2.65-6.92,5.23l9.51,7.29-2.59-12.52Z"
                  />
                  <path
                    className="cls-9"
                    d="M951.3,613.5c-.34-.04,2.44,12.06,2.44,12.06l1.83-10.77s-.85-.93-4.27-1.29Z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="cls-24"
                    d="M819.28,610.98c-7.29-.03-13.22,5.86-13.24,13.15-.03,7.29,5.86,13.21,13.15,13.24,7.29,.03,13.22-5.86,13.24-13.15,.03-7.29-5.86-13.22-13.15-13.24Zm-.86,24.92c-6.47-.02-11.71-5.29-11.68-11.77,.02-6.48,5.29-11.71,11.77-11.68,6.48,.03,11.71,5.29,11.68,11.77-.02,6.48-5.29,11.7-11.77,11.68Z"
                  />
                  <path
                    className="cls-8"
                    d="M818.5,612.44c-6.48-.02-11.75,5.21-11.77,11.68-.02,6.48,5.21,11.74,11.68,11.77,6.48,.02,11.75-5.2,11.77-11.68,.02-6.48-5.21-11.75-11.68-11.77Z"
                  />
                </g>
                <g>
                  <path
                    className="cls-9"
                    d="M816.63,613.49s-6.22,2.65-6.92,5.23l9.51,7.29-2.59-12.52Z"
                  />
                  <path
                    className="cls-9"
                    d="M817.88,613.5c-.34-.04,2.44,12.06,2.44,12.06l1.83-10.77s-.85-.93-4.27-1.29Z"
                  />
                </g>
              </g>
              <g>
                <path
                  className="cls-22"
                  d="M934.9,612.21c-.04,11.38-9.31,20.58-20.69,20.54l-61.19-.23c-11.39-.04-20.58-9.31-20.54-20.69l.13-36.09c.05-11.39,9.31-20.59,20.7-20.54l61.19,.22c11.39,.04,20.58,9.31,20.54,20.69l-.13,36.1Z"
                />
                <path
                  className="cls-8"
                  d="M928.01,584.9c.05-12.75-8.33-23.11-18.71-23.14l-50.87-.19c-10.38-.03-18.83,10.26-18.88,23l-.07,20.41,88.45,.33,.08-20.41Z"
                />
                <path
                  className="cls-17"
                  d="M847.93,614.36c0,1.83-1.5,3.31-3.33,3.31-1.83,0-3.31-1.5-3.31-3.33,0-1.83,1.5-3.32,3.33-3.31,1.84,0,3.31,1.5,3.31,3.33Z"
                />
                <path
                  className="cls-17"
                  d="M924.82,614.65c0,1.83-1.5,3.31-3.33,3.3-1.83,0-3.32-1.5-3.31-3.33,0-1.83,1.5-3.32,3.33-3.31,1.83,.01,3.31,1.5,3.31,3.34Z"
                />
                <path
                  className="cls-17"
                  d="M858.89,617.37c0,2.32-1.89,4.18-4.2,4.17-2.31,0-4.18-1.89-4.17-4.2,0-2.32,1.89-4.19,4.2-4.17,2.31,0,4.18,1.89,4.17,4.2Z"
                />
                <g>
                  <path
                    className="cls-26"
                    d="M850.82,570.68l1.31,5.04-1.14,.29-1.31-5.04,1.14-.29Z"
                  />
                  <path
                    className="cls-26"
                    d="M853.8,569.96l1.17,5.08-1.15,.26-1.17-5.08,1.16-.26Z"
                  />
                  <path
                    className="cls-26"
                    d="M856.84,569.32l1.04,5.11-1.16,.24-1.04-5.11,1.16-.24Z"
                  />
                  <path
                    className="cls-26"
                    d="M859.86,568.75l.91,5.13-1.17,.21-.91-5.13,1.17-.21Z"
                  />
                  <path
                    className="cls-26"
                    d="M862.9,568.26l.79,5.16-1.17,.18-.79-5.16,1.17-.18Z"
                  />
                  <path
                    className="cls-26"
                    d="M865.92,567.86l.66,5.17-1.18,.15-.66-5.17,1.17-.15Z"
                  />
                  <path
                    className="cls-26"
                    d="M868.98,567.52l.54,5.18-1.18,.12-.54-5.18,1.18-.12Z"
                  />
                  <path
                    className="cls-26"
                    d="M872.04,567.25l.42,5.2-1.18,.1-.42-5.2,1.18-.1Z"
                  />
                  <path
                    className="cls-26"
                    d="M875.11,567.06l.3,5.2-1.18,.07-.3-5.2,1.18-.07Z"
                  />
                  <path
                    className="cls-26"
                    d="M878.18,566.93l.18,5.21-1.18,.04-.18-5.21,1.18-.04Z"
                  />
                  <path
                    className="cls-26"
                    d="M881.24,566.88l.06,5.2-1.18,.02-.06-5.21h1.18Z"
                  />
                  <path
                    className="cls-26"
                    d="M884.31,566.89l-.07,5.21-1.18-.02,.07-5.21h1.18Z"
                  />
                  <path
                    className="cls-26"
                    d="M887.37,566.97l-.18,5.2-1.18-.04,.18-5.2,1.18,.04Z"
                  />
                  <path
                    className="cls-26"
                    d="M890.45,567.11l-.3,5.21-1.18-.07,.3-5.21,1.18,.07Z"
                  />
                  <path
                    className="cls-26"
                    d="M893.49,567.34l-.42,5.19-1.18-.09,.42-5.19,1.18,.09Z"
                  />
                  <path
                    className="cls-26"
                    d="M896.53,567.63l-.54,5.18-1.18-.12,.54-5.18,1.17,.13Z"
                  />
                  <path
                    className="cls-26"
                    d="M899.57,567.99l-.66,5.17-1.17-.15,.65-5.17,1.17,.15Z"
                  />
                  <path
                    className="cls-26"
                    d="M902.62,568.42l-.77,5.15-1.17-.17,.77-5.16,1.17,.18Z"
                  />
                  <path
                    className="cls-15"
                    d="M905.65,568.93l-.91,5.13-1.17-.2,.91-5.14,1.17,.21Z"
                  />
                  <path
                    className="cls-15"
                    d="M907.68,569.32l-.99,5.11-1.16-.22,.99-5.11,1.16,.22Z"
                  />
                  <path
                    className="cls-15"
                    d="M909.72,569.74l-1.08,5.09-1.16-.24,1.08-5.1,1.16,.25Z"
                  />
                  <path
                    className="cls-15"
                    d="M911.74,570.18l-1.16,5.08-1.15-.26,1.16-5.09,1.16,.26Z"
                  />
                  <path
                    className="cls-15"
                    d="M913.78,570.68l-1.25,5.06-1.15-.29,1.25-5.06,1.15,.28Z"
                  />
                  <path
                    className="cls-15"
                    d="M915.79,571.22l-1.34,5.03-1.14-.3,1.34-5.03,1.14,.3Z"
                  />
                </g>
                <path
                  className="cls-27"
                  d="M884.76,598.74l.36-.02,14.42-26.4c.17-.32,.06-.7-.26-.88-.31-.17-.7-.06-.87,.26l-14.08,25.78c-1.23,.14-5.09,.83-6.12,4.09h1.38c1.19-2.59,5.12-2.84,5.17-2.83Z"
                />
                <path
                  className="cls-19"
                  d="M876.24,604.37c.01-2.93,2.4-5.31,5.33-5.3,2.94,.01,5.31,2.4,5.3,5.34"
                />
              </g>
            </g>
          </g>
          <g id="Discos">
            <path
              className="cls-28"
              d="M819.23,373.69c-.25,68.36-55.88,123.58-124.24,123.32-68.36-.25-123.57-55.88-123.32-124.24,.25-68.36,55.87-123.57,124.24-123.32,68.36,.25,123.58,55.87,123.32,124.24Z"
            />
            <path
              className="cls-28"
              d="M1161.56,374.95c-.16,43.66-35.68,78.92-79.34,78.76-43.66-.16-78.92-35.69-78.75-79.34,.16-43.66,35.68-78.92,79.34-78.76,43.66,.16,78.91,35.68,78.75,79.34Z"
            />
            <g>
              <path
                className="cls-12"
                d="M650.37,216.36c-90.02,27.79-140.46,123.29-112.68,213.31,27.79,90.01,123.29,140.46,213.31,112.67,90.02-27.78,140.46-123.29,112.67-213.3-27.79-90.01-123.29-140.46-213.31-112.68Zm-84.69,233.72c-4.36,1.1-19.96-37.94-18.61-61.74l109.49-15.49s7.86,24.26,10.07,27.74c2.22,3.48-87.88,46.18-100.95,49.49Zm53.19-204.98c-1.22-4.33,37.43-20.91,61.25-20.17l18.26,109.07s-24.06,8.47-27.48,10.77c-3.42,2.3-48.39-86.69-52.04-99.67Zm68.34,133.66c-1.92-.1-3.22-.59-3.48-1.46-.27-.88,.52-2,2.06-3.17-.3-4.07,1.74-7.98,5.25-10.06,.08-1.92,.55-3.22,1.42-3.5,.87-.28,2,.5,3.19,2.02,4.15-.35,8.15,1.74,10.23,5.34,1.93,.1,3.21,.59,3.49,1.46,.27,.87-.52,2-2.06,3.17,.3,4.07-1.74,7.97-5.25,10.06-.08,1.93-.55,3.22-1.43,3.5-.87,.28-2-.5-3.19-2.02-4.15,.35-8.15-1.74-10.23-5.34Zm36.09,149.43l-23.56-108.04s23.61-9.64,26.92-12.1c3.3-2.46,52.57,84.22,56.84,97.01,1.42,4.26-36.36,22.71-60.19,23.14Zm129.39-160.44l-110.11,10.13s-6.66-24.62-8.7-28.2c-2.04-3.58,90.03-41.83,103.25-44.51,4.4-.89,18.08,38.88,15.57,62.58Z"
              />
              <path
                className="cls-14"
                d="M700.64,386.12c.88-.28,1.34-1.57,1.43-3.5,3.5-2.09,5.55-5.99,5.25-10.06,1.54-1.17,2.33-2.3,2.06-3.17-.27-.88-1.56-1.36-3.49-1.46-2.08-3.6-6.08-5.69-10.23-5.34-1.18-1.52-2.32-2.29-3.19-2.02-.87,.28-1.34,1.57-1.42,3.5-3.5,2.08-5.55,5.99-5.25,10.06-1.53,1.17-2.33,2.3-2.06,3.17,.27,.88,1.56,1.36,3.48,1.46,2.09,3.59,6.08,5.69,10.23,5.34,1.19,1.52,2.32,2.3,3.19,2.02Z"
              />
              <path
                className="cls-12"
                d="M1154.3,217.37c-87.21-35.63-186.8,6.18-222.42,93.4-35.63,87.21,6.18,186.79,93.39,222.42,87.21,35.63,186.8-6.18,222.43-93.39,35.62-87.21-6.19-186.79-93.39-222.43Zm-220.19,135.98c-4.11-1.8,7.58-42.2,23.27-60.14l95.89,55.08s-8.71,23.96-9.1,28.07c-.39,4.11-97.71-17.59-110.06-23Zm124.69,171.17c-1.91,4.07-41.99-8.65-59.53-24.79l57.49-94.46s23.74,9.32,27.83,9.82c4.1,.49-20.06,97.23-25.79,109.44Zm36.18-144.9c-.33,.85-1.66,1.23-3.58,1.18-2.36,3.43-6.52,5.19-10.61,4.52-1.3,1.42-2.49,2.11-3.35,1.77-.85-.34-1.22-1.67-1.15-3.6-3.33-2.35-5.06-6.41-4.44-10.43-1.44-1.29-2.14-2.47-1.8-3.32,.34-.85,1.66-1.23,3.58-1.18,2.36-3.43,6.52-5.19,10.62-4.52,1.3-1.43,2.49-2.12,3.34-1.77,.85,.34,1.21,1.67,1.15,3.6,3.33,2.35,5.06,6.41,4.44,10.44,1.44,1.29,2.14,2.47,1.8,3.33Zm-7.07-48.81c-4.07-.7,24.78-96.14,31.1-108.04,2.11-3.97,41.52,10.69,58.25,27.66l-62.04,91.54s-23.25-10.47-27.31-11.16Zm131.28,121.42l-98.46-50.33s7.53-24.37,7.72-28.48c.19-4.12,98.44,12.8,111.05,17.61,4.19,1.6-5.52,42.52-20.31,61.2Z"
              />
              <path
                className="cls-14"
                d="M1093.18,376.28c.62-4.03-1.11-8.09-4.44-10.44,.06-1.93-.3-3.26-1.15-3.6-.85-.35-2.04,.34-3.34,1.77-4.1-.67-8.26,1.09-10.62,4.52-1.92-.05-3.24,.33-3.58,1.18-.33,.85,.37,2.04,1.8,3.32-.62,4.02,1.11,8.08,4.44,10.43-.07,1.93,.3,3.26,1.15,3.6,.85,.35,2.04-.34,3.35-1.77,4.1,.67,8.25-1.09,10.61-4.52,1.93,.05,3.25-.33,3.58-1.18,.34-.85-.36-2.04-1.8-3.33Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Loading;
