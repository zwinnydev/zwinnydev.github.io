import React from "react";

type IconProps = React.HtmlHTMLAttributes<SVGElement>;

export const Icons = {
  github: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Facebook</title>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>LinkedIn</title>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
      </svg>
  ),
  blueSky: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 64 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>BlueSky</title>
      <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"></path>
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      role="img"
      fill="#4dddd0"
      viewBox="25.908296711840563 50.00000000000003 514.8536678069175 475"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>zwinny.dev</title>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_2" x="95.90829671184056" y="120.00000000000003" viewBox="87.90005493164062 207.6999969482422 1300.56689453125 1162.300048828125" height="334.99999999999994" width="374.8536678069175" preserveAspectRatio="xMinYMin" enableBackground="new 0 0 1500 1500">
        <path d="M791.2,207.7c0,0,252.6,44,374.2,205.7C1287,575.1,1258.5,663,1258.5,663s-48.5-96.2-121-105.3  c0,0,10.1,16.5,19.1,64.4c12.6,66.9,2.3,100.4,2.3,100.4s-129.4-194-229-266.5s-255.3-124.2-397.1,27.2c0,0,175.4-31.3,168.2-23.3  c-58.8,65.2,160.4,245.1,137.8,234.8c-69.4-31.7-200.9-1.2-287.8,36.2c-287.6,124-366.1,375.8-366.1,375.8l-97-314.4  c0,0,266.3-173.8,385.3-171.2c0,0-155.8-76.7-385.3,19.8l15.5-274.3c0,0,241.1,1.1,247.5,6.3c6.5,5.2-33.6-36-83.9-58.7  c-50.7-22.9-140.3-42-140.3-42s469.6-110,734.8,33.6C861.3,306,880.4,273.6,791.2,207.7z"/>
        <path d="M620,890.9c0,0-289.7,161.1-289.7,479.1l-122.2-178.5C208.2,1191.5,347.1,955.6,620,890.9z"/>
        <path d="M847.4,521.1c0,0,4.9,96.1,111.6,137.8C959,658.8,973.6,562.8,847.4,521.1z"/>
        <path d="M689.3,873.9c0,0,223.4-18.4,362.2,7.1c168.5,31,231.6,162.4,231.6,162.4s36.2-9.1,56.9-29.8  c20.7-20.7,62.1-68.6,44-159.1s-95.7-139.7-95.7-139.7s-43.9,79-164.3,94.4C901.5,837.7,761.9,855.5,689.3,873.9z"
      />
      <svg xmlns="http://www.w3.org/2000/svg" y="387.286" viewBox="1.015384554862976 2.450000047683716 260.3287353515625 47.45000076293945" x="208.34913879394531" height="47.45000076293945" width="260.3287353515625">
      <g fill="#4dddd0" fillOpacity="1">
        <path d="M16.80 17.50L3.20 17.50Q1.40 17.50 1.30 15.15L1.30 15.15Q1.30 12.80 3.20 12.80L3.20 12.80L20.55 12.80Q22.15 12.80 23.08 13.33Q24 13.85 24.10 14.75L24.10 14.75Q24.15 15.55 24.08 16.35Q24 17.15 23.70 17.55L23.70 17.55L8.35 38.20L22.50 38.20Q24.30 38.20 24.30 40.55L24.30 40.55Q24.40 41.75 23.90 42.33Q23.40 42.90 22.50 42.90L22.50 42.90L4.55 42.90Q1.30 42.90 1.05 41.00L1.05 41.00Q0.90 39.25 1.40 38.15L1.40 38.15L16.80 17.50ZM42.60 27.30L39.05 41.35L39.10 41.30Q38.75 42.45 37.75 42.80Q36.75 43.15 35.75 43.15L35.75 43.15Q34.80 43.15 33.77 42.80Q32.75 42.45 32.45 41.30L32.45 41.30L32.50 41.35L25.95 15.45Q25.35 13.35 27.90 12.65L27.90 12.65Q30.35 12.00 31.05 14.35L31.05 14.35L31.05 14.30L35.10 30.60L36.45 30.60L40.50 14.30Q40.75 13.25 41.63 12.93Q42.50 12.60 43.25 12.60L43.25 12.60Q44.10 12.60 44.92 12.98Q45.75 13.35 46.05 14.30L46.05 14.30Q46.50 16.10 46.88 17.65Q47.25 19.20 47.60 20.65Q47.95 22.10 48.28 23.50Q48.60 24.90 49 26.40L49 26.40L50.10 30.65L51.45 30.65Q52.45 26.60 53.48 22.48Q54.50 18.35 55.50 14.30L55.50 14.30L55.45 14.35Q56.15 12.00 58.60 12.65L58.60 12.65Q61.15 13.25 60.55 15.45L60.55 15.45L54.05 41.35L54.10 41.30Q53.80 42.45 52.78 42.80Q51.75 43.15 50.75 43.15L50.75 43.15Q49.80 43.15 48.80 42.80Q47.80 42.45 47.45 41.30L47.45 41.30L47.50 41.35L43.95 27.30L42.60 27.30ZM70.10 15.00L70.10 40.80Q70.10 43.20 67.35 43.20L67.35 43.20Q64.55 43.20 64.55 40.80L64.55 40.80L64.55 15.00Q64.55 12.60 67.35 12.60L67.35 12.60Q70.10 12.60 70.10 15.00L70.10 15.00ZM71.15 6.30L71.15 6.30Q71.15 7.90 70.05 9.00Q68.95 10.10 67.35 10.10L67.35 10.10Q65.75 10.10 64.63 9.00Q63.50 7.90 63.50 6.30L63.50 6.30Q63.50 4.65 64.63 3.55Q65.75 2.45 67.35 2.45L67.35 2.45Q68.95 2.45 70.05 3.55Q71.15 4.65 71.15 6.30ZM82.55 21.15L82.55 40.80Q82.55 43.20 79.80 43.20L79.80 43.20Q77.05 43.20 77.05 40.80L77.05 40.80L77.05 20.70Q77.05 18.65 77.70 17.15Q78.35 15.65 79.75 14.70L79.75 14.70Q82.40 12.80 85.05 12.80L85.05 12.80L93.10 12.80Q95.65 12.80 98.40 14.70L98.40 14.70Q101.10 16.60 101.10 20.70L101.10 20.70L101.10 40.80Q101.10 43.20 98.35 43.20L98.35 43.20Q95.60 43.20 95.60 40.80L95.60 40.80L95.60 21.15Q95.60 19.85 94.80 18.65L94.80 18.65L94.85 18.70Q94.20 17.50 92.20 17.50L92.20 17.50L85.95 17.50Q83.90 17.50 83.25 18.70L83.25 18.70Q82.55 19.75 82.55 21.15L82.55 21.15ZM113.05 21.15L113.05 40.80Q113.05 43.20 110.30 43.20L110.30 43.20Q107.55 43.20 107.55 40.80L107.55 40.80L107.55 20.70Q107.55 18.65 108.20 17.15Q108.85 15.65 110.25 14.70L110.25 14.70Q112.90 12.80 115.55 12.80L115.55 12.80L123.60 12.80Q126.15 12.80 128.90 14.70L128.90 14.70Q131.60 16.60 131.60 20.70L131.60 20.70L131.60 40.80Q131.60 43.20 128.85 43.20L128.85 43.20Q126.10 43.20 126.10 40.80L126.10 40.80L126.10 21.15Q126.10 19.85 125.30 18.65L125.30 18.65L125.35 18.70Q124.70 17.50 122.70 17.50L122.70 17.50L116.45 17.50Q114.40 17.50 113.75 18.70L113.75 18.70Q113.05 19.75 113.05 21.15L113.05 21.15ZM142.25 49.90L139.65 49.90Q137.90 49.90 137.80 47.55L137.80 47.55Q137.80 45.20 139.65 45.20L139.65 45.20L141.85 45.20Q143.60 45.20 144.15 44.15L144.15 44.15L144.85 42.30L145.10 41.50L135.35 15.95L135.35 16.00Q134.95 14.80 135.53 13.95Q136.10 13.10 137.30 12.70L137.30 12.70Q138.20 12.45 138.75 12.45L138.75 12.45Q140.20 12.45 140.55 14.15L140.55 14.15L144.50 24.00L147.85 32.20L153.20 14.25Q153.65 12.45 155.30 12.45L155.30 12.45Q155.70 12.45 156.60 12.70L156.60 12.70Q157.80 13.05 158.32 13.85Q158.85 14.65 158.55 15.75L158.55 15.75Q156.30 23.40 153.97 31.15Q151.65 38.90 149.40 46.50L149.40 46.50Q149.15 47.05 148.63 47.63Q148.10 48.20 147.25 48.73Q146.40 49.25 145.15 49.58Q143.90 49.90 142.25 49.90L142.25 49.90ZM170.40 38.80L170.40 38.80Q170.40 40.50 169.25 41.68Q168.10 42.85 166.40 42.85L166.40 42.85Q164.70 42.85 163.55 41.68Q162.40 40.50 162.40 38.80L162.40 38.80Q162.40 37.15 163.55 35.98Q164.70 34.80 166.40 34.80L166.40 34.80Q168.10 34.80 169.25 35.98Q170.40 37.15 170.40 38.80ZM195.55 41.15L195.55 17.50L185.90 17.50Q183.85 17.50 183.20 18.70L183.20 18.70Q182.50 19.75 182.50 21.15L182.50 21.15L182.50 35.55Q182.50 36.85 183.30 37.53Q184.10 38.20 185.95 38.20L185.95 38.20L191.10 38.20Q192.90 38.20 192.90 40.55L192.90 40.55Q192.90 41.55 192.47 42.23Q192.05 42.90 191.10 42.90L191.10 42.90L185.05 42.90Q181.90 42.90 179.45 41.30L179.45 41.30Q177 39.80 177 35.60L177 35.60L177 20.70Q177 18.65 177.65 17.15Q178.30 15.65 179.70 14.70L179.70 14.70Q182.35 12.80 185 12.80L185 12.80L195.55 12.80L195.55 5.30Q195.55 2.90 198.30 2.90L198.30 2.90Q201.05 2.90 201.05 5.30L201.05 5.30L201.05 40.80Q201.05 43.20 198.30 43.20L198.30 43.20Q197.25 43.20 196.40 42.83Q195.55 42.45 195.55 41.15L195.55 41.15ZM213.15 20.75L213.15 34.90Q213.15 36.10 213.92 37.15Q214.70 38.20 216.55 38.20L216.55 38.20L222.80 38.20Q224.65 38.20 225.43 37.28Q226.20 36.35 226.20 35.15L226.20 35.15L226.20 34.60Q226.20 32.25 228.95 32.25L228.95 32.25Q231.70 32.25 231.70 34.60L231.70 34.60L231.70 35.20Q231.70 37.30 231.03 38.65Q230.35 40.00 229 41.00L229 41.00Q226.35 42.90 223.70 42.90L223.70 42.90L215.30 42.90Q212.65 42.90 210.15 41.00L210.15 41.00Q208.95 40.00 208.30 38.48Q207.65 36.95 207.65 34.95L207.65 34.95L207.65 20.70Q207.65 16.65 210.15 14.70L210.15 14.70Q211.40 13.80 212.72 13.28Q214.05 12.75 215.30 12.75L215.30 12.75L223.70 12.75Q224.90 12.75 226.35 13.23Q227.80 13.70 229.05 14.50L229.05 14.50Q230.25 15.35 230.97 16.85Q231.70 18.35 231.70 20.40L231.70 20.40L231.70 27.15Q231.70 28.30 231.03 29.20Q230.35 30.10 228.55 30.10L228.55 30.10L217.75 30.10Q215.95 30.10 215.85 27.75L215.85 27.75Q215.85 25.40 217.75 25.40L217.75 25.40L226.25 25.40L226.20 20.75Q226.20 19.50 225.43 18.48Q224.65 17.45 222.80 17.45L222.80 17.45L216.55 17.45Q214.70 17.45 213.92 18.48Q213.15 19.50 213.15 20.75L213.15 20.75ZM248.80 43.20L248.25 43.20Q248.15 43.20 248 43.18Q247.85 43.15 247.70 43.15L247.70 43.15Q247.45 43.15 247 43.15L247 43.15Q246.55 43.15 246.15 43.10L246.15 43.10Q245.30 43.05 244.70 42.63Q244.10 42.20 243.85 41.60L243.85 41.60L235.45 15.80Q235.20 14.75 235.72 13.93Q236.25 13.10 237.40 12.70L237.40 12.70Q237.75 12.60 238.10 12.55Q238.45 12.50 238.70 12.50L238.70 12.50Q240.25 12.50 240.85 14.20L240.85 14.20L244.50 25.55L248.35 37.45L255.85 14.20Q256.40 12.45 257.85 12.45L257.85 12.45Q258.40 12.45 259.25 12.70L259.25 12.70Q260.55 13.05 261.05 13.88Q261.55 14.70 261.20 15.80L261.20 15.80L252.85 41.60Q252.40 43.00 250.50 43.10L250.50 43.10Q250.40 43.10 250.28 43.13Q250.15 43.15 250.05 43.15L250.05 43.15Q249.65 43.20 249.35 43.20L249.35 43.20Q249.05 43.20 248.80 43.20L248.80 43.20Z" transform="translate(0, 0)">
      </path>
      </g>
      </svg>
      </svg>
    </svg>
  )
};
