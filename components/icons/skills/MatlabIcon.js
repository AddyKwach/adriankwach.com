// components/icons/skills/MatlabIcon.js

const MatlabIcon = ({ className }) => (
    <svg 
      className={className}
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <linearGradient id="a" x1="16.803" y1="16.631" x2="15.013" y2="22.411" gradientTransform="matrix(1, 0, 0, -1, 0, 32)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#512"/>
                <stop offset="0.23" stopColor="#523"/>
                <stop offset="0.36" stopColor="#534"/>
                <stop offset="0.51" stopColor="#645"/>
                <stop offset="0.66" stopColor="#568"/>
                <stop offset="0.84" stopColor="#29d"/>
            </linearGradient>
            <linearGradient id="b" x1="29.71" y1="18.983" x2="11.71" y2="14.563" gradientUnits="userSpaceOnUse">
                <stop offset="0.081" stopColor="#c33"/>
                <stop offset="0.189" stopColor="#de5239"/>
                <stop offset="0.313" stopColor="#f06e3e"/>
                <stop offset="0.421" stopColor="#fa8042"/>
                <stop offset="0.5" stopColor="#fe8643"/>
                <stop offset="0.58" stopColor="#fa7f42"/>
                <stop offset="0.696" stopColor="#ef6c3e"/>
                <stop offset="0.833" stopColor="#dc4c37"/>
                <stop offset="0.916" stopColor="#cf3633"/>
            </linearGradient>
        </defs>
        <title>matlab</title>
        <path d="M2,17.55l7.97-3.22a20.7,20.7,0,0,1,2.72-2.95c.66-.35,1.9-.16,4.17-2.98,2.2-2.75,2.9-5.1,3.93-5.1,1.63,0,2.83,3.52,4.65,8.85A115.629,115.629,0,0,0,30,24.12c-1.9-1.77-3.52-3.68-5.37-3.63-1.72.04-3.63,2.08-5.72,4.7-1.66,2.1-3.86,3.54-4.72,3.51,0,0-2.22-6.28-4.08-7.3a2.641,2.641,0,0,0-2.39.2L2,17.54Z" fill="#49d"/>
        <path d="M19.8,4.02c-.67.9-1.48,2.55-2.94,4.38-2.27,2.82-3.5,2.63-4.17,2.98a19.674,19.674,0,0,0-2.72,2.95l3.3,2.41c2.8-3.82,4.3-7.96,5.47-10.64A13.579,13.579,0,0,1,19.8,4.02Z" fill="url(#a)"/>
        <path d="M20.8,3.3c-2.18,0-3.67,11.48-11.72,17.89,2.26-.37,4.22,5.24,5.12,7.51,4-.68,7.2-8.33,10.43-8.21,1.85.07,3.47,1.86,5.37,3.63C25.66,15,23.63,3.3,20.8,3.3Z" fill="url(#b)"/>
    </svg>
);

export default MatlabIcon;