import { FC } from "react";
import { StyledContent } from "./success.styles";
/** Assets */
import Background from "assets/images/cover/BackgroundCover.png";
import { useNavigate } from "react-router-dom";

const Success: FC = (): JSX.Element => {

    const navigate = useNavigate();

    const nextPage = () => navigate('/final');

    return (
        <StyledContent background={Background}>
            <svg viewBox="0 0 1802.16 1103.7" height="100vh">
        <defs>
            <style>
                {`.cls-1,
                .cls-2 {
                    fill: none;
                }

                .cls-3 {
                    letter-spacing: -.04em;
                }

                .cls-4 {
                    clip-path: url(#clippath);
                }

                .cls-5 {
                    opacity: .56;
                }

                .cls-5,
                .cls-6 {
                    mix-blend-mode: overlay;
                }

                .cls-7 {
                    letter-spacing: -.02em;
                }

                .cls-8 {
                    fill: #693d2c;
                }

                .cls-9 {
                    fill: #ede6dd;
                }

                .cls-10 {
                    fill: #f3d9b5;
                }

                .cls-11,
                .cls-12,
                .cls-13,
                .cls-14,
                .cls-15,
                .cls-16,
                .cls-6,
                .cls-17 {
                    fill: #fff;
                }

                .cls-18,
                .cls-19 {
                    fill: #fbfeeb;
                }

                .cls-20 {
                    fill: #e6cc2e;
                }

                .cls-21 {
                    fill: #900;
                }

                .cls-22 {
                    fill: #9b2116;
                }

                .cls-23 {
                    fill: #7d4115;
                }

                .cls-24 {
                    fill: #9f9aa1;
                }

                .cls-25 {
                    fill: #c45232;
                }

                .cls-26 {
                    fill: #304353;
                }

                .cls-27 {
                    fill: #865038;
                }

                .cls-28 {
                    fill: #ccc;
                }

                .cls-29 {
                    fill: #cc2417;
                }

                .cls-30 {
                    fill: #d07b58;
                }

                .cls-31 {
                    fill: #c3d9cd;
                }

                .cls-32 {
                    fill: #b13921;
                }

                .cls-33 {
                    fill: #191d29;
                }

                .cls-34 {
                    fill: #0a1318;
                }

                .cls-35 {
                    fill: #1b2933;
                }

                .cls-36 {
                    fill: #892c15;
                }

                .cls-37 {
                    fill: #565b6f;
                }

                .cls-38 {
                    fill: #284251;
                }

                .cls-39 {
                    fill: #600e18;
                }

                .cls-40 {
                    fill: #79757a;
                }

                .cls-41 {
                    fill: #842415;
                }

                .cls-42 {
                    fill: #841f12;
                }

                .cls-43 {
                    font-size: 51px;
                }

                .cls-43,
                .cls-44,
                .cls-15,
                .cls-45 {
                    font-family: Helvetica, Helvetica;
                }

                .cls-2 {
                    stroke: #fff;
                    stroke-linecap: round;
                    stroke-miterlimit: 10;
                    stroke-width: 8.06px;
                }

                .cls-46 {
                    font-size: 37.59px;
                }

                .cls-12 {
                    font-size: 45.1px;
                }

                .cls-12,
                .cls-13,
                .cls-14,
                .cls-47,
                .cls-16 {
                    font-family: Helvetica-Bold, Helvetica;
                }

                .cls-48,
                .cls-49,
                .cls-50,
                .cls-51,
                .cls-52,
                .cls-53,
                .cls-54,
                .cls-55,
                .cls-56,
                .cls-57,
                .cls-58,
                .cls-59,
                .cls-60,
                .cls-61,
                .cls-62,
                .cls-63,
                .cls-64,
                .cls-65,
                .cls-66,
                .cls-67,
                .cls-68,
                .cls-69,
                .cls-70,
                .cls-71,
                .cls-72,
                .cls-73,
                .cls-74,
                .cls-75 {
                    mix-blend-mode: multiply;
                }

                .cls-76 {
                    fill: url(#Degradado_sin_nombre_105);
                }

                .cls-77 {
                    clip-path: url(#clippath-1);
                }

                .cls-78 {
                    clip-path: url(#clippath-2);
                }

                .cls-79 {
                    fill: url(#radial-gradient-10);
                }

                .cls-80 {
                    fill: url(#radial-gradient-11);
                }

                .cls-81 {
                    fill: url(#radial-gradient-16);
                }

                .cls-82 {
                    fill: url(#radial-gradient-15);
                }

                .cls-83 {
                    fill: url(#radial-gradient-14);
                }

                .cls-84 {
                    fill: url(#radial-gradient-13);
                }

                .cls-44 {
                    letter-spacing: 0em;
                }

                .cls-85 {
                    letter-spacing: 0em;
                }

                .cls-86 {
                    letter-spacing: -.07em;
                }

                .cls-87 {
                    fill: url(#radial-gradient-6);
                }

                .cls-88 {
                    fill: url(#radial-gradient-5);
                }

                .cls-89 {
                    fill: url(#radial-gradient-3);
                }

                .cls-90 {
                    fill: url(#radial-gradient-4);
                }

                .cls-91 {
                    fill: url(#radial-gradient-9);
                }

                .cls-92 {
                    fill: url(#radial-gradient-8);
                }

                .cls-93 {
                    fill: url(#radial-gradient-7);
                }

                .cls-94 {
                    fill: url(#radial-gradient-2);
                }

                .cls-13 {
                    letter-spacing: 0em;
                }

                .cls-14 {
                    letter-spacing: 0em;
                }

                .cls-19 {
                    mix-blend-mode: soft-light;
                }

                .cls-47 {
                    font-size: 66.12px;
                }

                .cls-95 {
                    fill: url(#Degradado_sin_nombre_14);
                }

                .cls-96 {
                    font-size: 36.05px;
                }

                .cls-97 {
                    fill: url(#Degradado_sin_nombre_105-2);
                }

                .cls-98 {
                    fill: url(#radial-gradient);
                }

                .cls-99 {
                    isolation: isolate;
                }

                .cls-100 {
                    fill: url(#Degradado_sin_nombre_17-2);
                }

                .cls-101 {
                    fill: url(#Degradado_sin_nombre_14-2);
                }

                .cls-102 {
                    fill: url(#Degradado_sin_nombre_14-3);
                }

                .cls-103 {
                    fill: url(#Degradado_sin_nombre_14-4);
                }

                .cls-104 {
                    fill: #d1abac;
                    mix-blend-mode: hard-light;
                    opacity: .4;
                }

                .cls-6 {
                    opacity: .64;
                }

                .cls-17 {
                    opacity: .85;
                }

                .cls-49 {
                    fill: url(#radial-gradient-28);
                }

                .cls-49,
                .cls-50,
                .cls-51,
                .cls-52,
                .cls-53,
                .cls-54,
                .cls-55,
                .cls-56,
                .cls-57,
                .cls-58 {
                    opacity: .3;
                }

                .cls-50 {
                    fill: url(#radial-gradient-29);
                }

                .cls-51 {
                    fill: url(#radial-gradient-18);
                }

                .cls-52 {
                    fill: url(#radial-gradient-42);
                }

                .cls-53 {
                    fill: url(#radial-gradient-26);
                }

                .cls-54 {
                    fill: url(#radial-gradient-27);
                }

                .cls-55 {
                    fill: url(#radial-gradient-30);
                }

                .cls-56 {
                    fill: url(#radial-gradient-31);
                }

                .cls-57 {
                    fill: url(#radial-gradient-32);
                }

                .cls-58 {
                    fill: url(#radial-gradient-33);
                }

                .cls-59 {
                    fill: url(#radial-gradient-39);
                }

                .cls-59,
                .cls-60,
                .cls-61,
                .cls-62,
                .cls-63,
                .cls-64,
                .cls-65,
                .cls-66,
                .cls-67,
                .cls-68,
                .cls-69,
                .cls-70,
                .cls-71,
                .cls-72,
                .cls-73,
                .cls-74,
                .cls-75 {
                    opacity: .5;
                }

                .cls-60 {
                    fill: url(#radial-gradient-37);
                }

                .cls-61 {
                    fill: url(#radial-gradient-36);
                }

                .cls-62 {
                    fill: url(#radial-gradient-38);
                }

                .cls-63 {
                    fill: url(#radial-gradient-40);
                }

                .cls-64 {
                    fill: url(#radial-gradient-21);
                }

                .cls-65 {
                    fill: url(#radial-gradient-20);
                }

                .cls-66 {
                    fill: url(#radial-gradient-41);
                }

                .cls-67 {
                    fill: url(#radial-gradient-25);
                }

                .cls-68 {
                    fill: url(#radial-gradient-22);
                }

                .cls-69 {
                    fill: url(#radial-gradient-24);
                }

                .cls-70 {
                    fill: url(#radial-gradient-35);
                }

                .cls-71 {
                    fill: url(#radial-gradient-34);
                }

                .cls-72 {
                    fill: url(#radial-gradient-23);
                }

                .cls-73 {
                    fill: url(#radial-gradient-12);
                }

                .cls-74 {
                    fill: url(#radial-gradient-17);
                }

                .cls-75 {
                    fill: url(#radial-gradient-19);
                }

                .cls-105 {
                    fill: url(#Degradado_sin_nombre_17);
                    filter: url(#drop-shadow-1);
                }`}
            </style>
            <clipPath id="clippath">
                <rect className="cls-1" x="11.7" width="1790.46" height="1103.7" />
            </clipPath>
            <linearGradient id="Degradado_sin_nombre_17" x1="-4276.24" y1="-6610.23" x2="-4340.65" y2="-6651.07"
                gradientTransform="translate(-3283.92 -5743.93) rotate(-180)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#900" />
                <stop offset="1" stopColor="#870303" />
            </linearGradient>
            <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
                <feOffset dx="2.27" dy="2.27" />
                <feGaussianBlur result="blur" stdDeviation=".76" />
                <feFlood floodColor="#000" floodOpacity=".35" />
                <feComposite in2="blur" operator="in" />
                <feComposite in="SourceGraphic" />
            </filter>
            <linearGradient id="Degradado_sin_nombre_17-2" x1="1065.02" y1="912.4" x2="1008.58" y2="876.61"
                gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#Degradado_sin_nombre_17" />
            <clipPath id="clippath-1">
                <circle className="cls-10" cx="1590.55" cy="399.88" r="68.49" />
            </clipPath>
            <linearGradient id="Degradado_sin_nombre_14" x1="-1038.27" y1="-9984.16" x2="-1101.5" y2="-9873.04"
                gradientTransform="translate(-460.22 -9072.84) rotate(-178.59)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#d6886d" />
                <stop offset=".56" stopColor="#d06353" />
                <stop offset="1" stopColor="#cd4c43" />
            </linearGradient>
            <linearGradient id="Degradado_sin_nombre_14-2" x1="110.61" y1="-10023.35" x2="104.82" y2="-10053.13"
                gradientTransform="translate(-1555.45 -9042.6) rotate(-10.48) scale(1 -1)"
                xlinkHref="#Degradado_sin_nombre_14" />
            <linearGradient id="Degradado_sin_nombre_14-3" x1="7693.31" y1="1535.69" x2="7630.08" y2="1646.8"
                gradientTransform="translate(-6515.89 5124.52) rotate(-20.94) scale(1 -1)"
                xlinkHref="#Degradado_sin_nombre_14" />
            <linearGradient id="Degradado_sin_nombre_14-4" x1=".85" y1="2597.42" x2="-5.04" y2="2567.12"
                gradientTransform="translate(413.67 3393.63) rotate(171.59)" xlinkHref="#Degradado_sin_nombre_14" />
            <clipPath id="clippath-2">
                <rect className="cls-1" y="723.86" width="404.63" height="378.08" />
            </clipPath>
            <linearGradient id="Degradado_sin_nombre_105" x1="-4200.18" y1="600.63" x2="-4200.18" y2="508.2"
                gradientTransform="translate(-3912.03 388.74) rotate(-177.78) scale(1 -1)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#d6886d" />
                <stop offset=".29" stopColor="#a55947" />
                <stop offset=".61" stopColor="#732920" />
                <stop offset=".86" stopColor="#540b08" />
                <stop offset="1" stopColor="#490000" />
            </linearGradient>
            <linearGradient id="Degradado_sin_nombre_105-2" x1="8061" y1="600.63" x2="8061" y2="508.2"
                gradientTransform="translate(-7887.8 234.9) rotate(2.22)" xlinkHref="#Degradado_sin_nombre_105" />
            <radialGradient id="radial-gradient" cx="-4117.42" cy="521.33" fx="-4117.42" fy="521.33" r="29.16"
                gradientTransform="translate(-3912.03 388.74) rotate(-177.78) scale(1 -1)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#d6886d" />
                <stop offset=".17" stopColor="#d3755f" />
                <stop offset=".47" stopColor="#cd4c43" />
                <stop offset=".59" stopColor="#c54540" />
                <stop offset=".78" stopColor="#af333b" />
                <stop offset="1" stopColor="#8f1833" />
            </radialGradient>
            <radialGradient id="radial-gradient-2" cx="-4176.74" cy="450.93" fx="-4176.74" fy="450.93" r="94.54"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-3" cx="-4209.67" cy="349.67" fx="-4209.67" fy="349.67" r="43.91"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-4" cx="-4061.46" cy="240.08" fx="-4061.46" fy="240.08" r="16.64"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-5" cx="-4088.33" cy="229.06" fx="-4088.33" fy="229.06" r="20.92"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-6" cx="-4107.08" cy="288.18" fx="-4107.08" fy="288.18" r="64.01"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-7" cx="-4138.72" cy="198.3" fx="-4138.72" fy="198.3" r="8.6"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-8" cx="-4154.29" cy="250.05" fx="-4154.29" fy="250.05" r="51.15"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-9" cx="-4135.93" cy="547.73" fx="-4135.93" fy="547.73" r="10.85"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-10" cx="-4107.41" cy="447.63" fx="-4107.41" fy="447.63" r="74.51"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-11" cx="-4063.34" cy="430.67" fx="-4063.34" fy="430.67" r="20.61"
                gradientTransform="translate(-3912.69 405.84) rotate(-177.78) scale(1 -1.04)"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-12" cx="-4166.92" cy="348.82" fx="-4166.92" fy="348.82" r="12.42"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-13" cx="-4067.44" cy="428.35" fx="-4067.44" fy="428.35" r="30.42"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-14" cx="-4081.94" cy="327.78" fx="-4081.94" fy="327.78" r="56.95"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-15" cx="-4074.42" cy="368.28" fx="-4074.42" fy="368.28" r="31.22"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-16" cx="-4044.31" cy="355.2" fx="-4044.31" fy="355.2" r="17.14"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-17" cx="-4057.43" cy="335.47" fx="-4057.43" fy="335.47" r="22.84"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-18" cx="-4151.38" cy="471.89" fx="-4151.38" fy="471.89" r="95.89"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-19" cx="-4080.48" cy="291.55" fx="-4080.48" fy="291.55" r="27.5"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-20" cx="-4151.48" cy="290.12" fx="-4151.48" fy="290.12" r="43.2"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-21" cx="-4091.04" cy="227.18" fx="-4091.04" fy="227.18" r="18.68"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-22" cx="-4484.41" cy="315.8" fx="-4484.41" fy="315.8" r="15.39"
                gradientTransform="translate(-3962.07 331.1) rotate(-177.78) scale(.92 -.93)"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-23" cx="-4172.37" cy="252.63" fx="-4172.37" fy="252.63" r="43.26"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-24" cx="-4138.35" cy="234.95" fx="-4138.35" fy="234.95" r="20.33"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-25" cx="-4107.64" cy="303.49" fx="-4107.64" fy="303.49" r="22.41"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-26" cx="-4104.69" cy="280.12" fx="-4104.69" fy="280.12" r="36.52"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-27" cx="-4083.18" cy="328.82" fx="-4083.18" fy="328.82" r="31.28"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-28" cx="-4032.72" cy="322.23" fx="-4032.72" fy="322.23" r="20.64"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-29" cx="-4054.97" cy="240.66" fx="-4054.97" fy="240.66" r="14.03"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-30" cx="-4079.7" cy="228.59" fx="-4079.7" fy="228.59" r="16.99"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-31" cx="-4035.8" cy="357.58" fx="-4035.8" fy="357.58" r="11.55"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-32" cx="-4162.23" cy="205.02" fx="-4162.23" fy="205.02" r="13.35"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-33" cx="-4123.12" cy="211.01" fx="-4123.12" fy="211.01" r="14.72"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-34" cx="-4075.69" cy="366.75" fx="-4075.69" fy="366.75" r="33.05"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-35" cx="-4048.62" cy="357.11" fx="-4048.62" fy="357.11" r="13.79"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-36" cx="-4141.89" cy="327.73" fx="-4141.89" fy="327.73" r="15.83"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-37" cx="-4078.7" cy="452.81" fx="-4078.7" fy="452.81" r="35.31"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-38" cx="-4067.44" cy="373.16" fx="-4067.44" fy="373.16" r="19.95"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-39" cx="-4202.1" cy="346.92" fx="-4202.1" fy="346.92" r="24.38"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-40" cx="-4210.04" cy="350.08" fx="-4210.04" fy="350.08" r="44.35"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-41" cx="-4172.32" cy="519.09" fx="-4172.32" fy="519.09" r="51.36"
                xlinkHref="#radial-gradient" />
            <radialGradient id="radial-gradient-42" cx="-4059.18" cy="278.66" fx="-4059.18" fy="278.66" r="16.49"
                xlinkHref="#radial-gradient" />
        </defs>
        <g className="cls-99">
            <g id="Capa_2">
                <g id="Pantalla_de_Proyector">
                    <g className="cls-4">
                        <g>
                            <g>
                                <g>
                                    <rect className="cls-35" x="891.82" y="1102.47" width="31.22" height="745.44" />
                                    <polygon className="cls-35"
                                        points="1166.41 1847.91 1044.5 1075.87 1013.67 1080.75 1134.81 1847.91 1166.41 1847.91" />
                                    <polygon className="cls-35"
                                        points="657.09 1847.91 778.22 1080.75 747.39 1075.87 625.49 1847.91 657.09 1847.91" />
                                </g>
                                <rect className="cls-27" x="742.24" y="1001.01" width="322.59" height="92.36" />
                                <rect className="cls-8" x="742.24" y="1001.01" width="322.59" height="46.2" />
                                <rect className="cls-23" x="491.18" y="981.49" width="824.69" height="39.03" />
                                <rect className="cls-26" x="855.4" y="1069.96" width="104.06" height="65.04" />
                            </g>
                            <polygon className="cls-28"
                                points="101.4 104.57 100.68 96.52 903.53 24.59 1700.26 96.52 1699.54 104.57 903.53 32.71 101.4 104.57" />
                            <rect className="cls-10" x="55.38" y="89.99" width="1696.3" height="895.51" />
                            <rect className="cls-24" x="44.95" y="964.39" width="1717.17" height="21.1" />
                            <rect className="cls-24" x="44.95" y="89.99" width="1717.17" height="21.1" />
                            <g>
                                <path className="cls-40"
                                    d="M901.82,31.27h3.42c6.08,0,11.01,4.93,11.01,11.01v47.71h-25.44V42.28c0-6.08,4.93-11.01,11.01-11.01Z" />
                                <path
                                    d="M901.42,28.65h4.21c7.48,0,13.56,6.08,13.56,13.56v14.3h-31.33v-14.3c0-7.48,6.08-13.56,13.56-13.56Z" />
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Botones" onClick={nextPage}>
                    <g>
                        <g>
                            <circle className="cls-105" cx="1031.07" cy="890.87" r="54.02" />
                            <g className="cls-48">
                                <image width="166" height="166" transform="translate(952.93 812.03)"
                                    xlinkHref="data:image/png;base64,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" />
                            </g>
                            <g className="cls-5">
                                <image width="166" height="166" transform="translate(945.93 805.03)"
                                    xlinkHref="data:image/png;base64,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" />
                            </g>
                            <circle className="cls-100" cx="1031.07" cy="890.87" r="47.34" />
                        </g>
                        <g>
                            <line className="cls-2" x1="1004.85" y1="890.87" x2="1050.2" y2="890.87" />
                            <polygon className="cls-11"
                                points="1034.15 904.53 1047.82 890.87 1034.15 877.21 1045.75 877.21 1059.41 890.87 1045.75 904.53 1034.15 904.53" />
                        </g>
                    </g>
                </g>
                <g id="Texto">
                    <rect className="cls-21" x="206.26" y="642.59" width="426.12" height="46.63" />
                    <rect className="cls-21" x="599.45" y="571.63" width="613.38" height="52.91" />
                    <rect className="cls-21" x="1022.04" y="642.59" width="581.15" height="46.63" />
                    <rect className="cls-21" x="371.93" y="689.22" width="243.37" height="46.63" />
                    <rect className="cls-21" x="1304.24" y="689.22" width="192.97" height="46.63" /><text className="cls-96"
                        transform="translate(211.79 678.13)">
                        <tspan className="cls-16" x="0" y="0">Consulta con tu médico</tspan>
                        <tspan className="cls-45" x="408.55" y="0" xmlSpace="preserve"> y recuerda que si tienes </tspan>
                        <tspan className="cls-16" x="811.29" y="0">historial familiar de falla cardíaca,</tspan>
                        <tspan className="cls-45" x="1390.28" y="0"> </tspan>
                        <tspan className="cls-45" x="111.11" y="43.26">las </tspan>
                        <tspan className="cls-16" x="167.21" y="43.26">posibilidades</tspan>
                        <tspan className="cls-45" x="397.55" y="43.26" xmlSpace="preserve"> de ser diagnosticado con esta
                            enfermedad </tspan>
                        <tspan className="cls-16" x="1098.9" y="43.26">aumentan.</tspan>
                    </text><text className="cls-43" transform="translate(734.03 903.2)">
                        <tspan x="0" y="0" style={{fill: "#000000"}}>Siguiente</tspan>
                    </text>
                    <rect className="cls-21" x="764.12" y="285.93" width="717.26" height="46.63" />
                    <rect className="cls-21" x="603.46" y="456.66" width="476.5" height="46.63" />
                    <rect className="cls-21" x="850.44" y="497.59" width="326.05" height="46.63" /><text className="cls-46"
                        transform="translate(340.75 320.09)">
                        <tspan className="cls-45" x="0" y="0">Las pistas apuntan a que</tspan>
                        <tspan className="cls-15" x="420.04" y="0"> </tspan>
                        <tspan className="cls-14" x="430.48" y="0">el sospechoso puede estar al acecho…</tspan>
                    </text><text className="cls-96" transform="translate(439.12 490.49)">
                        <tspan className="cls-45" x="0" y="0">Presentas </tspan>
                        <tspan className="cls-13" x="172.31" y="0">algunos signos y síntomas</tspan>
                        <tspan className="cls-44" x="635" y="0" xmlSpace="preserve"> que pueden estar </tspan>
                        <tspan className="cls-45" x="204.33" y="43.26">relacionados </tspan>
                        <tspan className="cls-16" x="418.74" y="43.26">con falla cardíaca.</tspan>
                    </text><text className="cls-47" transform="translate(715.01 228.16)">
                        <tspan x="0" y="0">¡</tspan>
                        <tspan className="cls-86" x="22.02" y="0">A</tspan>
                        <tspan className="cls-85" x="64.89" y="0">TENCIÓN!</tspan>
                    </text><text className="cls-12" transform="translate(609.01 614.47)">
                        <tspan x="0" y="0">ES MOMENTO DE</tspan>
                        <tspan className="cls-3" x="382.61" y="0"> </tspan>
                        <tspan x="393.49" y="0">ACTUAR.</tspan>
                    </text>
                    <g>
                        <path className="cls-21"
                            d="M614.84,252.92c-14.48,0-28.97,0-43.45,0-5.48,0-9.29-2.6-11.1-7.74-1.1-3.13-.62-6.17,1.03-9.02,2.02-3.49,4.04-6.99,6.08-10.47,9.61-16.35,19.21-32.7,28.84-49.04,2.92-4.95,5.89-9.88,8.89-14.78,4.59-7.49,14.91-7.31,19.33,.31,1.88,3.24,3.78,6.47,5.69,9.7,6.3,10.66,12.62,21.31,18.9,31.98,4.22,7.17,8.37,14.38,12.59,21.55,2.06,3.5,4.22,6.94,6.31,10.43,3.54,5.91,1.47,13.24-4.64,16.01-1.42,.64-3.09,1.02-4.65,1.03-14.61,.08-29.22,.05-43.83,.05h0Zm-.12-70.83c-1.03,0-2.06,0-3.09,0-1.03,0-2.06,0-3.09,0-3.04,.01-4.11,1.2-3.74,4.22,.4,3.35,.83,6.7,1.26,10.04,.72,5.64,1.46,11.27,2.19,16.91,.43,3.31,.84,6.61,1.27,9.92,.2,1.51,.8,2.18,2.16,2.21,2.06,.05,4.12,.03,6.19,0,1.22-.01,1.91-.71,2.06-1.88,.53-4.08,1.03-8.16,1.55-12.24,.71-5.59,1.44-11.18,2.14-16.78,.38-3.02,.69-6.05,1.08-9.07,.27-2.17-1.31-3.39-3.28-3.35-2.23,.05-4.45,.01-6.68,.01Zm.03,61.26c3.91,.28,7.13-3.14,7.16-7.06,.03-3.92-3.21-7.15-7.15-7.16-4.01-.01-7.28,3.21-7.21,7.22,.07,4.04,3.32,7.26,7.21,7Z" />
                        <path className="cls-18"
                            d="M614.72,182.1c2.23,0,4.46,.04,6.68-.01,1.97-.04,3.55,1.19,3.28,3.35-.38,3.02-.7,6.05-1.08,9.07-.7,5.59-1.43,11.18-2.14,16.78-.52,4.08-1.02,8.16-1.55,12.24-.15,1.18-.83,1.87-2.06,1.88-2.06,.02-4.13,.04-6.19,0-1.36-.03-1.96-.7-2.16-2.21-.43-3.31-.84-6.61-1.27-9.92-.73-5.64-1.46-11.27-2.19-16.91-.43-3.35-.85-6.69-1.26-10.04-.36-3.02,.7-4.21,3.74-4.22,1.03,0,2.06,0,3.09,0,1.03,0,2.06,0,3.09,0Z" />
                        <path className="cls-18"
                            d="M614.76,243.37c-3.9,.26-7.15-2.96-7.21-7-.07-4,3.21-7.23,7.21-7.22,3.94,.01,7.18,3.23,7.15,7.16-.03,3.92-3.25,7.34-7.16,7.06Z" />
                    </g>
                    <g>
                        <path className="cls-21"
                            d="M1196.12,252.92c-14.48,0-28.97,0-43.45,0-5.48,0-9.29-2.6-11.1-7.74-1.1-3.13-.62-6.17,1.03-9.02,2.02-3.49,4.04-6.99,6.08-10.47,9.61-16.35,19.21-32.7,28.84-49.04,2.92-4.95,5.89-9.88,8.89-14.78,4.59-7.49,14.91-7.31,19.33,.31,1.88,3.24,3.78,6.47,5.69,9.7,6.3,10.66,12.62,21.31,18.9,31.98,4.22,7.17,8.37,14.38,12.59,21.55,2.06,3.5,4.22,6.94,6.31,10.43,3.54,5.91,1.47,13.24-4.64,16.01-1.42,.64-3.09,1.02-4.65,1.03-14.61,.08-29.22,.05-43.83,.05h0Zm-.12-70.83c-1.03,0-2.06,0-3.09,0-1.03,0-2.06,0-3.09,0-3.04,.01-4.11,1.2-3.74,4.22,.4,3.35,.83,6.7,1.26,10.04,.72,5.64,1.46,11.27,2.19,16.91,.43,3.31,.84,6.61,1.27,9.92,.2,1.51,.8,2.18,2.16,2.21,2.06,.05,4.12,.03,6.19,0,1.22-.01,1.91-.71,2.06-1.88,.53-4.08,1.03-8.16,1.55-12.24,.71-5.59,1.44-11.18,2.14-16.78,.38-3.02,.69-6.05,1.08-9.07,.27-2.17-1.31-3.39-3.28-3.35-2.23,.05-4.45,.01-6.68,.01Zm.03,61.26c3.91,.28,7.13-3.14,7.16-7.06,.03-3.92-3.21-7.15-7.15-7.16-4.01-.01-7.28,3.21-7.21,7.22,.07,4.04,3.32,7.26,7.21,7Z" />
                        <path className="cls-18"
                            d="M1196,182.1c2.23,0,4.46,.04,6.68-.01,1.97-.04,3.55,1.19,3.28,3.35-.38,3.02-.7,6.05-1.08,9.07-.7,5.59-1.43,11.18-2.14,16.78-.52,4.08-1.02,8.16-1.55,12.24-.15,1.18-.83,1.87-2.06,1.88-2.06,.02-4.13,.04-6.19,0-1.36-.03-1.96-.7-2.16-2.21-.43-3.31-.84-6.61-1.27-9.92-.73-5.64-1.46-11.27-2.19-16.91-.43-3.35-.85-6.69-1.26-10.04-.36-3.02,.7-4.21,3.74-4.22,1.03,0,2.06,0,3.09,0,1.03,0,2.06,0,3.09,0Z" />
                        <path className="cls-18"
                            d="M1196.04,243.37c-3.9,.26-7.15-2.96-7.21-7-.07-4,3.21-7.23,7.21-7.22,3.94,.01,7.18,3.23,7.15,7.16-.03,3.92-3.25,7.34-7.16,7.06Z" />
                    </g>
                    <g>
                        <g>
                            <path className="cls-38"
                                d="M1584.4,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M1653.11,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M1658.64,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M1590.42,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M1445.32,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M1514.02,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M1519.56,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M1451.33,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M1306.24,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M1374.94,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M1380.47,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M1312.25,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M1167.15,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M1235.86,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M1241.39,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M1173.17,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M1028.07,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M1096.78,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M1102.31,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M1034.09,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M888.99,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M957.69,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M963.23,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M895,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M749.91,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M818.61,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M824.14,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M755.92,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M610.82,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M679.53,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M685.06,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M616.84,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M471.74,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M540.45,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M545.98,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M477.76,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M331.42,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M400.12,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M405.66,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M337.43,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                        <g>
                            <path className="cls-38"
                                d="M191.1,379.05c-.26,2.35-.51,4.69-.78,7.03-.29,2.54-.57,5.08-.93,7.61-.06,.41-.4,.99-.75,1.12-6.25,2.3-12.65,3.84-19.38,3.3-3-.24-5.82-1-7.97-3.33-3.12-3.38-3.04-8.77,.18-12.51,2.89-3.36,6.73-4.84,10.97-5.38,6.16-.78,12.16,.18,18.07,1.88,.18,.05,.35,.15,.61,.26Z" />
                            <path className="cls-38"
                                d="M259.8,419.16c-2.65,1.08-5.22,2.25-7.87,3.2-4.41,1.58-8.96,2.47-13.67,2.06-3.47-.3-6.59-1.46-9.12-3.96-4.93-4.86-3.56-12.4,2.77-15.21,3.44-1.52,7.08-2.21,10.81-2.14,3.81,.07,7.61,.45,11.41,.76,.4,.03,.99,.42,1.1,.76,1.54,4.75,3.01,9.51,4.57,14.53Z" />
                            <path className="cls-38"
                                d="M265.34,416.43c-1.33-4.49-2.63-8.81-3.88-13.15-.08-.28,.15-.84,.41-.99,2.82-1.69,5.81-2.99,9.12-3.31,1.15-.11,2.39-.07,3.5,.25,4.55,1.28,5.79,4.86,3.97,9.43-.53,1.33-1.57,2.57-2.66,3.52-2.94,2.56-6.59,3.52-10.46,4.25Z" />
                            <path className="cls-38"
                                d="M197.11,380.48c4.82,.09,9.52,.37,13.26,3.87,1.99,1.86,2.82,4.29,2.51,6.97-.23,1.98-1.58,3.3-3.27,4.21-2.48,1.33-5.17,1.35-7.84,.89-1.85-.32-3.66-.89-5.47-1.41-.27-.08-.65-.53-.63-.77,.44-4.54,.94-9.07,1.44-13.77Z" />
                        </g>
                    </g>
                    <g>
                        <circle className="cls-10" cx="1590.55" cy="399.88" r="68.49" />
                        <g className="cls-77">
                            <g>
                                <path className="cls-38"
                                    d="M1567.33,370.68c-.36,3.26-.71,6.51-1.09,9.76-.41,3.53-.8,7.06-1.29,10.58-.08,.57-.56,1.38-1.05,1.56-8.68,3.2-17.57,5.33-26.92,4.59-4.17-.33-8.09-1.38-11.07-4.62-4.33-4.7-4.22-12.18,.25-17.37,4.02-4.67,9.34-6.72,15.24-7.47,8.55-1.08,16.88,.25,25.09,2.61,.26,.07,.49,.21,.84,.37Z" />
                                <path className="cls-38"
                                    d="M1662.75,426.39c-3.68,1.51-7.25,3.12-10.93,4.44-6.13,2.2-12.44,3.43-18.99,2.86-4.82-.42-9.15-2.03-12.67-5.5-6.84-6.75-4.94-17.23,3.85-21.12,4.77-2.11,9.84-3.07,15.01-2.98,5.29,.1,10.57,.63,15.84,1.06,.55,.04,1.37,.58,1.53,1.06,2.14,6.59,4.18,13.21,6.35,20.18Z" />
                                <path className="cls-38"
                                    d="M1670.44,422.59c-1.85-6.23-3.66-12.24-5.39-18.26-.11-.39,.21-1.16,.57-1.37,3.92-2.35,8.07-4.16,12.66-4.6,1.6-.15,3.33-.09,4.86,.34,6.32,1.78,8.04,6.75,5.52,13.1-.73,1.84-2.18,3.57-3.7,4.89-4.08,3.56-9.15,4.89-14.52,5.9Z" />
                                <path className="cls-38"
                                    d="M1575.68,372.66c6.7,.12,13.22,.51,18.42,5.38,2.76,2.58,3.92,5.95,3.49,9.68-.32,2.75-2.19,4.59-4.55,5.85-3.45,1.85-7.17,1.87-10.88,1.23-2.57-.44-5.09-1.23-7.6-1.96-.38-.11-.9-.73-.87-1.07,.61-6.3,1.3-12.6,2-19.12Z" />
                            </g>
                        </g>
                    </g>
                    <g>
                        <polygon className="cls-24"
                            points="1624.31 562.23 1649.65 554.68 1622.53 468.12 1597.34 476.18 1624.31 562.23" />
                        <path className="cls-37"
                            d="M1648.38,597.25l.29-.09c8-2.38,13.03-9.17,11.24-15.17l-19.91-68.76-30.25,8.3,20.92,69.17c1.79,6,9.72,8.93,17.71,6.55Z" />
                        <circle className="cls-19" cx="1589.44" cy="399.93" r="68.49" />
                        <path className="cls-33"
                            d="M1611.2,476.96c42.14-12.55,66.12-56.89,53.57-99.03-12.55-42.14-56.89-66.12-99.03-53.57-42.14,12.55-66.12,56.89-53.57,99.03,12.55,42.14,56.89,66.12,99.03,53.57Zm-88.36-56.75c-10.8-36.25,9.2-75.13,45.45-85.93,36.25-10.8,75.21,7.71,86,43.96,10.8,36.25-7.02,76.96-43.27,87.75-36.25,10.8-77.39-9.53-88.19-45.78Z" />
                        <path className="cls-20"
                            d="M1638.92,513.78l-28.78,7.9c-.99,.27-2.02-.25-2.39-1.21l-.12-.31c-.43-1.11,.2-2.35,1.35-2.65l28.89-7.63c1.08-.29,2.19,.37,2.45,1.46v.04c.26,1.05-.36,2.11-1.4,2.4Z" />
                        <path className="cls-31"
                            d="M1571.21,465.2c15.89,4.31,32.86,2.78,47.68-4.41,14.63-7.1,26.2-19.41,32.66-34.3,6.61-15.22,7.09-32.68,1.86-48.36-5.1-15.27-15.84-28.35-29.63-36.58-14.3-8.54-31.66-11.41-47.97-8.14-15.7,3.15-30.09,12.03-39.98,24.63-10.32,13.15-15.34,29.92-14.26,46.57,1.04,16.03,8.15,31.36,19.34,42.82,8.31,8.51,18.87,14.58,30.3,17.77,2.26,.63,1.3,4.14-.97,3.51-15.88-4.43-29.68-14.15-39.29-27.54-9.38-13.07-13.97-29.36-13.07-45.39,.93-16.63,7.86-32.58,19.18-44.75,10.88-11.7,25.83-19.44,41.6-21.81,16.49-2.48,33.57,1.07,47.81,9.71,13.76,8.35,24.21,21.42,29.81,36.46,5.76,15.46,5.68,32.77,.23,48.3-5.4,15.39-16.14,28.48-29.98,37.05-16.72,10.35-37.37,13.11-56.29,7.98-2.27-.62-1.3-4.13,.97-3.51Z" />
                        <circle className="cls-6" cx="1554.34" cy="361.09" r="12.62" />
                        <circle className="cls-6" cx="1568.17" cy="345.94" r="5.34" />
                        <circle className="cls-6" cx="1572.49" cy="356.57" r="3.31" />
                    </g>
                </g>
                <g id="Brazo_C">
                    <g>
                        <path className="cls-95"
                            d="M316.22,949.53s31-.26,56.78-35.2c30.77-41.7,6.95-98.71,6.95-98.71l-6.01,1.03s21.8,59.38-7.23,94.29c-26.94,32.4-48.14,33.42-48.14,33.42l-2.34,5.17Z" />
                        <path className="cls-101"
                            d="M361.91,805.89c-.14-.37-.25-.79-.12-1.16,.13-.37,.46-.62,.81-.79,1.41-.68,2.76,.3,4.02,1.23,1.26,.93,2.01,2.12,3.38,3.05-1.53-3.64-2.5-7.2-4.03-10.84-.38-.91-.89-2.38-.8-3.36s.4-1.55,1.39-1.56c1.1,0,1.83,1.1,2.34,2.07,1.74,3.29,3.49,6.58,5.23,9.87-.92-4.07-1.84-8.15-2.76-12.22-.12-.51-.23-1.06-.06-1.56,.38-1.12,2.02-1.32,2.99-.65s1.42,1.86,1.78,2.99c1.16,3.59,2.04,7.27,2.61,11,.5-3.56,1.05-7.14,2.04-10.68,.38-1.36,.61-2.79,1.84-3.02,1.33-.25,1.8,1.87,1.9,3.22,.31,4.34-1.17,8.24-1.14,12.29,1.1-2.11,2.81-6.45,4.9-9.24,.19-.26,.44-.49,.76-.56,.75-.18,1.49,.65,1.53,1.42,.16,2.74-3.1,11.42-6.38,16.55-1.69,2.65-2.28,7.35-2.28,7.35-.28,3.72-4.99,5.07-6.34,.21-1.24-4.48-10.89-8.59-13.61-15.6Z" />
                    </g>
                    <g>
                        <path className="cls-102"
                            d="M141.28,950.4s-29.3,10.11-65.28-14.2c-42.94-29.01-39.55-90.7-39.55-90.7l6.01-1.04s-.69,63.25,38.34,86.45c36.23,21.53,56.55,15.4,56.55,15.4l3.93,4.09Z" />
                        <path className="cls-103"
                            d="M50.64,831.3c.02-.4-.02-.83-.26-1.14-.24-.31-.64-.44-1.03-.49-1.55-.19-2.52,1.18-3.41,2.47-.89,1.29-1.22,2.66-2.21,3.98,.27-3.94,.04-7.62,.3-11.56,.07-.98,.07-2.54-.33-3.44-.4-.9-.88-1.34-1.82-1.03-1.04,.35-1.37,1.63-1.55,2.72-.58,3.68-1.17,7.36-1.75,11.04-.45-4.15-.9-8.3-1.35-12.46-.06-.52-.12-1.08-.45-1.49-.72-.94-2.33-.6-3.03,.35-.7,.95-.74,2.22-.72,3.4,.06,3.77,.43,7.54,1.09,11.26-1.63-3.21-3.3-6.42-5.39-9.45-.8-1.17-1.48-2.44-2.72-2.26-1.34,.19-1.1,2.35-.75,3.66,1.11,4.21,3.77,7.42,5.05,11.26-1.72-1.64-4.75-5.2-7.62-7.16-.26-.18-.58-.32-.9-.29-.77,.07-1.2,1.1-.99,1.84,.74,2.65,6.63,9.8,11.4,13.6,2.46,1.96,4.19,3.23,4.54,6.22,.57,4.91,5.94,4.01,5.23-1.81-.56-4.61,8.36-11.69,8.66-19.21Z" />
                    </g>
                </g>
                <g id="Corazon">
                    <g className="cls-78">
                        <g>
                            <path className="cls-76"
                                d="M273.94,1053.26c.35-2.7-3.86,15.85-5.71,50.01-.57,10.47-15.3,36.06-15.3,36.06,0,0,1.15,7.27,8.51,8.5,7.36,1.23,20.46-1.39,21.51,.83,1.66,3.51,2.87,11.73-23.26,10.72-6.1-.24-10.49-1.26-13.62-2.7-6.84-3.13-8.12-12.33-2.54-17.38,3.2-2.89,7.36-7.55,10.12-13.99,4.24-9.91,8.44-18.77,9.18-26.29,1.36-13.67,5.53-47.36,5.53-47.36l5.58,1.6Z" />
                            <path className="cls-97"
                                d="M139.41,1048.06c-.14-2.72,2.63,16.1,1.83,50.3-.24,10.49,12.47,37.13,12.47,37.13,0,0-1.71,7.16-9.14,7.81-7.43,.65-20.29-2.97-21.51-.83-1.92,3.37-3.76,11.48,22.36,12.49,6.1,.24,10.55-.45,13.79-1.64,7.06-2.59,9.05-11.67,3.88-17.13-2.96-3.13-6.75-8.09-9.01-14.73-3.46-10.2-6.96-19.37-7.12-26.92-.3-13.74-1.85-47.64-1.85-47.64l-5.69,1.16Z" />
                            <g>
                                <path className="cls-98"
                                    d="M188.9,1102.62c.82,.03,1.56-.07,2.21-.3,1.43-.49,2.7-1.64,3.88-3.49,.9-1.41,1.64-2.97,2.34-4.48l.13-.27,.49-1.07c.58-1.26,1.17-2.57,1.82-3.84,.93-1.82,1.89-3.33,2.94-4.61,.25-.31,.56-.65,.92-1.03,.3-.31,.57-.64,.81-.99,.48-.7,.84-1.49,1.09-2.34,.43-1.51,.54-3.26,.32-5.22-.18-1.59-.55-3.29-1.16-5.2-.97-3.07-2.41-6.26-4.4-9.78-1.8-3.17-3.8-6.18-5.94-8.94-1.04-1.32-2.18-2.65-3.5-4.07-.44-.48-.9-.95-1.35-1.43-.78-.82-1.58-1.67-2.35-2.52-1.31-1.46-2.43-2.85-3.43-4.24-.6-.84-1.2-1.75-1.82-2.76l-.39-.64-.17,.73c-.11,.48-.21,.92-.33,1.35l-.03,.1c-.28,1.09-.56,2.22-.87,3.32-.31,1.15-.66,2.31-.99,3.39l-.22,.69c-.28,.88-.57,1.79-.88,2.67-.41,1.19-.84,2.35-1.2,3.33l-.08,.2c-.39,1.01-.8,2.06-1.24,3.08-.5,1.18-1.04,2.35-1.46,3.23-.48,1.01-1.02,2.08-1.59,3.17-.61,1.14-1.18,2.15-1.74,3.09-.73,1.22-1.32,2.15-1.9,2.99-1.33,1.99-2.82,3.85-4.43,5.55-.92,.97-1.77,1.77-2.61,2.44-.41,.32-.92,.7-1.47,1.04l-.42,.24-.3,.15-.1,.04c-.27,.12-.55,.22-.88,.31-.16,.04-.32,.08-.48,.11l-.45,.08,.24,.39c.1,.16,.19,.31,.3,.49,.96,1.49,2.68,3.86,5.41,6.68,2.78,2.89,6.3,5.95,10.17,8.86,5.11,3.82,9.94,6.89,14.77,9.39l.21,.11h.1Z" />
                                <path className="cls-94"
                                    d="M207.84,1108.91c3.4,.13,6.69-.2,9.77-.97,3.8-.94,7.43-2.59,10.78-4.89,3.16-2.16,6.14-4.97,8.86-8.33,.32-.4,.64-.81,.95-1.22l.46-.61,.17-.24c.12-.16,.22-.3,.3-.42l.86-1.24,.84-1.32c.46-.74,.91-1.48,1.37-2.24,.65-1.06,1.31-2.16,2.01-3.26,1.04-1.67,2.24-3.41,3.77-5.47,1.47-1.9,2.86-3.59,4.25-5.16,2.94-3.32,6.11-6.53,9.42-9.55,1.13-1.07,2.33-2.11,3.48-3.12l.14-.12c.47-.41,.95-.83,1.42-1.24,1.14-.97,2.27-1.92,3.42-2.88l1.68-1.4c3.64-3.01,6.86-5.82,9.84-8.58,6.43-5.97,12.2-12.19,17.17-18.49,4.93-6.27,9.2-12.88,12.69-19.63,3.24-6.35,5.8-12.85,7.59-19.32,1.57-5.6,2.59-11.38,3.03-17.18,.36-4.61,.34-9.12-.05-13.42-.26-2.96-.67-5.75-1.24-8.53-.18-.87-.33-1.53-.44-2.01l-.09-.38-.4-.09c-.76-.17-1.51-.47-2.23-.9-1.93-1.19-2.88-2.59-3.48-3.68-.07-.13-.14-.26-.19-.38l-.31-.65-.63,.39c-.78,.4-1.72,.76-2.7,1.01l-.68,.18,.24,.63c.09,.24,.19,.54,.3,.89l.11,.36c.18,.53,.33,1.13,.5,1.77,.13,.46,.24,.97,.35,1.47,.05,.25,.11,.5,.16,.74,.05,.25,.1,.51,.14,.78,.03,.16,.14,.85,.14,.85,.06,.32,.11,.63,.15,.96,.29,1.91,.41,4.04,.37,6.34-.05,2.57-.39,5.06-1.01,7.4-.73,2.78-1.86,5.36-3.35,7.66-.14,.2-.28,.41-.42,.63-.27,.41-.54,.82-.83,1.19l-.48,.62c-.29,.38-.58,.76-.89,1.13-.97,1.19-1.97,2.35-2.97,3.47-.49,.55-.99,1.09-1.48,1.64l-.06,.06c-1.55,1.7-3.15,3.45-4.48,5.34-1.7,2.37-2.93,5.17-3.66,8.31l-.25,1.07-.19,1.12c-.13,.78-.25,1.48-.3,2.22l-.16,1.6-.07,.56c-.02,.12-.03,.25-.05,.38-.03,.23-.05,.44-.1,.66l-.25,1.12c-.46,1.56-1.01,2.85-1.69,3.91-.79,1.27-1.9,2.29-2.79,3.03-1.05,.87-2.17,1.6-3.21,2.28l-.33,.22c-.26,.17-.52,.33-.76,.5,.23-.18,.46-.34,.7-.52l.35-.26c1-.72,2.07-1.5,3.07-2.42,.87-.79,1.71-1.75,2.65-3.02,.91-1.25,1.54-2.52,1.87-3.78l.22-.99c.05-.24,.08-.49,.11-.75,.01-.13,.03-.25,.04-.37l.06-.52,.17-1.68c.06-.73,.17-1.45,.3-2.2l.06-.39c.01-.46,.03-.84,.05-1.21l.02-.22c.05-.65,.09-1.33,.18-1.97,.1-.75,.22-1.49,.36-2.2,.14-.68,.33-1.41,.54-2.15,.21-.7,.44-1.41,.71-2.12,.09-.24,.2-.49,.31-.73l.13-.3,.49-1.01,.54-.99,.6-.95,1.28-1.78-1.72,.46c-.62,.17-1.18,.33-1.71,.51-1.26,.43-2.35,.89-3.34,1.4-.47,.24-.97,.52-1.57,.89-.51,.31-.99,.66-1.45,1l-.29,.22c-.16,.12-.3,.23-.44,.34l-.68,.58c-.41,.36-.87,.74-1.39,1.16-.48,.38-.96,.74-1.44,1.08-.47,.33-.97,.67-1.49,1-.6,.37-1.09,.66-1.55,.91-.55,.31-1.12,.59-1.61,.82-.33,.16-.68,.32-1.07,.48,.52-.31,1.02-.63,1.5-.96,.86-.57,1.74-1.28,2.68-2.15,.16-.17,.3-.31,.44-.45,.27-.26,.53-.53,.79-.82l1.11-1.4c.78-1.07,1.55-1.98,2.39-2.8,.92-.9,1.91-1.69,2.93-2.35,1.1-.72,2.25-1.3,3.43-1.74,.55-.2,1.11-.38,1.87-.59,.6-.15,1.24-.33,1.9-.57,1.23-.46,2.4-1.09,3.46-1.88,.97-.72,1.89-1.62,2.73-2.68l.57-.78c.12-.15,.22-.33,.34-.53,.06-.1,.11-.18,.16-.26,.09-.15,.17-.28,.25-.41,.24-.39,.49-.8,.68-1.26,.54-1.07,.94-2.23,1.28-3.32,.59-2.01,.93-4.21,1.03-6.73,.11-2.38-.11-4.6-.28-6.07l-.19-1.36c-.05-.3-.1-.58-.15-.86l-.08-.45c-.1-.63-.25-1.22-.39-1.8-.05-.2-.1-.39-.14-.58-.12-.49-.25-.94-.38-1.37-.07-.24-.14-.46-.2-.68-.13-.41-.26-.78-.38-1.12l-.21-.6c-.4-1.02-.71-1.78-1-2.36l-.19-.39-.3-.07c-.53-.13-1.05-.29-1.52-.47l-.12-.05c-.37-.15-.72-.28-1.04-.45-.37-.17-.73-.36-1.11-.59-.62-.37-1.24-.81-1.92-1.36-.55-.48-1.05-.96-1.48-1.43-.23-.23-.41-.46-.58-.69l-.19-.24c-.12-.15-.22-.28-.31-.41l-.14-.21c-.24-.35-.44-.64-.59-.89l-.49-.88h-.39c-.15,0-.3,0-.44-.01-.74-.03-1.5-.11-2.32-.26-.52-.1-1-.21-1.47-.35-.31-.09-.62-.18-.93-.29l-.05-.02-.11-.02h-1.33s-1.12,.06-1.12,.06c-.31,0-.68,.05-1.07,.1l-1.1,.13-1.76,.3-.97,.21c-.66,.13-1.37,.31-2.04,.49-1.3,.33-2.78,.79-4.52,1.4-.25,.1-.48,.18-.72,.27-.59,.22-1.15,.43-1.7,.67l-1.21,.5-1.24,.56c-1.5,.71-3.26,1.57-4.97,2.65-.86,.55-1.63,1.05-2.36,1.63-.36,.27-.74,.57-1.12,.88-.38,.31-.76,.61-1.15,.9-1.83,1.39-3.36,2.44-4.82,3.32-1.83,1.11-3.47,1.96-5.04,2.61-.09,.04-.17,.08-.26,.11,.09-.04,.17-.08,.25-.12,1.52-.7,3.13-1.62,4.9-2.79,1.42-.93,2.89-2.04,4.63-3.47,.32-.26,.64-.53,.96-.8,.42-.35,.83-.7,1.27-1.05,.76-.63,1.53-1.15,2.38-1.73,1.7-1.13,3.47-2.05,4.96-2.8,1.8-.9,3.57-1.59,4.92-2.1,1.75-.63,3.25-1.11,4.58-1.46,.65-.18,1.39-.37,2.08-.51l1-.21,1.81-.3,2.4-.27-1.2-.93c-.28-.19-.55-.38-.81-.58l-.6-.5-.66-.62-.39,.03-1.34,.21c-.24,.06-.45,.1-.66,.14-.35,.07-.71,.15-1.1,.25l-.96,.24-1.05,.32c-.46,.13-.93,.3-1.39,.46-.27,.1-.54,.19-.82,.29l-.2,.08c-.71,.27-1.43,.54-2.15,.86-.53,.21-1.08,.47-1.61,.72-.25,.12-.49,.23-.73,.34-.31,.16-.61,.3-.9,.44-.45,.22-.96,.46-1.44,.73l-.09,.05,.1-.06c.55-.36,1.13-.7,1.69-1.02l.54-.32c.2-.1,.42-.22,.65-.34,.56-.3,1.11-.59,1.64-.83,.73-.36,1.46-.68,2.17-.98l.16-.07c.31-.13,.62-.25,.93-.36l.19-.07c.43-.16,.77-.28,1.08-.38l1.08-.35,.99-.27c.42-.12,.83-.2,1.22-.28,.21-.04,.39-.08,.57-.11l2.2-.3-1.8-.89c-.15-.07-.31-.15-.49-.23l-.43-.19-.56-.22c-.82-.32-1.81-.61-2.87-.85-1.18-.27-2.49-.44-3.89-.51h-.17c-1.53-.07-3.04,.02-4.49,.24-.36,.05-.76,.12-1.25,.23-.43,.08-.87,.2-1.25,.31-.4,.1-.81,.24-1.2,.37l-1.32,.46c-1.74,.61-3.58,1.07-5.47,1.37-1.62,.26-3.32,.36-5.08,.29-.25,0-.49-.02-.74-.04-1.87-.12-3.8-.44-5.74-.95-1.28-.34-2.52-.71-3.73-1.08l-.19-.06c-.5-.15-1-.3-1.49-.44-2-.61-3.6-1.06-5.05-1.4-1.81-.42-3.33-.67-4.65-.78-.34-.03-.68-.05-1.01-.06-1.08-.04-2.1,0-3.01,.14-.54,.07-1.09,.18-1.63,.32,.5-.25,1.04-.46,1.6-.65,1.68-.55,3.57-.77,5.78-.69,.21,0,.41,.02,.62,.03,2.33,.14,4.57,.59,6.46,1l.71,.16c.87,.2,1.68,.38,2.5,.54,1.24,.24,2.27,.42,3.24,.54,1.18,.15,2.16,.23,3.06,.27h.21c1.32,.04,2.33,.02,3.28-.06,1.14-.08,2.23-.24,3.24-.46,.44-.08,.9-.2,1.45-.36l1.51-.45-1.41-.7c-1.12-.55-2.23-1.2-3.28-1.93-1.37-.94-2.73-2.03-4.28-3.43-.92-.82-1.82-1.68-2.69-2.51l-.13-.12c-.39-.37-.79-.75-1.18-1.12-.19-.17-.38-.35-.58-.54,.96,.66,1.9,1.33,2.82,1.99l1.2,.86c1.63,1.16,3.37,2.36,5.19,3.29,1.65,.85,3.49,1.47,5.47,1.83,.85,.13,1.69,.21,2.51,.25,.92,.04,1.82,0,2.67-.08l.57-.07,.61-.1c.28-.05,.56-.12,.85-.19l.23-.06,.35-.09c.56-.15,1.14-.29,1.68-.39,1.17-.23,2.32-.36,3.41-.39l1.02-.03-.4-.87-.22-.36-.35-.69-.29-.72-.23-.74-.14-.63h-.62c-.18-.02-.37-.04-.55-.06-.15-.02-.3-.03-.45-.04-.42-.03-.84-.1-1.19-.17-.44-.08-.83-.15-1.2-.26-.13-.04-.26-.07-.39-.11-.28-.08-.55-.15-.79-.25-.15-.06-.29-.11-.44-.16-.26-.09-.51-.18-.73-.29-.13-.06-.27-.13-.4-.19-.27-.13-.51-.24-.74-.37-.11-.07-.23-.14-.35-.21-.25-.14-.49-.28-.72-.44-.09-.06-.19-.14-.3-.22-.27-.19-.49-.35-.71-.53-.09-.08-.2-.17-.31-.27-.23-.19-.43-.37-.62-.56-.09-.09-.19-.2-.29-.31-.2-.2-.39-.4-.55-.61-.08-.11-.17-.22-.26-.33-.18-.23-.35-.44-.48-.67l-.09-.14c-.21-.33-.4-.64-.55-.97l-.3-.63-.2-.59c-.13-.34-.2-.7-.28-1.08l-.04-.19c-.02-.09-.03-.18-.04-.28l-.03-.28-1.2-.79c-.38-.24-.72-.51-1.08-.79-.2-.16-.39-.31-.59-.45l-.82-.64-1.14-1.01c-.39-.34-.78-.69-1.11-1.06-.18-.19-.35-.36-.52-.54-.31-.32-.63-.65-.91-.98l-1.34-1.62-1.21-1.67c-.25-.36-.49-.75-.73-1.14-.12-.2-.25-.4-.37-.6-.22-.39-.45-.81-.68-1.23l-.09-.16-.17-.09c-.78-.43-1.51-.79-2.25-1.13-2.06-.93-4.35-1.73-6.8-2.37-4.09-1.06-8.55-1.7-13.24-1.88-.38-.01-.77-.03-1.15-.03h-.08c-.1-.01-.22-.04-.35-.09l-.38-.15-.06,.39c-2.4,16.07-17.95,23.92-32.06,23.37-2.43-.09-4.74-.45-6.88-1.05l-.67-.19,.22,.47-.75,.85c-1.47,1.3-2.96,3.07-4.64,5.54-1.34,1.97-2.57,4.16-3.67,6.49-1.14,2.48-2.02,4.76-2.68,6.96-.76,2.48-1.25,4.93-1.47,7.28l-.09,.9-.04,1.57h0s0,.22,0,.22h-.02s.02,.33,.02,.33v.25s.01,0,.01,0l.13,2.29c.04,.42,.11,.8,.17,1.17,.04,.23,.07,.43,.1,.64,.52,2.81,1.47,5.1,2.82,6.83,.08,.1,.14,.17,.2,.25,.13,.17,.26,.33,.41,.49l.42,.45,.23,.2,.73,.64c.18,.16,.36,.29,.53,.4,.08,.05,.16,.11,.24,.17,.1,.07,.17,.12,.25,.18,.2,.14,.36,.26,.54,.37l.81,.5c.38,.25,.79,.48,1.19,.7l.48,.27c1.01,.57,2.08,1.14,3.03,1.64,1.28,.68,2.58,1.37,3.83,2.1l.9,.53c1.91,1.12,3.88,2.28,5.89,3.27,1.21,.58,2.41,1.1,3.58,1.53,1.35,.47,2.57,.83,3.76,1.09,1.71,.37,3.45,.59,5.16,.66,.88,.03,1.77,.03,2.65-.02,2.36-.1,4.17-.11,5.88-.04,.68,.03,1.35,.07,1.98,.12,2.74,.21,5.35,.64,7.76,1.26,1.24,.31,2.48,.7,3.69,1.15-.84-.19-1.97-.4-3.39-.53-.73-.08-1.51-.13-2.31-.16-1.38-.05-2.82-.04-4.29,.04-1.38,.08-2.59,.2-3.7,.35-1.17,.16-2.4,.39-3.75,.71-.63,.16-1.28,.33-1.84,.52-.36,.13-.65,.27-.85,.41-.3,.19-.5,.44-.54,.7-.05,.17,0,.48,.15,.79,.1,.21,.25,.45,.46,.75,.25,.35,.55,.71,.83,1.07l.27,.34c.66,.85,1.37,1.74,2.11,2.64,.62,.78,1.25,1.53,1.76,2.14l.16,.2c1.15,1.37,2.23,2.58,3.06,3.41l.2,.19c.32,.31,.57,.55,.78,.72l.3,.26c.38,.29,.67,.49,.95,.65,.68,.45,1.47,.8,2.23,1.14l.17,.08c.29,.11,.55,.21,.8,.31,.59,.23,1.18,.46,1.8,.66,1.38,.49,2.82,.93,4.22,1.36l1,.31c1.49,.47,1.54,.55-.03,.09l-1.06-.31c-1.41-.41-2.83-.82-4.22-1.28-1.68-.56-3.45-1.19-5.06-2.17-.81-.49-1.54-1.1-2.19-1.64l-1.03-.87c-.36-.31-.68-.58-1.02-.89l-.65-.6c-1.15-1.06-2.23-2.05-3.39-3.04-.79-.68-1.45-1.24-2.09-1.73l-1.05-.84-2.17-1.63-1.25-.87c-.69-.48-1.4-.98-2.15-1.45-.27-.17-.54-.34-.8-.52-.49-.32-.99-.64-1.5-.94l-2.33-1.37c-.52-.3-1.05-.57-1.57-.85l-.12-.06c-.24-.13-.48-.25-.72-.38l-1.2-.64-1.25-.6-2.46-1.16-2.54-1.06c-1.19-.53-2.43-.97-3.63-1.4-.51-.18-1-.36-1.49-.54-.62-.24-1.26-.44-1.88-.63-.26-.08-.5-.15-.75-.23l-2.61-.81c-1.21-.33-2.4-.64-3.6-.95l-1.38-.36,.21,.98c.4,1.88,1,3.68,1.78,5.37,.96,2.08,2.24,4.08,3.8,5.96,1.54,1.84,3.27,3.51,5.16,4.96,.9,.71,1.8,1.32,2.96,2.08l3.02,2.05c2.32,1.6,4.21,2.95,5.95,4.23,2.35,1.73,4.13,3.11,5.77,4.48,.23,.2,.48,.41,.72,.62,.67,.57,1.36,1.16,1.99,1.81l1.15,1.15,1.39,1.48c.69,.71,1.37,1.38,2.07,2.08l1.77,1.75,1.26,1.3c.56,.56,1.09,1.16,1.61,1.75,.28,.32,.56,.64,.85,.95,.23,.28,.48,.59,.72,.89,.13,.17,.27,.34,.4,.51,.11,.14,.23,.29,.35,.45,.27,.33,.51,.64,.71,.96,.2,.31,.4,.6,.6,.89,.49,.71,.97,1.43,1.33,2.17l.89,1.64c.18,.34,.34,.69,.48,1.01,.1,.21,.18,.4,.27,.59,.85,1.92,1.66,3.97,2.61,6.64,.8,2.28,1.53,4.56,2.18,6.77,.22,.73,.42,1.47,.62,2.2l.03,.09c.1,.38,.21,.76,.31,1.14l.27,1.06c.2,.81,.4,1.59,.58,2.37,.08,.39,.18,.79,.27,1.19,.17,.75,0,1.08-.53-1.13-.18-.77-.39-1.53-.59-2.29l-.3-1.13-.21-.74c-.28-.83-.56-1.62-.86-2.43-.97-2.52-.84-5.9-1.99-8.09-1.57-3.01-4.49-4.77-6.41-7.38-2.44-3.28-5.16-6.22-8.09-8.72-.89-.77-1.74-1.44-2.52-2.01-.57-.41-.99-.67-1.39-.87-.04-.02-.1-.05-.15-.07l-1.06-.46,.15,1.1c.05,.36,.16,.79,.28,1.2l.13,.44c.11,.39,.23,.77,.32,1.16,.26,1.02,.5,2.09,.75,3.3,.95,4.7,1.52,9.36,1.68,13.85,.18,5.28-.23,9.96-1.24,14.29-.26,1.04-.58,2.27-1,3.47-.14,.41-.27,.81-.41,1.21-.25,.74-.52,1.49-.73,2.25-.8,2.66-1.24,4.96-1.35,7.03-.16,2.24,.2,4.52,1.11,6.98,.36,1,.76,2.16,1.03,3.29,.29,1.06,.7,2.1,1.1,3.11l.06,.15c.27,.68,.55,1.36,.82,2.03l.03,.07c.56,1.38,1.13,2.77,1.64,4.13,.78,2.04,1.46,4.08,2.04,6.07,1.22,4.2,1.83,8.07,1.81,11.5,.01,1.4-.13,2.74-.26,4.04-.04,.39-.08,.76-.11,1.13-.15,1.46-.28,2.98-.39,4.65l-.1,1.46c-.06,.93-.12,1.81-.19,2.65-.11,1.43-.27,2.52-.5,3.44-.15,.53-.31,.99-.51,1.39-.19,.38-.45,.73-.76,1.02-.36,.33-.81,.56-1.34,.67l-.27,.06,.06,1.13,.27,.03c.57,.07,1.15,.14,1.73,.18,.58,.05,1.16,.08,1.72,.11Z" />
                                <path className="cls-89"
                                    d="M314.29,949.68l.27-.02s0,0,0,0c0,0,.08,0,.25-.03l.12-.02c.18-.02,.38-.07,.56-.11l.19-.04c.58-.17,1.08-.41,1.51-.7,.91-.63,1.58-1.65,1.93-2.94,.32-1.19,.39-2.68,.19-4.32-.18-1.5-.57-3.1-1.15-4.77-.28-.81-.6-1.64-.96-2.45-.14-.34-.3-.67-.46-1.01l-.09-.19-.63-1.25c-1.74-3.39-3.22-7.29-4.29-11.29-1.11-4.04-1.94-8.21-2.76-12.48-.7-3.67-1.38-7.46-2.04-11.12l-.44-2.44c-.36-2-.69-3.87-1.14-5.75-.5-2.13-1.1-4.2-1.79-6.17-1.44-4.11-3.29-7.85-5.5-11.11-2.08-3.11-4.7-5.97-7.78-8.51-1.41-1.15-2.89-2.19-4.39-3.1-1.47-.9-2.97-1.7-4.43-2.38-2.61-1.18-5.34-2.13-8.37-2.91-2.73-.71-5.17-1.13-6.76-1.37-1.04-.16-2.09-.29-3.22-.42-8.17-.23-13.67,1.83-16.36,6.12-.24,.43-.45,.84-.65,1.25-.66,1.41-1.11,2.51-1.48,3.58-.47,1.26-.83,2.55-1.13,3.64-.11,.37-.21,.77-.3,1.16-.06,.24-.11,.45-.16,.66l-.39,1.86-.32,1.87-.26,1.87-.2,1.88-.14,1.88-.07,1.88v1.88c0,.41,.01,.81,.03,1.21,.01,.22,.02,.45,.03,.67,.02,.41,.05,.81,.09,1.21,.02,.23,.04,.45,.06,.66,.15,1.4,.33,2.62,.55,3.73,.07,.45,.18,.91,.29,1.35l.11,.47c.13,.62,.32,1.23,.5,1.81l.26,.87,.32,.9c.21,.59,.42,1.18,.69,1.76,.4,.99,.92,2.05,1.63,3.32,.11,.19,.21,.36,.31,.53l.04,.07c.19,.34,.39,.68,.6,1.01l1.02,1.52,1.14,1.48c.25,.32,.52,.62,.79,.92,.15,.16,.29,.32,.43,.48,.29,.35,.62,.67,.93,.98,.12,.12,1.02,1.02,1.02,1.02l.73,.63c.7,.64,1.46,1.22,2.21,1.78,.24,.18,.47,.35,.69,.52,.34,.27,.55,.66,.57,1.09,.01,.12,0,.21,0,.29,0,.19,0,.39,.04,.61l.03,.2c.03,.23,.07,.47,.16,.73l.1,.36,.2,.49c.08,.24,.22,.49,.34,.71l.08,.15c.09,.19,.22,.39,.35,.56,.06,.09,.12,.16,.16,.24,.13,.2,.28,.37,.42,.54,.07,.09,.14,.16,.2,.24,.16,.19,.31,.33,.46,.48,.09,.08,.17,.16,.24,.24,.18,.17,.34,.3,.5,.43,.1,.08,.19,.15,.27,.22,.19,.15,.36,.26,.54,.38,.13,.09,.22,.14,.3,.2,.2,.13,.39,.24,.59,.34,.13,.07,.22,.12,.3,.16,.2,.12,.41,.21,.62,.29,.11,.05,.21,.09,.31,.14,.23,.12,.48,.19,.7,.26,.09,.03,.19,.06,.28,.09,.33,.13,.67,.2,1,.27,.32,.08,.69,.17,1.08,.2,.1,0,.2,.03,.3,.04,.22,.03,.42,.06,.63,.07h.11s1.04,.05,1.04,.05c.44,.02,.79,.35,.84,.78l.07,.58,.13,.61,.17,.6,.22,.58,.27,.57,.31,.54,.35,.52,.18,.22c.07,.09,.15,.19,.23,.28,.29,.32,.59,.61,.9,.87,.33,.26,.67,.51,1.03,.72,.35,.2,.73,.39,1.13,.56l.58,.21,.61,.18c.31,.09,.55,.33,.64,.64,.11,.42,.21,.83,.36,1.23,.04,.14,.11,.31,.18,.49l.05,.12c.08,.21,.18,.43,.29,.63,.18,.38,.41,.76,.62,1.11,.27,.43,.56,.81,.78,1.09l.44,.5,.47,.49c.32,.31,.66,.6,1.03,.9,.4,.32,.77,.58,1.12,.81,.34,.23,.73,.46,1.18,.7,.36,.2,.77,.4,1.25,.61,.41,.18,.83,.34,1.31,.5,.82,.28,1.71,.51,2.72,.7,.47,.08,.94,.14,1.42,.18,.2,.02,.4,.03,.61,.04,.07,0,.14,0,.21,0l.31,.44c.07,.1,.14,.2,.21,.31l.21,.27c.22,.29,.47,.62,.77,.95,.3,.37,.7,.78,1.23,1.28,.57,.53,1.07,.93,1.57,1.27,.55,.39,1.17,.76,1.83,1.08,.64,.3,1.34,.6,2.09,.81,.74,.23,1.52,.36,2.19,.46,.39,.06,.8,.1,1.3,.12,.3,.01,.6,.01,.9,.02,.72,.01,1.39-.06,2.04-.14,.68-.08,1.25-.21,1.8-.33l.12-.03c.94-.25,1.78-.56,2.44-.9,.08,.2,.18,.4,.28,.6,.45,.84,1.27,2.03,2.66,2.89,.74,.45,1.57,.71,2.33,.74,.06,0,.3,0,.3,0Z" />
                                <path className="cls-90"
                                    d="M136.19,804.74c2.41-.99,4.84-1.87,7.23-2.62,2-.63,4.13-1.22,6.35-1.76l.42-.1-.23-.36c-.07-.12-.16-.25-.24-.38-.21-.33-.42-.67-.63-1.03-.74-1.27-1.48-2.64-2.2-4.07-.73-1.45-1.53-3.16-2.51-5.38-.88-2.01-1.81-4.17-2.7-6.46-.97-2.44-1.89-4.9-2.76-7.31l-.69-1.93-.42-1.22-.27-.65c-.18-.5-.38-.85-.57-1.18-.08-.14-.16-.28-.24-.44v-.02s-.24-.31-.24-.31c-.28-.39-.58-.78-.95-1.12-.91-.88-2-1.53-3.12-1.87-.55-.17-1.13-.27-1.72-.29-.68-.03-1.35,.05-1.99,.23-1.2,.31-2.31,1-3.19,1.97l-.31,.34c-.08,.09-.14,.18-.21,.28-.03,.04-.05,.09-.08,.13l-.41,.61-.03,.05s-.1,.22-.12,.28c-.06,.13-.11,.25-.14,.35-.02,.12-.04,.22-.07,.32-.03,.06-.04,.18-.05,.3,0,.05-.01,.1-.02,.14,0,.07-.02,.12-.02,.17-.02,.11-.03,.22-.03,.34-.07,1.08,.01,2.33,.27,3.93,.19,1.17,.47,2.45,.87,3.92,.61,2.29,1.38,4.68,2.36,7.3,.76,2.02,1.61,4.11,2.61,6.4,1.37,3.16,2.89,6.28,4.51,9.28,.39,.72,.78,1.41,1.17,2.06l.14,.23,.25-.1Z" />
                                <path className="cls-88"
                                    d="M159.7,801.19c2.93-.44,5.73-.79,8.32-.98,3.59-.27,6.32-3.27,9.64-3.19h.54s-.23-.47-.23-.47c-.18-.39-.37-.81-.56-1.26-1.29-3.07-2.65-7.54-3.94-12.93-1.18-4.9-2.42-10.94-3.8-18.48l-.94-5.15-.24-1.29-.14-.68h0s-.14-.55-.14-.55c-.09-.39-.18-.62-.27-.86l-.08-.22-.23-.53-.28-.51c-.78-1.32-1.95-2.41-3.4-3.16-1.32-.69-2.87-1.09-4.48-1.15h-.24c-1.7-.04-3.35,.32-4.75,1.03-1.44,.71-2.65,1.89-3.34,3.22-.62,1.21-.82,2.73-.6,4.65,.17,1.55,.55,3.15,.92,4.71l.65,2.79c.18,.78,.39,1.58,.59,2.36l1.24,4.74c.87,3.33,1.58,6.16,2.15,8.65,.63,2.74,1.18,5.2,1.57,7.4,.47,2.63,.72,4.38,.83,5.86,.08,1.06,.71,4.88,.82,5.67l-.02,.41,.4-.06Z" />
                                <path className="cls-87"
                                    d="M244.7,891.28l-.29-.97c-.18-.6-.38-1.27-.53-1.95l-.11-.47c-.12-.49-.24-1.01-.32-1.51-.23-1.22-.42-2.53-.56-4.02-.02-.23-.03-.46-.05-.7-.04-.44-.07-.87-.08-1.31,0-.23-.01-.45-.02-.68-.01-.44-.03-.89-.02-1.33l.05-2.02c.04-.66,.09-1.33,.15-2,.08-.66,.16-1.33,.25-1.99l.09-.55c.08-.47,.16-.95,.25-1.42l.45-1.96,.17-.59c.13-.45,.25-.89,.38-1.33,.36-1.17,.82-2.4,1.4-3.74,.24-.55,.53-1.19,.86-1.79,.31-.6,.62-1.19,.97-1.74,.18-.31,.37-.6,.56-.89l.08-.12-1.27-4.03c-.15-.43-.32-.87-.49-1.33-.1-.25-.2-.51-.3-.78-.12-.32-.25-.65-.37-.98-.46-1.22-.98-2.61-1.65-4.02l-1.25-2.8s-1.71-3.28-1.8-3.46c-.17-.33-.34-.66-.53-.99l-2.28-3.84-.52-.77c-.25-.37-.5-.74-.75-1.11-.44-.65-.89-1.33-1.36-1.99l-2.31-3.07-2.51-3-2.68-2.89c-.35-.34-.68-.67-1.01-1-.59-.59-1.2-1.19-1.82-1.77-.3-.27-.6-.55-.9-.82-.65-.6-1.33-1.22-2.03-1.8l-1.47-1.25-1.51-1.2c-.67-.55-1.37-1.07-2.05-1.58-.32-.24-.64-.48-.96-.72l-3.28-2.37c-.38-.27-.78-.56-1.22-.91-.54-.43-1.02-.87-1.44-1.32-2.06-2.16-2.99-4.62-3.4-6.31-.46-1.85-.62-3.78-.49-5.89,.08-1.46,.27-2.86,.6-4.42,.21-.96,.45-1.86,.72-2.76l.06-.19-.14-.17-.4-.36c-.4-.34-.79-.69-1.18-1.03-.75-.66-1.53-1.34-2.32-1.98l-.52-2.16c-.9-.75-1.09-.81-1.97-1.49l-.91-.71c-1.05-.83-1.88-1.49-2.88-2.2-.35-.25-.7-.53-1.03-.77-.39-.29-.86-.77-1.24-1.03l-.3-.21-.16,.34c-.32,.7-1.08,3.05-1.51,4.1l-.26,.64c-.21,.5-.42,1.07-.63,1.66-.12,.33-.25,.68-.38,1.03-.06,.18-.13,.36-.2,.53-.12,.33-.25,.67-.36,1.02l-1.08,3.48c-.07,.26-.2,.61-.32,.94l-.03,.09c-.09,.26-.2,.5-.32,.74l-.15,.32c-.83,1.64-1.91,2.92-3.2,3.78-.75,.55-1.59,.91-2.4,1.22-.95,.31-1.8,.5-2.6,.59-.45,.06-.9,.11-1.34,.12-.52,.03-.91,.03-1.28,.02l-.76-.02-1.91-.08c-3.31-.12-6.93-.04-10.74,.26-3.6,.27-7.44,.79-11.41,1.54-4,.77-7.88,1.74-11.52,2.9-3.9,1.23-7.6,2.69-11.01,4.34-3.85,1.89-7,3.84-9.63,5.97-1.57,1.26-2.83,2.46-3.86,3.66-1.17,1.35-2.09,2.65-2.91,4.1-1.52,2.69-2.42,5.68-2.6,8.66-.16,2.52,.15,5.09,.94,7.63,.58,1.89,1.41,3.71,2.47,5.43,.94,1.48,1.78,2.44,2.31,2.99,.29,.28,.53,.52,.7,.67l.31,.27s.08,.08,.12,.13l.13,.16h.15c1.72-.08,3.14-.16,4.45-.25,4.86-.33,9.36-.81,13.36-1.43,1.87-.28,3.76-.61,5.61-.97l.09-.02,.07-.06c.25-.24,.54-.52,.89-.81,.13-.11,.27-.23,.4-.35,.31-.27,.66-.58,1.06-.87,1.16-.94,2.59-1.92,4.25-2.93,1.87-1.1,3.9-2.06,6.03-2.86,2.5-.93,5.07-1.6,7.62-2.01,2.89-.46,5.84-.64,8.76-.53,3.21,.13,6.33,.56,9.28,1.28,3.09,.73,6.16,1.79,9.14,3.17,.67,.32,1.44,.69,2.19,1.1,.58,.3,1.05,.58,1.55,.87l.56,.33c1.37,.83,2.72,1.74,3.99,2.7,2.59,1.95,4.89,4.14,6.84,6.5,1.92,2.33,3.53,4.84,4.79,7.45,1.12,2.28,2.02,4.7,2.77,7.41,.57,2.1,1,4.23,1.3,6.52,.24,1.86,.39,3.57,.45,5.08,.08,1.73,.08,2.87,.08,3.28v.93s-1.85,2.26-1.85,2.26c.47,.57,.55,3.01,1.04,3.55l.67,1.54,2.36,1.94c.66,.6,1.45,1.49,2.18,2.08,.33,.28,.3,.29,.65,.55l1.37,1.39c.39,.3,1.77,.33,2.15,.59,.63,.45,.38,2.87,.97,3.25l1.29-3.83,1.7,2.39c2.3,.13,1.25-1.29,3.39-.95,2.48,.4,4.87,.94,7.11,1.61,1.92,.58,3.69-.4,5.44,.4l1.36-3.56-.48-1.36Z" />
                                <path className="cls-93"
                                    d="M222.36,752.89c.37-.66,.8-1.44,1.19-2.3,1.04-2.22,1.43-4.11,1.2-5.78-.06-.48-.19-.97-.4-1.5l-.25-.56-.04-.08c-.09-.14-.15-.23-.21-.33-.11-.18-.23-.37-.34-.53-.17-.2-.31-.37-.45-.55l-.61-.59-.68-.52-.74-.45c-1-.54-2.15-.9-3.33-1.04-.28-.03-.55-.05-.83-.07-.91-.04-1.76,.05-2.52,.26-.15,.04-.29,.09-.42,.14-.1,.03-.2,.07-.3,.1l-.1,.04-.59,.28-.25,.16-.31,.2-.36,.3c-.08,.07-.14,.12-.19,.17-.02,.02-.04,.04-.07,.07-.12,.11-.26,.26-.4,.42l-.1,.11c-.11,.12-.21,.24-.31,.37-.06,.07-.11,.14-.17,.2-.28,.37-.56,.76-.86,1.2-.97,1.45-1.71,2.8-2.25,3.78l-.14,.25-.49,.87,.28,.16c1.61,.85,3.18,1.7,4.66,2.55,2.79,1.58,5.69,3.29,8.61,5.07l.27,.16,1.49-2.58Z" />
                                <path className="cls-92"
                                    d="M186.41,752.19c1.14-2.14,3.22-5.03,6.68-6.67,1.75-.85,3.74-1.26,5.75-1.18,1.42,.05,2.79,.35,4.09,.87,1.39,.59,2.9,1.32,4.9,2.38,1.62,.87,3.27,1.79,4.91,2.73,3.24,1.87,6.56,3.87,9.87,5.95,1.79,1.12,3.4,2.16,4.93,3.19,.85,.57,1.64,1.11,2.4,1.67,.83,.6,1.85,1.22,3.17,1.35,.05,0,.1,0,.16,0,.61,.02,1.23-.09,1.75-.33,.54-.24,1.04-.61,1.5-1.1,.36-.39,.69-.85,.99-1.39l.71-1.39,1.33-2.72c.16-.32,.32-.64,.48-.96,.28-.57,.56-1.14,.86-1.71l1.42-2.67c.45-.83,1-1.55,1.61-2.15,1.21-1.19,2.86-2.06,4.78-2.53,1.42-.34,2.97-.49,4.61-.42,.35,.01,.69,.04,1.04,.07,1.89,.17,3.79,.56,5.64,1.17,.92,.3,1.83,.65,2.68,1.04,.44,.2,.86,.4,1.27,.61l.67,.37,.58,.34c1.54,.96,2.98,2.17,4.3,3.61,2.72,2.98,4.4,6.41,4.74,9.68,.18,1.72-.08,3.48-.72,4.96l-.05,.13c-.06,.13-.11,.27-.21,.44l-.31,.59-.71,1.28c-.43,.76-.88,1.59-1.37,2.55-3.57,6.84-6.33,13.77-8.19,20.58-.93,3.38-1.64,6.77-2.13,10.09-.46,3.2-.71,6.44-.75,9.63-.04,3.04,.12,6.03,.46,8.89,.32,2.6,.81,5.26,1.46,7.91,1.11,4.29,2.65,8.41,4.58,12.23,1.53,3.05,6.54,11.28,7.79,13.16l.31,.47h-.56c-1.13,.03-2.84-1.33-3.94-1.22,.08,0-3.6-.52-3.51-.51-6.27-.18-12.07,.49-15.13,1.93-.2-.51-.64-2.19-.64-2.19-.16-.44-.34-.89-.53-1.36-.11-.26-.21-.53-.32-.81-.13-.32-.26-.65-.39-.98-.5-1.27-1.07-2.71-1.8-4.17l-1.35-2.9s-1.82-3.4-1.92-3.58c-.18-.34-.36-.68-.55-1.01l-2.43-3.97-.55-.79c-.26-.37-.51-.74-.77-1.11-.48-.69-.97-1.41-1.47-2.1l-2.45-3.17-2.65-3.09-.92-.97c-.64-.67-1.27-1.35-1.91-2-.35-.33-.7-.67-1.04-1-.63-.61-1.27-1.24-1.93-1.82-.31-.27-.62-.55-.93-.82-.69-.62-1.41-1.26-2.14-1.84l-1.54-1.28-1.57-1.22c-.72-.57-1.45-1.11-2.16-1.64l-.05-.03-.12-.13v-.14c-.03-.24-.06-.5-.06-.78,0-.28-.02-.58-.03-.9-.02-.57-.05-1.21-.04-1.87l.02-1.56c0-.35,.02-.69,.04-1.04,.01-.19,.02-.38,.03-.58,.03-.66,.06-1.17,.11-1.63l.14-1.57,.17-1.45c.04-.34,.08-.66,.13-.96l.18-1.19,.34,.09c.67,.19,1.31,.3,1.91,.35,.13,.01,.26,.02,.39,.02,.97,.04,1.97-.09,2.97-.36,.87-.28,1.64-.63,2.29-1.05,0,0,.37-.24,.41-.27l-.46,.12c-.67,.18-1.49,.3-2.39,.36-.2,0-.41,0-.63,0-.8-.03-1.58-.15-2.32-.35-1.05-.3-2.1-.79-3.14-1.45-1.1-.69-2.17-1.48-3.17-2.35l-.79-.68-.82-.77-1.64-1.55c-1.15-1.08-2.33-2.16-3.43-3.17-.4-.35-.79-.7-1.18-1.05-.76-.68-1.55-1.38-2.34-2.04l-.12-.1c-1.16-.98-2.26-1.91-3.39-2.78l-.24-.19c-1.08-.85-2.11-1.66-3.14-2.38-.37-.26-.73-.52-1.08-.78-.7-.52-1.36-1-2.04-1.43l-5.69-2.62,3.71-.84c1.08-.24,1.5-.8,2.47-1.3,1.85-.95,3.76-1.55,5.08-3.13,1.92-2.29,4.24-2.74,4.89-4.65-.36,.69-.78,1.43-1.26,2.17-.96,1.46-1.9,2.59-2.97,3.56-1.39,1.29-3.04,2.29-4.76,2.9-1.45,.5-2.98,.74-4.45,.68-.59-.02-1.18-.09-1.75-.21-.27-.05-.54-.12-.8-.2l-.39-.12-.33-.12c-.08-.03-.18-.07-.28-.12l-.54-.24v-.02c-.25-.14-.49-.3-.68-.42-.94-.63-1.76-1.51-2.38-2.53-.64-1.06-1.11-2.24-1.39-3.53-.27-1.31-.38-2.69-.3-4.09,.14-2.84,.99-5.8,2.45-8.58Z" />
                                <path className="cls-32"
                                    d="M252.08,930.76c1.76,.07,3.46-.05,5.07-.34,1.68-.32,3.38-.83,5.08-1.52l1.21-.49c.43-.17,.82-.32,1.22-.44,.37-.12,.8-.26,1.23-.36,.48-.13,.86-.22,1.21-.28,1.52-.31,3.07-.48,4.61-.48,.34,0,.67,0,.99,.02,.98,.04,1.96,.14,2.93,.31,.73,.12,1.44,.28,2.11,.46l.56,.15-.25-.72-.05-.15-.15-.05c-.16-.06-.32-.11-.48-.17l-.17-.06c-.49-.2-.96-.43-1.4-.68-.45-.26-.88-.56-1.29-.89-.29-.24-.59-.52-.92-.86l-.08-.08-.49-.06c-.22-.02-.44-.03-.69-.04-.15,0-.59-.03-.59-.03-1.01-.04-2.02,.02-3,.16-.5,.07-1.03,.18-1.59,.3l-.34,.07-.24,.05c-.27,.05-.55,.11-.85,.15l-.55,.07-.58,.04c-.62,.04-1.26,.05-1.9,.03-1.02-.04-2.08-.17-3.13-.38-.18-.05-.38-.1-.58-.15-.67-.18-1.37-.36-2.03-.64-.77-.25-1.46-.61-2.2-.99l-.42-.21c-1.45-.8-2.85-1.83-4.21-2.83l-.69-.51-1.01-.75c-1.08-.81-2.19-1.64-3.31-2.43l-.38,.49c.34,.28,.67,.56,.99,.84,.44,.38,.88,.76,1.31,1.15,.89,.78,1.81,1.59,2.74,2.36,1.55,1.28,2.96,2.31,4.3,3.16,1.59,.99,3.18,1.77,4.75,2.31l.9,.37-.89,.32c-.96,.35-1.99,.69-3.06,.9-.99,.22-2.05,.37-3.16,.44-1,.08-1.98,.06-2.73,.03l-.45-.02c-.92-.05-1.92-.15-3.14-.34-2.04-.31-4.07-.82-6.14-1.36-1.79-.45-3.92-.94-6.14-1.13-.35-.03-.7-.05-1.05-.07-.72-.03-1.41-.02-2.06,.03-1.13,.08-2.13,.25-3.06,.54-.45,.14-.91,.31-1.35,.51l.24,.57c.44-.17,.83-.29,1.22-.39,1.1-.29,2.38-.42,3.82-.39h.16c1.38,.06,2.84,.25,4.35,.58,1.37,.29,2.88,.69,4.89,1.32,.53,.17,1.06,.34,1.59,.51,1.15,.37,2.34,.75,3.54,1.09,1.87,.53,3.69,.85,5.39,.97,.13,0,.26,.01,.39,.02Z" />
                                <path className="cls-32"
                                    d="M291.33,991.76c.07-.18,.14-.36,.21-.54,.08-.23,.18-.45,.3-.68,.06-.13,.12-.25,.18-.38,.06-.11,.12-.24,.18-.37,.11-.23,.21-.45,.33-.65l.15-.27c.33-.58,.67-1.18,1.05-1.73,1.28-1.97,2.78-3.74,4.23-5.45,.49-.58,.98-1.16,1.46-1.74,.93-1.11,1.86-2.28,2.76-3.46,.28-.38,.56-.76,.84-1.15,.15-.21,.3-.42,.45-.63,.27-.37,.51-.77,.75-1.15,.13-.21,.26-.42,.39-.62,1.33-2.28,2.3-4.8,2.91-7.5,.54-2.38,.78-4.8,.73-7.19-.04-2.23-.23-4.28-.56-6.09-.27-1.56-.63-3.11-1.08-4.58-.19-.64-.36-1.18-.53-1.65l-.13-.36c-.11-.31-.21-.59-.32-.84l-.27-.68-.22,.02c-.51,.03-1.01,.04-1.5,.02l-.57-.03,.14,.43c.12,.37,.25,.79,.4,1.25l.15,.56c.11,.39,.22,.81,.33,1.25,.05,.22,.1,.47,.16,.71,.1,.46,.21,.93,.3,1.43l.1,.6c.11,.6,.21,1.22,.29,1.87l.06,.46c.04,.29,.08,.58,.11,.88l.12,1.41c.1,1.49,.21,3.77,0,6.2-.17,1.87-.46,4.33-1.25,6.81-.37,1.09-.8,2.26-1.39,3.39-.19,.44-.43,.82-.69,1.23-.08,.13-.17,.27-.25,.4-.06,.09-.12,.19-.18,.29-.1,.17-.2,.33-.33,.5l-.56,.75c-.82,1.01-1.71,1.88-2.74,2.67-1.03,.78-2.16,1.4-3.36,1.84-.64,.24-1.31,.42-1.83,.55-.67,.19-1.27,.39-1.78,.59-1.12,.44-2.22,1.03-3.27,1.75-.97,.66-1.91,1.46-2.79,2.36-.91,.94-1.69,1.97-2.26,2.77l-1.09,1.4c-.24,.28-.52,.57-.79,.85l-.3,.3,.41,.46,.22-.17c.2-.15,.4-.29,.59-.45,.44-.35,.89-.73,1.33-1.12,.49-.43,.9-.82,1.28-1.18l.64-.6c.14-.13,.3-.26,.45-.4l.23-.2c.45-.37,.93-.72,1.42-1.05,.57-.38,1.06-.67,1.52-.92,1.93-1.07,4.18-1.85,6.69-2.32l.86-.19-1.21,1.57-.63,.9-.58,.93-.54,.95-.5,.98-.45,1c-.29,.68-.56,1.38-.8,2.07-.18,.52-.35,1.08-.54,1.77l.59,.2Z" />
                                <path className="cls-91"
                                    d="M205.11,1108.19c.27-.06,.53-.13,.78-.21,.48-.17,1.18-.47,1.68-1.14,.44-.57,.75-1.39,.94-2.5,.3-1.68,.42-3.75,.56-6.14l.13-2.13-.08-.06,.03-.7v-.8c-.02-.62-.05-1.12-.09-1.59-.08-.98-.22-2-.41-3.14-.26-1.56-.62-3.24-1.1-5.14l-.09-.37-.34,.16c-1.4,.67-2.75,1.51-4.02,2.5-.44,.35-.79,.66-1.12,.95-.4,.37-.74,.71-1.04,1.05-.11,.11-.21,.24-.31,.36-.05,.07-.11,.13-.16,.2-.12,.14-.22,.28-.32,.42-.61,1.16-1.17,2.32-1.71,3.45l-.45,.94c-.71,1.48-1.57,3.19-2.65,4.74-.62,.86-1.2,1.51-1.82,2.03-.75,.63-1.58,1.07-2.39,1.27-.37,.09-.77,.14-1.21,.15l-.13,.59c2.8,1.37,5.4,2.45,7.95,3.3,2.45,.81,4.89,1.42,7.27,1.8h.06s.06,0,.06,0Z" />
                                <path className="cls-79"
                                    d="M209.07,1090.45v-.26c-.01-.15-.02-.3-.03-.45-.11-1.92-.32-3.94-.68-6.31l-.2-.74-.56,.32c-1.68,.98-3.22,2.19-4.7,3.71-.16,.17-.31,.34-.46,.52l-.15,.17-.49-.37c.5-.78,.98-1.44,1.46-2.03,.25-.3,.51-.6,.88-.98,.33-.34,.63-.71,.9-1.09,.52-.76,.92-1.61,1.19-2.54,.46-1.62,.57-3.42,.34-5.5-.18-1.63-.57-3.38-1.19-5.33-.51-1.61-1.16-3.27-1.97-5.07-.71-1.58-1.52-3.21-2.43-4.86-1.79-3.23-3.78-6.29-5.92-9.11-1.04-1.35-2.18-2.72-3.5-4.16-.45-.49-.9-.97-1.34-1.46-.76-.82-1.55-1.67-2.3-2.52-1.27-1.44-2.36-2.81-3.32-4.19-.97-1.39-1.89-2.87-2.8-4.54l-.68-1.21-.34,1.35c-.1,.4-.2,.8-.3,1.21-.18,.73-.36,1.46-.55,2.19l-.03,.1c-.29,1.08-.58,2.19-.9,3.27-.2,.72-.42,1.43-.64,2.15-.12,.4-.25,.8-.37,1.21l-.22,.68c-.28,.87-.56,1.77-.87,2.64-.4,1.17-.82,2.32-1.19,3.29l-.07,.18c-.39,1.01-.8,2.05-1.23,3.06-.38,.94-.82,1.93-1.4,3.2-.47,1.02-.97,2.04-1.53,3.14-.59,1.13-1.13,2.13-1.68,3.06-.71,1.22-1.28,2.13-1.84,2.96-1.5,2.25-2.83,4.01-4.21,5.53-.8,.89-1.62,1.71-2.46,2.44-.36,.31-.84,.71-1.35,1.06l-.34,.22-.28,.16-.08,.04c-.23,.12-.48,.22-.77,.32-.56,.18-1.13,.26-1.71,.24-.54-.02-1.06-.13-1.54-.33-.8-.32-1.46-.92-1.82-1.64l-.32-.63,.68,.19c.29,.08,.59,.13,.88,.14,.14,0,.29,0,.43,0,.67-.05,1.35-.27,2.04-.64,.35-.19,.71-.44,.88-.57,.19-.15,.36-.29,.54-.44l.58-.48c.17-.14,.35-.28,.51-.43l.78-.72c1.95-1.84,3.79-4,5.45-6.41,1.51-2.19,2.92-4.65,4.18-7.32,1.17-2.46,2.2-5.1,3.07-7.85,1.67-5.26,2.79-10.81,3.33-16.5,.27-2.85,.37-5.69,.32-8.43-.07-3.27-.31-5.94-.73-8.43l-.75-4.12-.15-.96c-.16-1.03-.33-2.1-.46-3.16-.34-2.55-.63-5.26-.89-8.31l-.67-8.35c-.22-2.53-.49-5.47-.99-8.37l-.09-.49c-.09-.52-.19-1.07-.32-1.61l-.24-1.05c-.05-.22-.12-.44-.18-.65l-.39-1.38-.29-.99c-.14-.44-.26-.89-.38-1.34-.06-.22-.12-.44-.18-.67-.72-2.77-1.27-5.55-1.76-8.14-.57-3.16-1.01-5.78-1.38-8.23-.24-1.61-.49-3.3-.7-5.02-.06,1.77,0,3.5,.07,5.07v.18s-1,.63-1,.63c-.58,.33-1.5,1.02-2.67,1.92l-.56,.48c-.39,.33-.8,.69-1.21,1.06-.21,.21-.42,.42-.64,.64-.43,.42-.87,.85-1.31,1.32-1.16,1.27-2.67,3.01-4.12,5.13l-1.04,1.51-.99,1.66c-.52,.82-.97,1.7-1.45,2.63-.15,.3-.3,.59-.46,.9-.23,.41-.41,.84-.6,1.29-.08,.2-.17,.4-.25,.59-.1,.23-.2,.46-.3,.69-.18,.42-.37,.85-.53,1.27l-1.1,3.11c-.07,.23-.13,.46-.2,.69l-.71,2.57c-.13,.46-.22,.93-.32,1.43-.05,.27-.1,.54-.16,.8-.05,.27-.11,.54-.16,.82-.1,.48-.2,.97-.26,1.46l-.44,3.49-.18,3.58c-.03,.42-.02,.84-.01,1.16l.03,1.2,.05,2.39c.02,.57,.05,1.15,.07,1.73,.04,1,.09,2.01,.11,3.01,0,.49,0,.99,0,1.48,.01,1.05,.02,2.14-.05,3.2-.12,3.66-.55,6.53-1.34,9.01-.38,1.28-.86,2.52-1.33,3.73-.54,1.41-1.06,2.74-1.42,4.11l-.61-.13,.02-.44c.02-.28,.03-.56,.04-.83,0-.25,.02-.5,.03-.74,0-.16,.02-.31,.02-.46l.04-1.08c.03-.67,.04-1.23,.04-1.61v-.03s-.09,.44-.09,.44c-.07,.33-.15,.73-.23,1.17-.1,.6-.23,1.41-.33,2.27-.08,.8-.17,1.71-.18,2.63v.38c-.02,.33-.03,.64-.01,.95l.07,1.32c.01,.27,.05,.54,.1,.8,.02,.13,.04,.26,.06,.38l.2,1.07c.06,.26,.14,.51,.21,.73l.1,.29c.07,.2,.13,.37,.19,.52l.1,.27v.05c.06,.19,.12,.37,.17,.56,.03,.1,.34,1.11,.34,1.11,.14,.43,.24,.82,.34,1.21l.1,.38c.21,.91,.34,1.89,.41,3,.04,.86-.03,1.72-.19,2.68-.03,.12-.06,.23-.09,.35-.07,.26-.13,.54-.25,.78-.03,.06-.05,.12-.07,.18-.04,.12-.08,.23-.14,.33l-.11,.21c.31-.47,.59-1.07,.83-1.83,.23-.85,.35-1.76,.37-2.7,0-.98-.1-2.02-.3-3.09l-.03-.15c-.11-.5-.22-1.01-.38-1.48,0,0-.3-1.03-.33-1.12-.05-.18-.11-.36-.15-.53-.6-2.33-.6-4.92,0-7.48,.35-1.59,.9-3.16,1.49-4.82,.38-1.07,.77-2.18,1.11-3.32,.78-2.65,1.24-5.6,1.4-9.05,.08-1.06,.09-2.16,.1-3.22,0-.5,0-1,.01-1.49-.01-1.01-.04-2.02-.07-3.03-.02-.57-.03-1.14-.05-1.73,0-.5,0-1.01,0-1.51,0-1.05-.02-2.14,.04-3.21l.27-3.51,.52-3.42c.07-.5,.19-.99,.3-1.47,.06-.26,.12-.52,.18-.79,.06-.26,.12-.52,.18-.77,.1-.47,.21-.96,.35-1.43l.76-2.49c.07-.23,.14-.46,.22-.69l1.16-3.01c.18-.42,.37-.82,.56-1.23,.11-.23,.21-.45,.32-.68,.09-.19,.18-.37,.26-.56,.2-.43,.4-.87,.64-1.28,.16-.29,.32-.58,.48-.87,.49-.89,.94-1.73,1.48-2.52l1.01-1.58,1.05-1.44c1.45-2,2.97-3.65,4.13-4.86,.43-.43,.86-.83,1.27-1.21,.22-.21,.44-.41,.66-.62,.39-.33,.77-.64,1.13-.93,.21-.17,.4-.33,.61-.5l.2-.14c.89-.65,1.6-1.16,2.22-1.51l.42-.24,.04,.48c.18,2,.42,3.96,.72,5.81,.42,2.65,.99,5.42,1.72,8.24,.06,.23,.12,.45,.18,.68,.12,.45,.24,.91,.38,1.36l.3,1.02,.38,1.34c.06,.22,.13,.44,.18,.67l.22,.98c.12,.51,.22,1.04,.31,1.55l.09,.48c.44,2.57,.71,5.16,.97,8.27l.67,8.35c.26,3.06,.55,5.79,.89,8.36,.13,1.07,.31,2.16,.47,3.22l.15,.94,.75,4.14c.43,2.59,.69,5.36,.78,8.24,.08,2.7,0,5.5-.23,8.31-.47,5.63-1.52,11.12-3.12,16.33-.85,2.73-1.83,5.35-2.91,7.8-1.19,2.66-2.53,5.11-3.98,7.31-1.6,2.42-3.37,4.58-5.26,6.44l-.74,.72c-.16,.16-.33,.3-.51,.45l-.56,.49c-.17,.15-.33,.29-.5,.43-.28,.22-.53,.4-.85,.58-.4,.23-.81,.41-1.24,.53l-.11,.03-.22-.11c-.18-.1-.53-.27-.95-.55-.58-.37-1.79-1.23-3.36-2.83-1.41-1.44-2.93-3.27-4.51-5.45-1.55-2.12-3.23-4.66-5.16-7.76-.8-1.28-1.59-2.59-2.43-3.99-1.07-1.78-2.18-3.63-3.39-5.53-.6-.93-1.12-1.72-1.8-2.58l-.96-1.18-.27-.36c-.21-.28-.43-.55-.64-.84-.59-.8-1.2-1.68-1.81-2.6l-.04-.06v-.07c-.07-.5-.1-.94-.1-1.37,0-1.23,.25-2.59,.72-3.93,.46-1.31,1.19-2.73,2.15-4.22,.86-1.3,1.93-2.68,3.26-4.21l3.81-4.29c1.48-1.69,2.52-3.43,3.1-5.19,.62-1.8,.91-3.81,.88-5.98-.03-2.04-.28-4.05-.52-5.77l-.39-2.72c-.08-.57-.13-1.12-.19-1.67-.03-.3-.06-.6-.09-.91-.05-.55-.06-1.08-.08-1.61,0-.28-.01-.57-.03-.85-.01-.45,0-.89,.02-1.32,.01-.33,.02-.65,.02-.98,.07-1.44,.18-2.79,.32-4,.03-.38,.09-.73,.14-1.08,.03-.2,.06-.4,.09-.6l.19-1.41c.07-.56,.12-1.06,.16-1.48h-.08c-.26,.03-.6,.07-.98,.11l-.89,.14-1.04,.21c-.65,.16-1.51,.37-2.43,.67-1.86,.58-3.86,1.42-5.8,2.41-1.33,.68-2.69,1.48-4.03,2.37l-.37-.49c.61-.52,1.11-.92,1.61-1.31,2.01-1.57,4.09-3.03,6.15-4.33,1.41-.88,2.59-1.55,3.71-2.12,.27-.14,.56-.28,.87-.42,1.05-.5,2.25-1.06,3.22-2,.57-.54,1.09-1.22,1.56-2.02,.46-.8,.82-1.6,1.11-2.28l.95-2.34c.33-.72,.69-1.48,1.13-2.23,1.25-2.22,2.83-4.29,4.5-6.48,.54-.71,1.09-1.44,1.64-2.17l.8-1.12c.26-.36,.53-.73,.8-1.09l.2-.26c.48-.64,.97-1.3,1.43-1.99,1.12-1.61,2.06-3.26,2.82-4.9,.74-1.61,1.4-3.39,1.94-5.29,.07-.31,.15-.61,.23-.92,.16-.59,.32-1.2,.43-1.81l.28-1.36,.23-1.4c.13-.71,.21-1.4,.29-2.07l.55-4.61,.2-1.29c.05-.3,.1-.61,.14-.91,.08-.54,.17-1.1,.28-1.64,.51-2.88,1.18-5.86,2.19-9.65,.88-3.26,1.86-6.24,2.62-8.47,1.08-3.01,1.91-5.17,2.69-6.97,.27-.67,.55-1.29,.83-1.89,.15-.33,.29-.64,.43-.96l.3-.62c.3-.62,.58-1.21,.86-1.74,.13-.24,.26-.48,.38-.71,.19-.37,.37-.71,.54-1.01l.26-.46,.27,.45c.29,.49,.58,.99,.85,1.48,.33,.55,.62,1.1,.89,1.62l.08,.16-.09,.15c-.21,.34-.45,.73-.7,1.18-.21,.35-.42,.74-.65,1.15l-.31,.56-.28,.52c-.26,.48-.53,1-.79,1.54-.39,.78-.77,1.56-1.12,2.33-.25,.53-.49,1.07-.73,1.64-.13,.29-.25,.59-.38,.87-.12,.31-.25,.62-.38,.93-.23,.56-.47,1.13-.67,1.71l-.49,1.33-.45,1.35c-.23,.64-.42,1.3-.61,1.94l-.2,.68c-.16,.55-.3,1.1-.43,1.63-.07,.29-.14,.57-.21,.84-.1,.43-.18,.84-.27,1.24,.12-.39,.25-.79,.4-1.21,.1-.26,.2-.53,.3-.81,.19-.51,.38-1.04,.6-1.57l.27-.64c.25-.61,.51-1.23,.81-1.85l.59-1.27,.62-1.25c.26-.55,.56-1.09,.84-1.61,.16-.29,.31-.57,.47-.87,.16-.28,.31-.55,.47-.82,.29-.52,.58-1.03,.88-1.51,.41-.7,.86-1.42,1.33-2.14,.31-.49,.61-.94,.91-1.38l.34-.51,.32-.45c.19-.27,.37-.53,.55-.78l.31-.43,.64,1.41c.73,1.55,1.38,3.15,2.01,4.7l.06,.16-.1,.14c-1.21,1.61-2.29,3.36-3.4,5.5-1.28,2.51-2.29,4.82-3.1,7.05-.84,2.27-1.58,4.74-2.2,7.34-.58,2.39-.95,4.94-1.1,7.58l-.05,.95,.02,2.21,.23,2.56c.06,.43,.14,.87,.21,1.31l.11,.64c.06,.47,.19,.93,.33,1.4,.04,.16,.09,.31,.13,.46,.03,.11,.07,.23,.1,.34,.05,.2,.1,.39,.18,.58l.36,.92c.45,1.16,1.1,2.3,1.91,3.37,.08,.09,.15,.18,.22,.27,.13,.16,.26,.33,.41,.48l.48,.51,.05,.05,.89,.78c.13,.12,.3,.24,.48,.37,.1,.07,.2,.14,.28,.2,.09,.07,.19,.14,.28,.2,.17,.13,.35,.25,.52,.36l.82,.51c.38,.25,.78,.48,1.17,.69l.46,.26c.8,.45,1.61,.89,2.41,1.32,1.38,.75,2.8,1.52,4.16,2.33l.88,.54c1.82,1.11,3.7,2.25,5.65,3.23,1.17,.58,2.35,1.1,3.48,1.53,1.31,.47,2.5,.83,3.65,1.09,1.63,.36,3.28,.57,4.93,.64,.88,.03,1.77,.03,2.64-.03,2.21-.11,4.19-.13,6.08-.06,.46,.02,.93,.04,1.39,.07,2.08,.13,4.13,.42,6.09,.84l-.1,.61c-.94-.12-1.9-.2-2.87-.23-.57-.02-1.15-.03-1.72-.02-1.09,0-2.29,.08-3.56,.22-1.36,.15-2.55,.36-3.64,.63-.66,.17-1.21,.31-1.8,.52-.35,.13-.62,.25-.91,.45-.26,.17-.59,.47-.7,.92-.1,.44,.03,.81,.17,1.12,.15,.33,.34,.6,.5,.82,.27,.37,.53,.69,.78,1.02l.3,.38c.52,.63,1.02,1.23,1.52,1.81l-.44,.43c-.6-.54-1.07-.94-1.51-1.31l-1.01-.85-2.08-1.65-1.17-.86c-.67-.49-1.36-1-2.06-1.46-.26-.18-.53-.35-.79-.53-.46-.32-.94-.64-1.42-.94l-2.27-1.4c-.49-.29-.99-.57-1.49-.85-.27-.15-.55-.3-.82-.46l-1.15-.64-3.56-1.79-2.44-1.09c-1.14-.53-2.33-.99-3.49-1.44-.48-.18-.95-.36-1.43-.55-.57-.24-1.17-.43-1.76-.63-.25-.08-.49-.16-.74-.24l-2.52-.83c-1.1-.32-2.2-.63-3.31-.93-.6-.17-1.21-.33-1.81-.5l-.81-.23,.14,.83c.32,2.44,.96,4.77,1.9,6.95,.93,2.15,2.17,4.23,3.7,6.18,1.49,1.9,3.19,3.63,5.03,5.14,.93,.77,1.93,1.48,2.87,2.14l2.88,2.04c2.22,1.6,4.02,2.93,5.66,4.19,2.19,1.68,3.93,3.09,5.47,4.42,.22,.2,.45,.4,.67,.6,.64,.57,1.3,1.15,1.86,1.77l.89,.92,.17,.18,1.33,1.47c.78,.84,1.57,1.66,2.36,2.47,.84,.87,1.71,1.76,2.53,2.65,.54,.55,1.05,1.14,1.53,1.71,.26,.3,.52,.61,.79,.91,.24,.29,.46,.58,.69,.88,.13,.16,.25,.33,.38,.5,.11,.14,.22,.28,.33,.42,.25,.31,.5,.64,.71,.99,.18,.29,.37,.57,.56,.86,.44,.67,.9,1.36,1.25,2.09l.81,1.52c.17,.32,.33,.68,.48,1.03,.08,.19,.17,.38,.26,.57,.3,.69,.62,1.46,1,2.42l-.56,.26c-.95-1.73-2-3.42-3.13-5.03-2.34-3.32-4.95-6.28-7.76-8.81-.89-.8-1.67-1.45-2.44-2.05-.41-.31-.86-.64-1.39-.91l-.14-.06c-.23-.11-.45-.22-.84-.24-.09,0-.23,.01-.38,.08-.12,.05-.25,.16-.32,.28-.15,.24-.16,.41-.18,.61,0,.36,.04,.63,.1,.92,.06,.29,.13,.56,.21,.82l.13,.45c.11,.38,.22,.75,.31,1.13,.25,.99,.48,2.06,.73,3.26,.94,4.67,1.5,9.3,1.68,13.75,.22,5.26-.12,9.92-1.04,14.23-.23,1.04-.53,2.27-.92,3.46-.13,.43-.26,.85-.4,1.27-.23,.71-.46,1.44-.66,2.19-.77,2.72-1.17,4.97-1.27,7.1-.07,1.17,0,2.37,.19,3.57,.16,1.01,.44,2.06,.9,3.42,.39,1.14,.74,2.17,1,3.3,.28,1.05,.66,2.03,1.02,2.99l.1,.27c1.71,4.41,3.21,8.37,4.2,12.31,1.06,4.14,1.56,8,1.5,11.46,0,1.22-.13,2.38-.25,3.46l-.62-.02Zm-67.76-67.54v-.02s.07-.09,.07-.09c.19-.23,.38-.45,.54-.67,.11-.14,.21-.27,.31-.41-.14,.09-.29,.18-.44,.29-1.05,.69-2.16,1.58-3.06,2.43-.26,.24-.52,.49-.76,.74-.24,.26-.47,.52-.69,.77-.19,.23-.41,.49-.6,.75-.18,.25-.35,.49-.5,.73-.11,.16-.22,.34-.32,.54,.02-.02,.04-.03,.06-.05,.14-.11,.29-.23,.45-.36,.28-.21,.58-.46,.89-.73,.16-.14,.33-.28,.49-.42,.25-.22,.5-.44,.75-.68,.26-.23,.51-.47,.77-.72,.49-.48,.97-.96,1.41-1.44l.61-.67Z" />
                                <path className="cls-80"
                                    d="M130.45,1038.3v-.04c-.12-1.25,.04-2.71,.46-4.21,.21-.72,.49-1.47,.85-2.29,.33-.72,.73-1.47,1.22-2.3,.84-1.4,1.89-2.89,3.2-4.55,.73-.93,1.52-1.87,2.28-2.78,.49-.58,.99-1.17,1.47-1.77,1.38-1.67,2.36-3.41,2.92-5.16,.58-1.78,.87-3.78,.84-5.93-.02-2.07-.27-4.13-.51-5.9l-.38-2.83c-.08-.6-.13-1.21-.19-1.81-.03-.32-.06-.64-.09-.95-.05-.57-.06-1.15-.08-1.71,0-.31-.01-.61-.03-.91-.01-.65,.02-1.3,.05-1.93l.02-.51c.02-.5,.08-.99,.13-1.47,.03-.26,.06-.52,.08-.77,.05-.45,.13-.89,.21-1.31,.04-.23,.08-.46,.12-.68,.09-.59,.22-1.14,.34-1.66l.2-.84,.3-.98-.56,.07-.87,.14-.99,.21c-.68,.16-1.48,.37-2.36,.66-1.81,.58-3.77,1.41-5.67,2.4-2.19,1.15-4.2,2.45-5.97,3.86-1,.77-1.96,1.66-2.73,2.38-.14,.15-.28,.28-.41,.41-.28,.28-.57,.57-.84,.87-.36,.36-.73,.78-1.16,1.28-.21,.24-.41,.49-.61,.75-.15,.19-.29,.37-.44,.55-.12,.16-.22,.29-.31,.43-.22,.3-.45,.6-.65,.91-.59,.88-1.1,1.75-1.52,2.58-.19,.36-.41,.79-.59,1.21l-.07,.16c-.15,.33-.29,.65-.4,.97-.05,.14-.1,.28-.15,.42-.08,.2-.15,.39-.21,.58l-.29,.93-.03,.1,.02,.13,1.45,4.62c1.6,5.04,3.14,9.39,4.71,13.32,1.76,4.36,3.73,8.46,5.86,12.18,.26,.46,.53,.91,.79,1.35l.57-.2Z" />
                                <path className="cls-73"
                                    d="M222.65,896.5c-.09-.05-.18-.1-.27-.16,.61-1.68,1.07-3.48,1.35-5.39l.06-.39,.36,.15c.13,.05,.24,.08,.34,.08h.08c.37,.01,.73,.02,1.1,.04,4.48,.17,8.73,.8,12.64,1.85,2.34,.64,4.52,1.43,6.49,2.36,.7,.33,1.41,.7,2.15,1.12l.16,.09,.08,.16c.21,.42,.43,.83,.65,1.22,.12,.2,.24,.4,.35,.59,.23,.39,.46,.77,.7,1.14l1.15,1.67,1.28,1.61c.27,.33,.57,.66,.87,.98,.16,.18,.33,.35,.49,.54,.25,.29,.54,.57,.84,.85,.17,.43,.34,.86,.48,1.29-6.75-4.93-18.13-8.37-31.33-9.82Z" />
                                <path className="cls-84"
                                    d="M117.71,1007.68l.07-.46c.03-.21,.09-.42,.15-.65,.03-.11,.06-.23,.09-.35,.07-.31,.17-.63,.28-.96l.05-.16c.13-.43,.29-.86,.44-1.23,.14-.38,.31-.75,.5-1.14l.08-.16c.15-.32,.32-.63,.5-.96,.07-.13,.15-.26,.22-.4,.18-.32,.38-.63,.59-.96l.27-.42,.24-.34c.24-.34,.48-.69,.75-1.01,.62-.81,1.38-1.64,2.39-2.63l.13-.11,.08-.09c.35-.44,.74-.88,1.19-1.38l.25-.28c1.21-1.33,2.62-2.7,4.18-4.07,1.74-1.54,3.76-3.1,6.01-4.63,.96-.65,2.25-1.49,3.71-2.31,.28-.16,.54-.29,.82-.44l.2-.1c.33-.16,.66-.33,.98-.51,.73-.41,1.31-.84,1.78-1.31,1.06-1.04,1.75-2.54,2.34-4l.9-2.38c.39-.9,.76-1.67,1.15-2.36,1.29-2.34,2.92-4.54,4.51-6.68,.53-.72,1.07-1.44,1.59-2.16l.78-1.11c.27-.39,.54-.76,.81-1.13l.17-.24c.47-.65,.96-1.32,1.41-1.99,1.05-1.56,1.94-3.15,2.63-4.72,.69-1.54,1.29-3.26,1.79-5.1,.06-.26,.12-.5,.18-.75,.15-.62,.31-1.25,.41-1.9l.24-1.31,.19-1.32c.05-.29,.08-.6,.12-.91l.05-.42h-1.08s-1.06-.09-1.06-.09c-.11-.02-.24-.03-.38-.05-.25-.03-.52-.06-.78-.11-.48-.08-.87-.16-1.23-.24-.32-.07-.62-.15-.93-.23l-.31-.08c-.35-.09-.69-.19-1.03-.29-.44-.13-.87-.25-1.28-.35-.36-.1-.7-.17-1.02-.24-.33-.06-.63-.11-.9-.14l-.22-.02c-.13-.01-.26-.03-.37-.03-.06,0-.11,0-.16,0h-.17c-.15,0-.28,0-.4,0l-.26,.02-.29,.23c-1.34,.9-2.58,1.54-3.88,1.99-1.87,.61-3.58,.89-5.23,.86h-.14c-2.01-.08-3.98-.52-5.71-1.28-.34-.12-.63-.28-.94-.45-.16-.09-.31-.17-.48-.25l-.35-.19c-.35-.19-.71-.38-.98-.56-.24-.15-.43-.26-.57-.33-.04-.02-.08-.05-.12-.06l-.12-.06-.12,.05c-.06,.02-.14,.06-.24,.12-.14,.07-.34,.19-.53,.31l-.64,.41-1.29,.78c-.38,.2-.79,.41-1.19,.61l-.3,.15-.46,.2c-.34,.15-.69,.3-1.04,.44-2.07,.8-4.23,1.22-6.41,1.26-.12,0-.25,0-.38-.01-1.08-.04-2.03-.18-2.88-.41-.55-.15-1.08-.34-1.58-.57l-.29-.14-.12,.3c-.27,.66-.82,2.07-1.47,4.21-.83,2.71-2.32,8.4-3.06,16.06-.36,3.72-.51,7.4-.44,10.96,.07,4.12,.43,8.21,1.08,12.16,.37,2.17,.82,4.28,1.35,6.28l.44,1.57,.49,1.56,1.05,3.22,2.64,8.04,.6-.05Z" />
                                <path className="cls-83"
                                    d="M183.21,906.71l-.73-1.47-.8-1.45c-.15-.26-.29-.52-.43-.78-.38-.69-.77-1.41-1.2-2.09-1.06-1.81-2.26-3.62-3.63-5.53-.24-.31-.47-.62-.71-.93-.43-.57-.86-1.15-1.33-1.7l-1.09-1.27c-.4-.47-.73-.85-1.11-1.23l-1.38-1.42c-.12-.13-.24-.25-.37-.37l-1.89-1.69c-.25-.24-.53-.45-.83-.67-.16-.12-.32-.24-.47-.36l-.45-.35c-.29-.23-.59-.46-.87-.67l-1.42-.94c-.65-.46-1.37-.86-2.07-1.24-.27-.15-.55-.3-.83-.46-.3-.18-.63-.33-.97-.48-.18-.08-.36-.16-.53-.24-.18-.08-.36-.16-.54-.25-.33-.15-.66-.31-1-.44l-1.91-.7c-.16-.06-.32-.12-.46-.17l-2.49-.7c-.34-.08-.68-.14-1.02-.21l-1.62-.32-2.27-.27c-.8-.12-1.63-.16-2.43-.19-.29-.01-.58-.03-.88-.04-.21-.01-.41-.03-.61-.03-.67-.03-1.36-.02-2.02-.01h-.65c-.2,0-.39,.01-.59,.01-.35,0-.7,0-1.05,.02l-3.28,.19-1.69,.17c-1.05,.1-2.13,.21-3.19,.36-.34,.05-.68,.09-1.03,.14-.72,.09-1.47,.19-2.21,.32-2.2,.34-4.38,.74-6.41,1.12-2.43,.48-4.45,.9-6.36,1.31l-6.33,1.36c-2.01,.43-4.16,.88-6.32,1.29-.22,.05-.45,.09-.67,.12l-.95,.17,.43-.62c.48-.68,.87-1.41,1.18-2.16,.61-1.47-1.14-3.16-.95-5.01,.15-1.43,.9-2.17,.83-3.64-.04-1.16,.2-2.64,0-3.97-.27-1.81,.46-3.62,.16-4.65,.1,1.39,.13,2.85,.1,4.34-.04,1.82-.17,4.6-.81,7.7-.38,1.76-.81,3.15-1.33,4.39-.78,1.82-1.69,3.03-2.79,3.7-.33,.2-.69,.36-1.08,.47l-.07,.02c-.05,.02-.1,.03-.19,.05l-.26,.05h-.08c-.06,.02-.11,.02-.17,.03-.13,.02-.26,.03-.4,.03h0c-.09,0-.18,0-.27,0-.71-.03-1.44-.22-2.18-.57-1.48-.69-2.95-1.95-4.38-3.74-1.25-1.59-2.33-3.43-3.2-5.47-.91-2.15-1.5-4.29-1.76-6.38-.34-2.48-.63-4.72-.7-7.01-.08-2.72,.13-5,.66-6.97,.65-2.49,1.88-4.42,3.54-5.59,1.62-1.18,3.88-1.78,6.53-1.72,5.08,.15,10.05,.28,14.94,.27,5.08,0,9.96-.17,14.52-.47,4.92-.33,9.47-.81,13.53-1.43,4.21-.63,8.24-1.43,11.98-2.36,3.44-.86,6.77-1.87,9.9-3.01,2.7-.98,5.18-2.02,7.37-3.09l1.41-.68,2.31-1.22,.32-.18h.43c.19,0,.39,.01,.63,.02h0c3.02,.15,5.95,.57,8.7,1.26,2.89,.7,5.76,1.71,8.56,3.03,.63,.31,1.35,.66,2,1.02,.47,.24,1.02,.56,1.5,.85l.49,.29c1.29,.79,2.54,1.65,3.73,2.56,2.39,1.82,4.5,3.85,6.28,6.03,.83,1.02,1.61,2.11,2.32,3.22l.07,.1-.02,.12c-.09,.45-.16,.93-.23,1.46-.12,.88-.2,1.83-.24,2.97-.01,.33-.01,.65-.01,.98,0,.17,0,.35,0,.5l.06,1.49c.08,1.09,.18,2.06,.32,2.96,.17,1.05,.36,2.01,.58,2.92,.24,1,.53,1.96,.84,2.87,.16,.46,.32,.94,.5,1.39,.18,.47,.36,.93,.57,1.38,.19,.43,.39,.9,.62,1.35,.22,.45,.44,.9,.7,1.37,.22,.42,.46,.85,.71,1.26l.11,.19c.21,.36,.43,.73,.67,1.08,.5,.79,1.06,1.58,1.71,2.44,.53,.71,1.13,1.44,1.88,2.3l1,1.1,1.05,1.06c.64,.62,1.41,1.34,2.21,2.01,.35,.31,.73,.61,1.1,.91l.05,.04c.37,.3,.77,.61,1.18,.91,.73,.55,1.51,1.07,2.26,1.57l.19,.13c.08,.05,.17,.09,.26,.13-2.82,19.54-24,26.64-37.61,22.64l-.92-2.06c-.72-1.61-1.46-3.27-2.28-4.87Z" />
                                <path className="cls-82"
                                    d="M119.63,945.03c.36,.01,.75,.01,1.18,0,1.71-.12,3.56-.64,5.51-1.54,.27-.13,.53-.26,.78-.39l.49-.25,1.21-.71,1.3-.85,.29-.2,.33-.21c.21-.13,.44-.28,.72-.43,.3-.16,.62-.3,.95-.39,.24-.07,.54-.1,.82-.09,.16,0,.32,.03,.45,.06,.47,.11,.79,.28,1.01,.4,.23,.13,.41,.24,.59,.35l.11,.07c.29,.19,.56,.34,.83,.48,.15,.08,.26,.14,.38,.21l.58,.32c.2,.12,.42,.24,.68,.33l1.12,.47c.28,.13,.57,.2,.83,.27,.13,.04,.26,.07,.39,.11l.59,.18c.19,.04,.33,.07,.46,.09l.21,.04c.16,.02,.31,.05,.45,.08,.28,.06,.53,.1,.78,.12,.33,.04,.69,.07,1.06,.08,1.12,.04,2.28-.04,3.53-.25l1.04-.21c.24-.05,.46-.12,.68-.19l.33-.1,.47-.13,.49-.17,.86-.31c.25-.11,.44-.19,.63-.27,.36-.15,.68-.28,.99-.45l.64-.31,.16-.09,1.23,.18c.36,.06,.72,.13,1.09,.22,.45,.1,.9,.21,1.34,.32l.17,.04c.28,.07,.57,.14,.85,.21l.32,.07c.3,.07,.59,.13,.86,.18,.31,.06,.66,.12,1.11,.18,.22,.04,.46,.06,.68,.08l.34,.03,.95,.04h.76c.07-.01,.16-.02,.25-.03l.57-.05,.11-.56,.27-2.7,.17-1.3c.04-.3,.08-.6,.12-.91,.08-.58,.15-1.14,.24-1.68,.45-2.96,1.07-5.99,2-9.85,.81-3.32,1.74-6.36,2.47-8.65,1.02-3.06,1.82-5.27,2.58-7.15,.26-.69,.54-1.34,.8-1.96,.15-.35,.29-.68,.42-1l.3-.65c.29-.64,.56-1.24,.83-1.79,.13-.26,.26-.52,.38-.76,.21-.42,.41-.83,.61-1.19l.31-.56c.19-.36,.35-.63,.48-.85l.24-.39s-.62-.92-.73-1.08c-.24-.32-.45-.62-.67-.92-.4-.55-.79-1.11-1.23-1.64l-.99-1.2c-.36-.44-.68-.84-1.06-1.23l-1.23-1.33c-.13-.14-.25-.27-.37-.39l-1.7-1.6c-.25-.25-.53-.47-.8-.68-.15-.12-.28-.22-.41-.33l-.45-.37c-.26-.21-.51-.42-.78-.63l-1.29-.9c-.59-.45-1.24-.82-1.87-1.19l-.08-.04c-.23-.14-.47-.27-.7-.41-.31-.2-.65-.36-.95-.5-.15-.07-.31-.14-.46-.22-.19-.09-.35-.17-.51-.25-.31-.15-.62-.31-.94-.44l-1.66-.65c-.17-.07-.35-.14-.53-.2l-2.19-.66c-.36-.09-.7-.16-1.03-.23l-1.58-.34-2.12-.29c-.76-.13-1.55-.17-2.32-.22h-.11c-.25-.02-.49-.04-.74-.05-.29-.03-.6-.04-.91-.06-.54-.02-1.09-.02-1.64-.02,0,0-1.02,0-1.21,0-.35,0-.71,0-1.06,0l-3.17,.14-2.6,.22-.21,.14c-.13,.08-.3,.19-.48,.31-.48,.31-1,.66-1.64,.98l-1.6,.87-5.31,2.83,2.41-.14c1.52,.27,3.19,.78,4.05,2.14,1.5,2.39,2.37,5.06,1.76,7.29l-.16,.26-.02,.06c-.14,.52-.37,1.1-.68,1.67-.36,.67-.86,1.35-1.5,2.02-.65,.67-1.44,1.32-2.35,1.94-.82,.55-1.83,1.08-3.01,1.6-1.56,.69-3.31,1.44-5.67,2.42l-.21,.09-.12,.2c-.46,.75-.86,1.52-1.21,2.29-.59,1.29-1.1,2.77-1.46,4.28-.4,1.63-.66,3.4-.75,5.12-.02,.44-.04,.88-.04,1.32,0,.44,0,.84,.02,1.31,.03,.95,.04,1.84,.03,2.63-.02,1.3-.1,2.54-.24,3.66l-.16,1.32c-.18,.24-.37,.49-.55,.76l-.08,.12c-.3,.42-.6,.83-.89,1.3-.74,1.09-1.39,2.28-1.94,3.52-.71,1.74-1,3.15-.91,4.44,.1,1.73,.9,3.2,2.26,4.13,.65,.45,1.46,.8,2.41,1.03,.49,.1,1,.17,1.57,.19Z" />
                                <path className="cls-81"
                                    d="M135.62,897.34c-.06,.09-.12,.19-.19,.29-.15,.23-.31,.48-.51,.73-.16,.23-.37,.49-.65,.82-.47,.56-1.05,1.15-1.72,1.76-.77,.69-1.53,1.26-2.33,1.75-.83,.5-1.77,.95-2.95,1.41l-6.84,2.67c-2.22,.86-4.59,1.76-6.85,2.58-1.1,.4-2.16,.78-3.17,1.13l-.89,.3c-.68,.23-1.34,.46-1.96,.65-.71,.23-1.36,.42-1.97,.6l-2.08,.64,.89-.89c.07-.16,.32-.52,.37-.68,.31-.87,.69-1.64,.74-2.36,.04-.68,.22-1.4,.15-2.14-.06-.65,.02-1.25-.08-1.77-.05-.28-.11-.55-.17-.82,0,.26,0,.54,0,.84-.02,1.37-.13,2.6-.36,3.75-.17,.83-.39,1.52-.67,2.12-.35,.76-.85,1.36-1.43,1.7-.14,.08-.3,.17-.46,.21-.1,.04-.2,.07-.28,.09l-.16,.04-.45,.06c-.06,0-.1,0-.14,0h-.12s-.07,0-.1,0c-.06,0-.13,0-.21-.02-.03,0-.05,0-.08,0-.07,0-.14-.02-.19-.03-.77-.16-1.52-.58-2.17-1.22-1.54-1.48-2.41-3.67-2.87-5.26-.47-1.64-.89-4.1-.3-6.54l.05-.19,.08-.23c.06-.17,.1-.29,.16-.37,.1-.2,.24-.42,.36-.58,.29-.39,.69-.74,1.17-1.03,.92-.57,2.04-.87,3.22-1.19l.97-.24c1.99-.49,4.06-1,6.03-1.52,2.03-.54,4.41-1.19,6.77-1.9,4.46-1.31,8.44-2.66,11.84-4,.77-.29,2.94-1.16,2.94-1.16,5.68,.22,7.88,6.19,6.65,10.23l-.16,.26s.02-.07,.03-.11c.03-.12,.05-.23,.07-.34Z" />
                                <path className="cls-74"
                                    d="M97.49,885.91c2.97-2.68,5.54-6.06,7.54-10.43,2.25-.45,42.7-4.17,56.03,6.32-9.22-2.9-15.74-3.06-20.78-2.41-5.03,.66-13.26,.61-17.77,1.59-4.51,.99-19.39,4.3-19.39,4.3l-5.64,.62Z" />
                                <path className="cls-51"
                                    d="M119.58,1016.06c35.83,59.97,65.42,52.94,80.04,38.46,7.38-7.3,15.7-13.24,40.14-23.01,43.45-17.36,65-56.08,50.56-81.97-4.62-8.28-19.26-12.87-31.92-2.67,3.19-4.03,6.88-6.77,8.8-7.17,1.92-.4,13.28-5.61,18.21-5.47,1.1,.18,1.74,.47,2.09,.69,.91,.24,1.94,.31,2.9,.28,.36,.03,.73,0,1.1-.07,1.39,1.07,2.62,2.63,3.58,3.44,1.56,1.32,3.18,2.61,5.1,3.35,2.19,.84,4.62,1.32,6.96,.84,.62-.13,4.61-1.64,4.95-.76,.31,.8,.58,1.17,1.07,1.86,.67,.94,2.24,1.13,3.05,1.87,.75,.68,1.48,1.4,2.28,2.02,.52,.4,1.12,.84,1.77,1.14,0,.23-.01,.47,0,.7,.03,3.61,1.32,6.79,1.86,10.31,.79,5.07-.12,10.43-.41,15.52-.23,4.08-1.07,7.89-2.93,11.47-.79-.2-1.68,.1-1.97,1.12-.99,3.55-1.01,7.27-2.15,10.83-1.34,4.19-3.32,8.2-5.3,12.12-1.82,3.61-4.06,6.89-6.27,10.27-1.07,1.64-1.91,3.55-3.15,5.06-.7,.86-1.32,1.55-1.76,2.43-.11,.1-.22,.21-.32,.35-1,1.48-2.46,2.75-3.33,4.31-.92,1.67-1.7,3.42-2.67,5.05-1.9,3.22-4.45,5.4-7.41,7.6-3.34,2.48-6.26,5.36-9.34,8.15-2.68,2.43-5.71,4.63-8.18,7.28-2.74,2.93-4.8,6.29-7.86,8.94-2.69,2.32-5.33,4.74-7.65,7.44-4.19,4.86-7.31,10.37-10.16,16.08-.51,0-1.02,.22-1.38,.77-1.47,2.25-3.62,4.02-5.38,6.04-1.41,1.62-2.61,3.74-4.61,4.7-4.9,2.36-10.61,4.21-16.09,4.31-5.49,.1-11.15-1.12-16.45-2.56-3.78-1.03-9.39-1.85-12.39-4.64-.26-.57-.73-.89-1.24-1-3.25-2.46-6.72-4.6-9.93-7.11-3.42-2.68-6.51-5.67-9.94-8.32-2-1.54-2.57-3.84-4.22-5.61-.84-.9-1.74-1.72-2.69-2.48-.04-.32-.18-.63-.47-.88-.54-.49-.98-1.08-1.64-1.42-.3-.15-.61-.25-.93-.33-.08-.16-.18-.31-.32-.46-.75-.78-1.84-1.5-2.78-2.02-.16-.09-.36-.18-.57-.28-.72-.87-1.36-1.85-2.18-2.6-.02-.09-.04-.17-.08-.26-.3-.69-.54-1.39-.73-2.12-.18-.61-.58-.97-1.05-1.14-5.35-9.2-10.77-18.86-16.79-27.59-3.56-5.17-6.23-12.53-8.72-18.13-1.08-2.42-2.97-8.77-3.46-9.88-.19-1.28-1.05-3.21-1.05-3.21,1.39,1.94,1.76,5.68,3.37,8.37Z" />
                                <path className="cls-75"
                                    d="M191.92,837.75c-21.89-10.73-60.17-14.64-75.63,1.81-.58,2.45,4.19,6.29,4.19,6.29l23.27-2.12s5.41-6.48,13.18-8.6c7.77-2.11,14.32-2.6,17.79-2.14,3.47,.46,17.2,4.76,17.2,4.76Z" />
                                <path className="cls-30"
                                    d="M218.46,738.68c3.15,.58,4.83,6.9-1.42,14.84,1.73,1.63,5.45,3.7,5.45,3.7,0,0,3.63-8.4,3.67-9.25,.03-.85,.51-4.23-1.18-5.95-1.69-1.72-3.78-3.16-4.45-3.27-.67-.11-2.05-.08-2.05-.08Z" />
                                <path className="cls-30"
                                    d="M201.9,761.07c-1.27,4.63-6.05,8.75-10.21,7.74-4.16-1.01-3.39-9.11-1.31-13.55,3.16-6.74,10.35-9.36,12.17-3.6,1.82,5.76-.13,7.51-.65,9.41Z" />
                                <path className="cls-30"
                                    d="M98.79,863.49c1.51,4.79,1.06,8.87-.23,12.07-2.11,5.21-7.74-1.3-9.02-8.23-1.75-9.5,1.57-15.53,5.19-12.12,3.62,3.41,3.44,6.32,4.06,8.28Z" />
                                <path className="cls-65"
                                    d="M214.75,867.65c1.61,13.09,27.46,18.62,24.58-7.48-1.59-14.37-10.06-27.39-25.21-40.02-13.39-11.16-15.27-22.26-10.96-37.3,2.43,1.41,6.98,6.26,6.98,6.26,0,0-5.93,12.23,3.11,19.02,9.04,6.79,31.88,24.75,36.97,48.02-3.69,9.96-7.45,17.16-7.48,21.33-.04,8.02,.37,11.94,2.8,17.93-6.56-3.84-15.24-4.4-19.88-4.58-4.64-.18-7.24-2.52-9.72-5.39-2.48-2.87-5.02-7.39-5.02-7.39l2.67-5.68,1.17-4.73Z" />
                                <path className="cls-64"
                                    d="M156.68,750.61c4.13,.58,17.9,43.61,9.46,46.83,6.13,1.27,11.52-.42,11.52-.42,0,0-3.01-10.59-3.7-13.57-.69-2.98-4.64-18.78-5.23-22.02-.59-3.24-.8-9.42-6.1-11.01-5.3-1.59-5.95,.19-5.95,.19Z" />
                                <path className="cls-68"
                                    d="M127.98,767.46c1.74-.47,3.76,.91,5.7,7.49,2.19,7.42,5.81,16.42,11.15,24.84,3.33,1.24,4.97-.38,4.97-.38,0,0-4.21-6.81-6-11.45-1.79-4.64-7.01-19.12-9.31-20.34-2.29-1.21-6.27-1.16-6.27-1.16l-.25,.98Z" />
                                <path className="cls-72"
                                    d="M267.01,750.01c-8.19,13.27-22.84,40.61-17.85,75.02-6.74-10.75-22.46-17.32-30.8-17.41-1.55,1.86-.62,4.54-.62,4.54,0,0,8.67,6.64,10,8.34,1.33,1.71,16.35,16.82,22.48,35.65,3.6-3.84,19.61-1.27,23.91-1.14,1.75-.58,.72-.99,.68-1.08-.6-1.45-4.87-8.95-6.05-10.87-1.18-1.92-9.21-21.44-7.31-39.74,1.9-18.29,11.53-31.51,12.6-34.07,1.07-2.55,4.4-7.79-1.06-14.5-5.46-6.71-5.97-4.76-5.97-4.76Z" />
                                <path className="cls-69"
                                    d="M227.04,796.86c2.13-1.07,11.63-5.86,12.27-19.31-9.49,12.57-29.68-2.07-36.49-8.8-4.82,4.05-8.28,4.87-13.22,4.06,6.33,4.31,12.75,9.33,16.21,12.21,3.47,2.88,7.74,7.87,9.89,9.26,2.15,1.39,2.87,3.82,7.99,3.96,1.03-.11,3.34-1.38,3.34-1.38Z" />
                                <path className="cls-67"
                                    d="M153.93,842.82c12.05-3.42,42.15-.09,52.66,25.34-.77-6.75,1.12-14.64,1.38-16.73-4.39-6.61-8.76-9.21-10.94-10.64-2.18-1.43-9.31-7.39-27.04-6.39-4.15,2.66-6.28,3.86-9.31,4.98-3.02,1.12-6.75,3.44-6.75,3.44Z" />
                                <path className="cls-53"
                                    d="M225.65,849.03c-9.75-27.36-46.72-55.07-94.08-35.47,40.23-4.52,71.06,5.99,94.08,35.47Z" />
                                <path className="cls-54"
                                    d="M173.4,852.5c-3.12,3.1-6.48,5.12-8.52,7.66-1.82,2.25,.96,4.87,3.79,6.65,11.12,7.01,18.79,15.89,23.34,33.2-15.96-31.62-43.15-37.26-73.67-38.68,22.05-1.35,41.25-4.54,55.07-8.84Z" />
                                <path className="cls-49"
                                    d="M100.58,875.09c-.4,6.24-4.33,13.09-10.53,6.14,1.59,2.55,2.62,4.26,5.14,4.73,3.37,.63,7.92-2.05,8.89-7.84,.97-5.78,.34-9.87,.04-12.07-.3-2.2-1.11-5.36-3.24-10.04-3.35-7.34,6.54-5.22,26.6-8.25-12.87-.26-32.17-.65-34.04-.73-1.87-.07-10.95,.7-9.2,15.13-.12-11.11,6.47-10.96,9.24-9.69,2.77,1.27,4.6,7.48,5.09,9.82,.49,2.34,2.41,6.53,2.01,12.78Z" />
                                <path className="cls-50"
                                    d="M127.15,767.44c-1.21,1.3-.93,15.71,10.08,36.89,.11,.57-.61,.32-1.42,.29-12.37-23.3-11.12-28.55-11.74-30.68-.49-1.69-.49-3.32,1.46-5.5,.58-.65,1.63-.99,1.63-.99Z" />
                                <path className="cls-55"
                                    d="M153.46,751.57c-1.17,.78-1.62,4.77,.58,12.72,1.51,5.48,7.29,22.98,7.02,33.65-1.15,.25-2.01,.33-2.01,.33,0,0-1.9-12.34-2.95-16.36-1.05-4.02-2.4-10.56-3.99-15.75-1.59-5.19-2.19-9.22-1.55-11.74,.54-2.15,2.9-2.86,2.9-2.86Z" />
                                <path className="cls-56"
                                    d="M105.35,903.68c-.16-.96-1.54-4.77,1.79-6.86,3.33-2.09,9.12-4.59,12.01-5.56-5.65,.76-11.69,2.6-13.52,3.04-1.83,.44-7.48,1.47-9.26,2.92-1.79,1.45-1.08,6.39-.93,7.49-.04-2.24,1.15-4.59,2.25-4.82,.98-.2,2.75,1.09,3.05,1.5,.3,.41,3.06,4.43,2.06,7.64-1,3.2-3.8,2.59-4.87,1.72,1.45,2.37,3.51,2.7,4.71,2.32,1.2-.38,2.56-2.49,2.84-4.12,.29-1.62,.15-3.89,.15-3.89l-.28-1.39Z" />
                                <path className="cls-57"
                                    d="M254.97,745.56c-5.81-.6-9.26,10.01-11.21,14.1-1.95,4.1-6.26,11.46-20.16-2.38,2.49,.14,7.25,3.25,8.12,3.94,.87,.69,3.61,.62,4.87-2.73,1.26-3.35,5.97-11.04,7.81-12.22,1.83-1.18,8.37-2.06,9.02-2.04s1.55,1.32,1.55,1.32Z" />
                                <path className="cls-58"
                                    d="M195.2,769.85c2.9-1.08,12.18-14.25,6.47-20.76-5.71-6.51-12.54-.36-13.23,.56,1.09-3.04,2.3-4.2,3.77-4.7,1.47-.5,4.28-.81,4.28-.81l2.01,.19c1.87-.2,3.39,.09,4.63,.73l-.25-.49,5.81,2.31,5.6,3.88,.54,1.15c-2.23-1.3-8.39-3.93-7.48-.48,0,0,0,0,0,0,.64,2.94,.48,6.24-.11,8.8-2.5,10.84-18.66,20.47-22.38,5.68,3.61,3.55,7.43,5.01,10.33,3.93Z" />
                                <path className="cls-71"
                                    d="M114.35,937.36c-.6,4.2,7.09,3.65,11.48,1,4.39-2.65,7.96-3.08,16.3-.67,7.07,2.05,14.2-.42,18.04-7.01,5.27-9.07,8.54-24.37-.58-35.91-6.71-8.49-19.61-10.59-29.12-8.15l7.82-6.84s9.51-.88,12.36-.47c2.85,.41,9.98,.5,17.23,7.4,7.24,6.9,11.52,12.8,11.52,12.8l-4.88,6.98-.03,.02,.36,.65-2.43,4.32-3.39,8.93-3.61,14.67-1.17,7.88s-2.43-.31-4.48-.58l-.42,.88s-3.5-.72-6.56-1.51c-6.05,3.88-14.5,2.66-20.12-.02-1.8,1.45-12.14,4.18-14.85,3.58-2.7-.6-7.18-5.06-3.48-7.98Z" />
                                <path className="cls-25"
                                    d="M135.72,898.19c-.63,4.86-3.7,10.94-15.72,14.74-.86-1.91,1.04-5.54,1.04-5.54,0,0,4.62-1.55,5.84-2.37,1.22-.82,4.71-2.29,5.36-3.04,.65-.75,2.24-2.36,2.24-2.36l1.24-1.44Z" />
                                <path className="cls-70"
                                    d="M135.23,891.55c1.15,7.1-16.18,13.83-29.69,17.06-.52,2.79-2.19,4.06-2.19,4.06l7.82-1.53,11.81-4.45,7.45-3.42,3.73-3.33s1.41-2.06,1.62-2.8c.37-1.3,.35-3.76-.55-5.6Z" />
                                <path className="cls-30"
                                    d="M100.63,901c-.66-.74-4.03-.98-2.47,4.78,1.41,5.17,5.12,5.43,4.81,1.03-.32-4.41-2.34-5.8-2.34-5.8Z" />
                                <path className="cls-61"
                                    d="M222.64,896.5c-15.01-7.98-21.96-28.98-17-40.24-.08,.72-.14,1.49-.17,2.39-.01,.33-.01,.65-.01,.98,0,.17,0,.35,0,.5l.06,1.49c.08,1.09,.18,2.06,.32,2.96,.17,1.05,.36,2.01,.58,2.92,.24,1,.53,1.96,.84,2.87,.16,.46,.32,.94,.5,1.39,.18,.47,.36,.93,.57,1.38,.19,.43,.39,.9,.62,1.35,.22,.45,.44,.9,.7,1.37,.22,.42,.46,.85,.71,1.26l.11,.19c.21,.36,.43,.73,.67,1.08,.5,.79,1.06,1.58,1.71,2.44,.53,.71,1.13,1.44,1.88,2.3l1,1.1,1.05,1.06c.64,.62,1.41,1.34,2.21,2.01,.35,.31,.73,.61,1.1,.91l.05,.04c.37,.3,.77,.61,1.18,.91,.73,.55,1.51,1.07,2.26,1.57l.19,.13c.08,.05,.17,.09,.26,.13-.28,1.96-.76,3.79-1.38,5.5Z" />
                                <path className="cls-60"
                                    d="M172.06,985.74c-9.29-33.62-50.28-36.17-54.5-7.83-4.25,28.59,28.12,63.14,40.92,61.7,12.81-1.44,21.93-23.62,13.57-53.87Z" />
                                <path className="cls-62"
                                    d="M117.83,925.24l.3-4.63,.81-2c-.29,6.66,9.98,3.37,15.8-5.12,3.77-5.49,7.11-11.12,13.25-11.43,15.84-.81,18.91,29.12-5.03,28.2-15.71-.61-26.38-1.37-27.98,5,.26-4.27,2.86-10.02,2.86-10.02Z" />
                                <path className="cls-59"
                                    d="M259.98,870.18c-10.13,3.58-7.76,35.09,16.09,51.68,23.85,16.59,15.8-14.29,12.2-25.5-3.95-12.32-13.56-31.38-28.29-26.18Z" />
                                <path className="cls-63"
                                    d="M246.83,896.38c-10.11-18.53,4.63-47.21,32.46-33.73,16.1,7.8,19.55,30.66,20.65,40.99,1.71,15.97,5.87,24,10.57,31.87,4.7,7.87-12.27,11.12-18.5,3.82-2.65-.21-3.47,.79-3.47,.79,0,0,6.61,6.33,7.99,6.57,1.38,.23,9.88-.06,11.34-.85,2.23,3.74,6.95,5.26,8.77,4.35,1.82-.91,5.86-3.62,2.36-13.55-3.51-9.93-8.43-26.05-11.08-40.7-2.65-14.65-6.28-25.74-15.27-32.18-8.99-6.44-22.82-10.46-26.19-10.74-7.67-.65-16.62,1.71-19.81,6.06-3,4.08-4.67,17.18-5.26,22.17-.22,1.84,2.73,12.67,2.73,12.67l2.7,2.45Z" />
                                <path className="cls-66"
                                    d="M297.22,1028.02c-26.35,28.55-58.96,22.72-67.15,47-6.19,18.36-15.55,37.11-52.57,20.76,14.87,11.73,31.34,18.74,43.25,13.03,11.9-5.7,12.9-7.04,16.92-11.35,4.02-4.31,13.66-21.11,21.43-27.04,5.69-6.69,11.58-14.64,15.01-16.53,3.42-1.88,13.21-11.02,13.31-11.29s9.8-14.58,9.8-14.58Z" />
                                <path className="cls-36"
                                    d="M270.1,939.01c4.23-1.85,16.76-3.33,22.36-1.28,1.03-.96-.5-2.08-.5-2.08l-3.06-.49-4.85-1.25-5.07,1.15-5.93,2.01-2.94,1.94Z" />
                                <path className="cls-52"
                                    d="M154.98,815.72c-15.01-1.92-37.85,1.49-42.25,11.78-1.52,3.79-.81,5.33-.81,5.33,5.1-5.65,13.43-15.4,43.07-17.11Z" />
                                <path className="cls-22"
                                    d="M140.81,986.76h2.44s-.82,3.17-.93,6.23c-.11,3.06,.76,11.65,1.14,16.77,.38,5.11-2.44,9.79-3.28,10.74-.84,.95-5.81,6.91-6.59,7.81s-1.65,2.5-2.61,6.01c1.28-4.01,6.31-8.05,6.68-8.37,.37-.32,1.95-1.96,3.7-3.14-.24,1.05-.45,5.28-.16,9.27,.1-2.68,3.25-11.16,3.71-12.34,.46-1.18,1.42-8.34,1.04-17.17-.37-8.82,1.61-18.09,3.22-22.94,1.61-4.86,9.87-14.23,11.35-15.97,1.48-1.74,3.24-2.91,5.91-4.87,.28,3.22,5.61,26.95,5.68,29.53,.08,2.58,.36,13.66,2.95,26.02,2.59,12.36-.1,23.67-2.14,33.55-2.04,9.88-9.67,19.3-10.46,20.4-.79,1.1-6.01,5.07-6.65,5.38-.64,.3-2.94-.2-2.94-.2,0,0,.53,1.66,2.52,2.64,5.35,1.83,11.01-6.14,14-11.24,2.99-5.1,7.19-14.83,9.41-21.45,.51-1.53,1.35-6.07,2.71-8.7,1.59,3.86,8.13,9.64,10.67,12.4,2.54,2.77,8.62,13.37,10.32,17.19,1.37,3.07,3.33,7.34,3.66,12.67,.33,5.33-3.77,8.57-3.78,8.71s-2.33,2.89-2.33,2.89l1.89-.67,3.71-3.44,2.16-.54,.67,3.56,1.02,4.73s.68-3.41,.69-3.55c0-.13-.43-7.93-.43-7.93l-1.57-6.42-2.96-9.08s-2.4-6.43-3.7-10.64c-1.29-4.21,.46-10.97,2.29-16.41,1.83-5.44,1.88-15.31,1.74-19.12-.14-3.81-2.35-13.99-2.7-16.76-.35-2.77,.85-1.37,1.33-1.09,.47,.28,3.84,2.4,5.07,4.32,1.24,1.92,6.8,7.19,11.13,14.63-.73-8.08-11.45-20.07-12.42-21.07-.97-1-12.68-12.43-17.31-15.09-4.63-2.66-12.16-9.21-13.23-11.46-1.07-2.25-2.92-5.4-3.46-10.32,2.81-.15,14.15,4.67,18.37,6.25,4.23,1.58,14.32,8.91,14.66,9.35,.34,.44,3.37,2.34,5.84,4.38-.39-.42-2.84-4.21-4-5.76-1.16-1.55-.36-2.04,1.18-2.64,1.54-.6,6.51-1.98,16.01-1.37-3.46-1.98-12.57-2.18-19.23-2.07-6.66,.1-12.21-3.5-13.33-4.11-1.12-.61-6.15-3.68-14.29-8.49-8.14-4.81-5.9-15.6-5.65-22.42,.25-6.82,10.85-19.3,12.85-21.68l-1.51-3.38-3.22-6.47s-2.28-4.45-3.97-6.56c-2.62,3.12-10.74,22.92-11.29,25.14-.55,2.22-3.31,13.11-3.62,17.74-.31,4.64-1.58,10.69-3.19,14.29-1.61,3.6-7.07,10.55-8.76,12.72s-4.99,7.63-6.11,11.12c-1.12,3.49-5.56,5.06-6.75,5.77-1.19,.71-8.83,6.02-9.76,6.88-.93,.86-2.69,3.29-2.69,3.29,0,0,2.54-.95,3.41-1.84,.87-.89,11.87-5.59,11.87-5.59Zm37.93,17.07c-.56-7.61-.24-14.79,1.09-20.92,12.21,3.24,32.13,36.12,17.71,63.9-12.29-10.77-17.66-27.56-18.8-42.98Z" />
                                <path className="cls-42"
                                    d="M308.23,942.16c-1.14,.08-3.75,.77-3.75,.77,0,0,2.81,9.97,3.24,11.95,.43,1.98-2.35,9.2-4.55,13.91-2.08,4.47-3.42,7.82-8.46,9.99-5.04,2.17-6.77,3.34-7.9,4.68-1.13,1.33-6.75,7-8.34,8.86,1.48-.21,4.17-2.22,5.19-3.12,1.02-.9,4.68-4.05,6.73-4.88,2.05-.83,4.51-2.13,4.51-2.13,0,0-.7,4.97-1.3,6.11-.6,1.15-1.37,6.51-1.7,9.67,1.16-1.44,2.67-6.65,3.39-7.8,.72-1.16,4.6-6.59,6.18-8.49,1.58-1.9,10.92-12.45,11.24-20.82s-1.85-12.36-2.43-14.29c-.58-1.93-2.05-4.41-2.05-4.41Z" />
                                <path className="cls-22"
                                    d="M277.12,929.92c-2.56-1.71-9.77-3.6-16.43-.99-6.66,2.61-13.89,2.75-18.88,1.21-4.99-1.54-12.21-5.28-20.65-2.51,3.44-2.36,7.38-2.43,9.9-2.12,2.52,.31,5.35,.89,7.7,1.39,2.35,.49,7.42,1.88,13.24,.73,1.63-.33,2.83-.81,2.83-.81,0,0-3.28-1.64-4.07-2.18-.78-.54-4.87-3.84-5.67-4.52-.79-.68-4.66-4.31-5.01-4.88,2.14,1.4,2.79,1.76,3.6,2.29,.81,.52,3.36,2.61,4.15,3.09,.79,.48,6.01,4.33,10.53,4.23,4.52-.1,9.56-1.56,11.94-1.18,2.38,.38,3.29,2.12,3.29,2.12l3.54,4.13Z" />
                                <path className="cls-29"
                                    d="M164.65,936.94c-.04,11.67,.22,18.83-9.66,26.32,2.07-4.09,3.69-7.61,3.96-8.31,.27-.71,3.39-8.93,3.39-8.93l2.32-9.07Z" />
                                <path className="cls-41"
                                    d="M175.61,1013.42c1.71,4.27,5.37,19.22-1.77,33.08,1.15-5.56,2.25-12.55,2.07-13.87-.19-1.32,.37-8.81,.37-8.81l-.96-8.28,.29-2.12Z" />
                                <path className="cls-29"
                                    d="M179.32,905.03s2.05,.65,2.58,3.35c-1.71,2.24-16.24,17.12-12.95,37.09,1.91,11.61,4.07,14.91,13.71,18.22-3.3-.94-6.38-1.67-8.65-1.47,.22,1.18,.58,2.63,.89,4.01,.62,1.25,2.48,5.06,2.88,6.26,.48,1.45,5.75,7.02,7.26,7.97,1.51,.95,7.13,5.34,8.82,6.18,1.7,.84,6.51,5.19,10.62,10.49-6.03-5.9-10.41-7.85-20.36-14.62-15.05-10.24-26.17-48.43-4.79-77.48Z" />
                                <path className="cls-41"
                                    d="M177.98,985.61l.95,2.94c-.53,4.74-.58,9.9-.19,15.28,.5,6.85,1.85,13.98,4.27,20.72,0-.02-.01-.03-.02-.05-7.42-15.41-5.76-33.57-5.01-38.9Z" />
                                <path className="cls-41"
                                    d="M178.67,918.13c-4.88,8.22-14.62,27.15-1.76,38.65-7.01-10.55-3.5-21.24-2.62-23.98,.88-2.74,3.49-9.61,3.49-9.61l.9-5.06Z" />
                                <path className="cls-41"
                                    d="M165.98,952.55c-.71,4.4-9.31,11.94-10.85,15.81,3.34-3.18,6.78-6.16,7.63-6.83,.85-.67,3.72-2.47,3.72-2.47l-.03-4.18-.48-2.33Z" />
                                <path className="cls-41"
                                    d="M143.68,985.76s.14-1.22,.27-1.84c-3.49,.74-8.19,3.75-10.58,4.84,2.41-.49,5.14-1.14,5.14-1.14,0,0,1.99-.85,2.3-.85,.31,0,2.55-.25,2.55-.25l.32-.76Z" />
                                <path className="cls-41"
                                    d="M176.1,1049.2c-1.08,3.24-6.62,14.83-9.75,13.84-3.3,3.75-7.89,12.13-12.89,10.53-.54,.76,.37,1.5,.77,1.91,.39,.4,2.67,1.16,3.41,.94,.74-.22,5.74-3.41,5.74-3.41l4.46-5.61s4.38-6.57,4.36-6.81,2.57-5.68,2.64-5.83,1.55-3.93,1.55-3.93l-.29-1.62Z" />
                                <path className="cls-41"
                                    d="M203.19,1039.34c-.87,2.41-3.66,16.71-5.12,16.02,2.53,4.87,6.44,11.58,6.85,13.38,.41,1.8,1.7,6.81,1.29,8.58-.26,4.84-4.62,8.97-5.18,10.92,2.12-1.44,2.5-1.49,3.34-2.22,.39-.7,3.39-2.27,3.39-2.27l1.75,8.65s.96-4.79,.96-4.88-.93-8.26-.93-8.26l-3.21-11.41-2.53-6.45-1.5-5.2-1.09-4.07,.49-4.57,.78-3.88,.69-2.75,.03-1.61Z" />
                                <path className="cls-29"
                                    d="M199.83,969.73c2.02,1.06,8.4,2.75,16.77,2.08,7.89,.53,9.81,.71,9.81,.71l-3.54-1.41-6.86-.76-7.67-.07-5.76-.22-2.76-.33Z" />
                                <path className="cls-36"
                                    d="M166.66,962.54c-4.55,2.24-18.05,14.42-19.76,27.94,1.41-11.12,5.35-16.65,7.8-19.73,2.45-3.08,6.49-7.5,6.49-7.5l5.3-4.2,.17,3.48Z" />
                                <path className="cls-36"
                                    d="M174.5,964.53c1.08,.15,17.42,3.17,30.73,12.86-3.86-4.69-14.44-9.54-15.49-9.95-1.05-.41-7.39-3.12-7.39-3.12l-8.59-2.34,.74,2.56Z" />
                                <path className="cls-29"
                                    d="M202.18,1033.22c-.38,5.89-3.43,16.14-4.29,16.82-3.12-2.45-7.91-9.79-9.23-12.52,4.97,5.68,8.64,9.34,8.64,9.34l2.12-5.59,2.76-8.05Z" />
                                <path className="cls-41"
                                    d="M192.01,991.82c10.18,7.99,10.16,19.97,10.53,26.04-1.28-6.87-5.45-17.83-10.53-26.04Z" />
                                <path className="cls-29"
                                    d="M180.6,1024.28c1.38,3.13,2.54,6.25,3.94,9.15-1.2-1.46-1.85-2.48-2.55-3.57-.86-1.34-1.9-1.08-2.16,.34-.52,2.93-.8,5.69-2.15,9.15,.83-4.04,1.24-9.4,1.08-14.73-.06-1.85,.9-2.49,1.84-.34Z" />
                                <path className="cls-29"
                                    d="M199.19,993.94c2.23,1.72,3.84,3.28,5.84,5.37-1.36-.96-2.17-1.35-3.17-1.74-.99-.39-1.8-.12-1.48,1.02,.65,2.36,1.43,4.51,1.66,7.56-.82-3.29-2.43-7.42-4.45-11.32-.7-1.35-.2-2.27,1.6-.89Z" />
                                <path className="cls-29"
                                    d="M149.58,970.5c-3.22,3.95-6.3,14.96-5.61,24.7,1.11-8.62,3.46-18.59,5.61-24.7Z" />
                                <path className="cls-29"
                                    d="M256.07,927.02c1.72-.45,5.87-1.35,8.74-1.42-7.28,1.65-14.19,5.2-20.25,3.06,3.23-.23,4.61-.48,5.27-.6,.66-.12,4.33-1.02,4.33-1.02l1.91-.02Z" />
                                <path className="cls-36"
                                    d="M191.89,994.94c-2.82-3.54-7.32-6.82-10.58-7.89-.88,1.82-2.04,5.09-2.46,11.83-.74-8.4-.27-14.65,.41-16.05,2.87,.97,7.45,4.99,8.57,6.08,1.12,1.09,3.48,3.78,3.48,3.78l.59,2.25Z" />
                                <path className="cls-36"
                                    d="M142.78,989.12c-4.51,.22-12.2,2.3-17.61,6.7,4.4-5.02,10.88-7.64,12.44-7.99,1.56-.35,5.61-.93,5.61-.93l-.44,2.23Z" />
                                <path className="cls-36"
                                    d="M191.22,1047.38c-1.99-2.12-7.79-6.48-8.82-7.59-1.78,4.49-5.67,12.92-7.56,16.65,2.33-8.39,5.96-18.73,6.35-21.93,2.02,3.16,3.22,4.66,3.89,5.65,.68,.99,4.74,5.12,4.74,5.12l1.39,2.1Z" />
                                <path className="cls-42"
                                    d="M242.93,957.37c10.09-3.05,15.21-15.1,23.85-20.25l-.72-.38c3.23-2.06,6.85-3.85,10.66-4.83,0,0,1.1,1.23,4.66,3.12-5.22,0-15.43,5.54-18.25,7.09-2.82,1.55-8.82,7.88-10.05,9.47-1.23,1.59-6.44,5.13-12.3,6.5,.41-.16,.8-.33,1.18-.51,.28-.03,.59-.09,.96-.2Z" />
                                <path className="cls-29"
                                    d="M243.38,956.88c5.88-3.17,9.32-8.19,11.6-10.74,2.35-2.63,6.28-6.33,11.09-9.4l.72,.38c-8.64,5.15-13.77,17.2-23.85,20.25l.45-.5Z" />
                                <path className="cls-104"
                                    d="M280.17,851.14s-19.73-33.01-16.09-49.6c5.2-23.65,16.38-32.38,14.79-42.14-1.59-9.77-21.94-23.35-32.04-18.22-10.1,5.13-13.8,16.45-13.8,16.45l-5.2-3.18s5.01-11.83,2.07-15.26c-2.94-3.43-12.82-9.07-17.29-7.84-4.47,1.23-8.77,10.97-8.77,10.97,0,0-11.77-5.87-18.23,4.26-6.46,10.13-5.34,17.41-2.22,23.03,3.11,5.62,8.08,8.27,8.08,8.27,0,0-1.56,8.69-4.14,12.11-2.58,3.42-4.9,4.38-4.9,4.38,0,0-7.63-14.1-8.29-25.11-.66-11.01-1.9-19.9-7.87-22.03-5.96-2.12-19.99-.79-19.83,8.1,.15,8.89,8.5,40.26,8.5,40.26l-2.43-.09s-11.53-28.54-14.54-31.96c-4.11-4.67-17.18,.59-17.44,7.17-.32,8.29,11.24,30.46,11.24,30.46,0,0-13.22,6.51-18.64,16.12-5.43,9.61-1.06,27.35-1.06,27.35,0,0-14.61-4.03-23.64,1.37-9.03,5.4-10.1,26.75-1.46,37.61,8.65,10.86,33.46,1.29,33.46,1.29,0,0-20.36,7.55-28.25,11.6-2.17,1.11-2.66,15.39,4.2,18.44,4.3,1.91,11.07,.38,14.84-.74,.92-.27,1.72,.69,1.27,1.54-1.52,2.87-3.77,8.21-4.56,15.81-.51,4.89,3.14,13.59,3.14,13.59,0,0-8.41,10.47-4.35,37.72,4.06,27.24,11.95,53.22,34.11,82.19,21.5,28.11,42.94,49.65,68.62,49.24,25.69-.41,36.99-20.67,50.22-36.32,13.23-15.65,47.22-48.39,58.33-72.39,12.39-26.77,7.05-58.62,7.05-58.62,0,0-2.79-7.81-4.81-24.09-2.03-16.28-8.65-60.15-40.06-71.72Z" />
                                <path className="cls-39"
                                    d="M324.72,945.33c-2.22,3.61-6.72,5.17-10.8,4.42-2.27-.42-4.38-1.49-6.18-2.92-.85-.67-1.63-1.42-2.34-2.23s-1.29-1.95-2.12-2.67c-.7-.6-1.69-.63-2.57-.76-1.05-.16-2.1-.33-3.15-.53-2.01-.4-4.05-.93-5.84-1.95-.84-.48-1.62-1.07-2.28-1.79s-1.03-1.77-1.73-2.48-1.61-.63-2.49-.52c-1.39,.18-2.73,.38-4.14,.33-2.48-.1-4.94-.88-6.65-2.74-.82-.89-1.53-2.06-1.55-3.3-.02-1,.16-1.98,0-2.98-.35-2.26-2.29-2.5-4.22-2.97-2.5-.61-5.05-1.09-7.47-1.97-2.24-.81-4.34-2-5.99-3.75-.76-.82-1.43-1.74-1.87-2.77-.55-1.3-.48-2.55-.53-3.93-.08-2.2-.74-3.5-2.4-4.95s-3.27-3.24-4.56-5.15c-7.08-10.48-5.95-23.47-2.44-35.01,.13-.43,.14-.97,.05-1.41-.02-.12-.19-.78-.32-.36-3.04,10-4.43,20.92-1.12,31.03,1.49,4.53,3.96,8.81,7.44,12.1,.9,.85,2.18,1.61,2.68,2.79,.53,1.25,.17,2.88,.35,4.21,.29,2.06,1.23,3.92,2.65,5.44,3.54,3.78,8.78,4.63,13.58,5.79,1.01,.25,2.64,.42,3.4,1.22s.25,2.69,.37,3.77c.22,2.02,1.22,3.81,2.81,5.07,1.96,1.55,4.49,2.03,6.94,1.95,1.27-.04,2.53-.39,3.79-.41,1.51-.03,1.89,1.02,2.61,2.09,2.37,3.52,6.98,4.44,10.88,5.07,1.27,.21,2.99,.16,3.92,1.15,.86,.92,1.5,2.04,2.38,2.96,1.75,1.83,3.9,3.35,6.31,4.18,4.57,1.57,10.12,.24,12.74-4.02,.21-.34,.16-.89,.13-1.27,0-.08-.16-.92-.29-.71h0Z" />
                                <path className="cls-39"
                                    d="M243.51,897.24c-5.1-.12-10.29,0-15.37-.54s-9.48-2.55-13.62-5.64c-3.79-2.82-7.36-5.84-9.58-10.09s-3.1-8.76-2.98-13.36c.16-5.96,1.87-11.77,3.96-17.31,.15-.41,.14-.99,.05-1.41-.03-.13-.16-.77-.32-.36-3.56,9.45-5.76,19.93-2.69,29.83,1.44,4.66,4.07,8.61,7.78,11.77,3.93,3.34,8.29,6.65,13.37,7.93,3,.76,6.1,.92,9.17,1.01,3.43,.1,6.85,.16,10.28,.24,.3,0,.31-2.05-.05-2.06h0Z" />
                                <path className="cls-39"
                                    d="M185.87,913.6c-5.63-10.9-12.86-21.41-23.43-28.04-11.08-6.95-24.65-7.52-37.36-6.68-7.79,.51-15.51,1.85-23.05,3.9-.43,.12-.13,2.11,.05,2.06,13.01-3.54,26.7-4.97,40.14-3.71,6.2,.58,12.2,2.03,17.71,5s9.87,6.75,13.81,11.2c4.81,5.42,8.62,11.64,11.94,18.06,.2,.38,.27-.24,.3-.38,.07-.38,.07-1.04-.12-1.41h0Z" />
                                <path className="cls-39"
                                    d="M162.67,940.56c-2.42,1.46-5.22,2.12-8.04,1.85-1.33-.13-2.63-.46-3.85-.99-1.43-.63-2.31-1.12-3.8-.34-2.36,1.25-4.91,1.91-7.6,1.84-2.98-.08-5.35-1.12-7.91-2.51-1.16-.63-1.69-.1-2.56,.66-1,.89-2.15,1.58-3.39,2.07-2.25,.89-4.77,1.11-7.14,.64-1.15-.23-2.28-.62-3.31-1.19-.61-.33-1.31-.75-1.78-1.28-.17-.19-.53-.59-.56-.87-.06-.49,.46-1.39,.63-1.86,1.05-2.8,1.95-5.66,2.67-8.56,1.71-6.84,2.47-13.88,2.35-20.93,0-.14-.01-1.03-.25-1.02s-.2,.94-.2,1.04c.12,6.96-.75,13.93-2.56,20.65-.44,1.64-.94,3.27-1.49,4.87-.49,1.44-1.21,2.87-1.5,4.36-.48,2.43,.3,4.23,2.43,5.48,4.33,2.53,10.17,2.02,14.01-1.19,.53-.45,1.04-1.18,1.8-1.16,.67,.02,1.25,.59,1.82,.91,1.23,.71,2.56,1.23,3.94,1.55,2.63,.61,5.43,.52,8.01-.3,.74-.23,1.45-.53,2.14-.88s1.32-.81,2.12-.77,1.48,.53,2.18,.83,1.5,.57,2.28,.74c3.29,.74,6.74,.14,9.62-1.6,.48-.29-.04-2.07-.05-2.06h0Z" />
                                <path className="cls-39"
                                    d="M276.17,854.2c-5.73-1.45-11.67-1.97-17.57-1.45-3.05,.27-6.07,.83-9.06,1.46-.5,.11-1.14,.38-1.65,.28-.77-.15-1.02-1.06-1.32-1.67-.63-1.31-1.18-2.66-1.68-4.02-1.83-4.92-3.5-9.79-6.01-14.42-2.31-4.25-5.06-8.27-8.21-11.95-3.64-4.27-7.8-8.06-12.36-11.32-.14-.1-.47,1.7-.07,1.99,8.15,5.82,14.99,13.4,19.93,22.12,2.62,4.63,4.42,9.51,6.22,14.5,.47,1.29,.96,2.58,1.52,3.84,.35,.78,.84,2.51,1.7,2.89,.54,.24,1.22-.03,1.75-.14,.71-.15,1.42-.3,2.13-.44,1.58-.31,3.17-.59,4.77-.8,6.67-.89,13.44-.47,19.96,1.18,.16,.04,.41-1.94-.05-2.06h0Z" />
                                <path className="cls-39"
                                    d="M212.27,882.1c3.24-6.1,1.52-13.39-.5-19.59-1.18-3.61-2.38-7.26-4.22-10.6s-4.39-5.93-7.36-8.2c-10.95-8.37-25.33-11.82-38.93-9.96-7.45,1.01-16.03,3.4-21.12,9.29-.24,.27-.16,.94-.13,1.27,0,.09,.12,.91,.29,.71,4.29-4.97,11.05-7.26,17.3-8.58s12.64-1.47,18.9-.54c6.25,.92,12.36,2.94,17.88,6.03,2.93,1.64,5.75,3.57,8.23,5.83,2.67,2.44,4.63,5.33,6.09,8.63,1.59,3.6,2.88,7.44,3.89,11.24,1.11,4.18,1.62,8.51-.48,12.48-.19,.36-.17,.87-.13,1.27,0,.07,.18,.92,.29,.71h0Z" />
                                <path className="cls-39"
                                    d="M195.37,776.96c-.97,4.81-2.68,9.85-5.46,13.94-1.48,2.17-3.54,2.99-6,3.64s-4.91,1.09-7.39,1.42c-9.75,1.32-19.6,.92-29.25,3.07-8.75,1.95-17.61,5.43-24.61,11.15-1.49,1.22-2.83,2.65-4.17,4.03-1.25,1.29-2.43,2.67-3.31,4.24-1.84,3.27-2.45,7.26-2.32,10.98,.24,7.06,.9,15.79,8.24,19.13,.04,.02,.44-1.83-.05-2.06-6.72-3.05-7.56-10.7-7.74-17.24-.11-4.06,1.14-8.08,3.71-11.23,2.34-2.87,5.18-5.54,8.21-7.64,7.27-5.03,15.75-8.11,24.39-9.77,9.13-1.75,18.46-1.36,27.65-2.69,2.7-.39,5.41-.91,8.02-1.69,2.36-.7,3.95-1.93,5.23-4.04,2.55-4.21,4.23-8.97,5.2-13.78,.08-.38,.17-1.11-.04-1.46-.14-.24-.22-.46-.32,0h0Z" />
                            </g>
                            <g>
                                <path className="cls-9"
                                    d="M212.92,831.01c0-20.43-23.31-31.29-45.75-31.22-19.36,.06-43.38,9.8-43.86,32.84,1.8,34.45,27.37,63.67,68.61,43.83,10.51-5.06,16.54-13.12,20-22.42l1-23.03Z" />
                                <path className="cls-34"
                                    d="M214.32,831.65c.16-8.52-4.5-16.43-10.8-21.88-8.31-7.19-19.28-10.57-30.12-11.18-18.55-1.04-43.12,4.14-49.99,23.97-1.38,3.98-1.9,8.14-1.51,12.33,.47,4.98,1.45,9.9,2.97,14.67,2.85,8.95,7.75,17.46,14.73,23.81s15.37,9.98,24.55,10.67c5.28,.4,10.58-.22,15.7-1.5,6.04-1.51,12.15-3.85,17.43-7.19,4.85-3.07,8.96-7.22,12-12.1,1.47-2.37,2.69-4.88,3.7-7.48,.34-.87,.36-1.49,.4-2.4,.29-6.68,.58-13.37,.87-20.05,.02-.56,.05-1.12,.07-1.68,.04-.87-1.7-2.78-1.76-1.24-.24,5.56-.48,11.13-.73,16.69l-.19,4.38c-.03,.6,.06,1.37-.09,1.95-.25,.98-.94,2.16-1.38,3.1-.59,1.26-1.23,2.5-1.93,3.7-1.33,2.27-2.88,4.41-4.65,6.36-4.01,4.43-9.03,7.54-14.47,9.91s-10.74,4.01-16.41,4.76c-9.14,1.21-18.58-.25-26.54-5.05-7.49-4.51-13.14-11.42-16.9-19.24-1.99-4.14-3.43-8.55-4.4-13.04s-1.77-9.14-1.15-13.67c1.05-7.63,4.96-14.45,11.01-19.21,7.89-6.2,18.09-8.76,27.91-9.68,11.45-1.08,23.35,.02,33.64,5.51,7.19,3.84,13.82,10.15,15.73,18.33,.4,1.71,.57,3.44,.54,5.19-.02,.86,1.73,2.77,1.76,1.24Z" />
                            </g>
                            <g>
                                <path className="cls-9"
                                    d="M213.97,831.01c0-20.43,23.31-31.29,45.75-31.22,19.36,.06,43.38,9.8,43.86,32.84-1.8,34.45-27.37,63.67-68.61,43.83-10.51-5.06-16.54-13.12-20-22.42l-1-23.03Z" />
                                <path className="cls-34"
                                    d="M214.79,831.32c-.15-8.06,4.23-15.32,10.24-20.42,8.17-6.93,19.02-10.02,29.57-10.45,17.79-.72,40.9,4.44,46.96,23.68,1.25,3.98,1.56,7.92,1.12,12.05-.5,4.7-1.49,9.35-2.98,13.84-2.82,8.49-7.53,16.46-14.27,22.42s-15.12,9.37-24.02,9.78c-5.06,.23-10.14-.48-15.01-1.84-5.82-1.63-11.73-4.01-16.69-7.5-4.47-3.15-8.17-7.3-10.87-12.06-.63-1.11-1.2-2.25-1.73-3.41-.43-.95-1.08-2.08-1.32-3.09-.15-.64-.06-1.44-.09-2.08-.28-6.46-.56-12.91-.84-19.37-.02-.52-.04-1.03-.07-1.55-.04-.95-2.7-1.29-2.67-.57,.26,5.93,.52,11.85,.77,17.78,.1,2.25-.1,4.61,.75,6.72,2.08,5.15,5.06,9.96,9.02,13.89,4.42,4.38,9.77,7.35,15.49,9.7s11.14,3.82,16.97,4.46c9.46,1.02,19.14-.74,27.26-5.83,7.8-4.89,13.65-12.28,17.5-20.57,2.06-4.44,3.55-9.13,4.52-13.93s1.6-9.31,.89-13.96c-1.21-7.92-5.51-14.87-11.87-19.71-8.45-6.43-19.34-9.01-29.74-9.9-11.84-1.01-24.22,.29-34.74,6.2-7.54,4.23-14.22,11.02-16.24,19.66-.42,1.8-.61,3.64-.58,5.49,.02,.94,2.69,1.31,2.67,.57Z" />
                            </g>
                            <path id="Mustache" className="cls-34"
                                d="M143.73,892.73c7.65,2.23,12.4,12.95,12.4,12.95,0,0-4.65-7.3-12.53-9.72-5.42-1.67-9.9,.85-10.15,7.42-.25,6.57,4.77,11.72,20.1,13.46,14.33,1.63,45.14-7.94,48.52-9.08,5.77-1.96,9.01,.06,9.01,.06,0,0,3.39-1.77,8.99,.63,3.28,1.41,33.26,13.32,47.67,12.81,15.42-.55,20.82-5.3,21.08-11.87,.25-6.57-4.02-9.43-9.55-8.18-8.04,1.81-13.24,8.72-13.24,8.72,0,0,5.57-10.32,13.36-11.95,7.84-1.64,16.98,2.98,15.7,12.8-1.42,10.93-15.34,16.64-29.41,15.5-14.84-1.21-42.49-7.66-48.64-8.18-3.78-.32-6.29-1.76-6.28-1.89,0,.13-2.62,1.37-6.41,1.4-6.17,.05-34.24,4.83-49.13,4.4-14.69-.42-27.55-6.72-28.13-17.72-.51-9.89,8.95-13.79,16.64-11.55Z" />
                        </g>
                    </g>
                </g>
                <g id="Ojos_C">
                    <circle className="cls-38" cx="190.98" cy="827" r="18.86" />
                    <circle className="cls-34" cx="190.98" cy="827" r="10.62" />
                    <circle className="cls-17" cx="182.57" cy="821.06" r="7.48" />
                    <circle className="cls-38" cx="276.75" cy="825.18" r="18.86" />
                    <circle className="cls-34" cx="276.75" cy="825.18" r="10.62" />
                    <circle className="cls-17" cx="284.52" cy="818.6" r="7.48" />
                </g>
                <g id="Cejas_C">
                    <path id="Eyebrow" className="cls-34"
                        d="M203.42,788.72c1.82-4.46-2.13-9.51-10.54-12.69,.48,.87,.47,2.09,.47,2.09-.35-.11-4.66-4.25-7.76-4.57,1.12,.43,1.54,2.69,1.17,2.62-1.31-.98-5.15-3.66-6.87-3.76,.74,.42,1.63,2.06,1.42,2.03-1.83-1.28-5.9-1.67-8.13-1.75-2.36-.08-5.05,.05-7.63,.26-20.6,1.67-34.92,1.33-39.36-6.16-1.11-1.87-1.67-5.32,.33-8.08,0,0-7.54,2.05-10.1,7.49-.9,1.9-1.81,7.3,1.23,9.4,0,0-3.88,.53-5.41-4.83,0,0-1.99,7.53,3.21,12.2,0,0-2.04,.05-3.89-1.37,0,0,.71,7.57,20.25,8.99,16.87,1.23,15.43,.29,38.14-1.03,17.78-1.04,31.26,4.59,33.47-.82Z" />
                    <path id="Eyebrow-2" className="cls-34"
                        d="M224.8,792.03c-2.11-4.33,1.49-9.63,9.68-13.36-.42,.9-.32,2.12-.32,2.12,.34-.13,4.36-4.55,7.43-5.08-1.09,.5-1.36,2.78-1,2.69,1.24-1.07,4.9-4,6.6-4.21-.71,.46-1.49,2.16-1.28,2.12,1.74-1.4,5.77-2.06,7.99-2.29,2.35-.24,5.04-.29,7.63-.25,20.67,.3,34.93-1,38.87-8.77,.99-1.94,1.31-5.42-.86-8.04,0,0,7.66,1.54,10.58,6.8,1.02,1.84,2.3,7.17-.6,9.46,0,0,3.91,.27,5.08-5.18,0,0,2.49,7.38-2.39,12.39,0,0,2.04-.09,3.79-1.63,0,0-.21,7.6-19.61,10.32-16.75,2.35-15.38,1.32-38.12,1.51-17.81,.15-30.89,6.66-33.45,1.41Z" />
                </g>
            </g>
        </g>
    </svg>
        </StyledContent>
    )
}

export default Success;