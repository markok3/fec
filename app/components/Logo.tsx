import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div>
      <svg
        viewBox="0 0 74 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={` fill-current ${className}`}
      >
        <path d="M56.2 0.140007C51.74 1.13 48.72 4.99001 48.93 9.45C49.12 13.58 51.87 16.93 55.9 17.96C56.58 18.13 57.02 18.15 60.33 18.14C62.93 18.14 64 18.16 63.97 18.24C63.94 18.3 63.12 19.53 62.14 20.97C61.15 22.42 58.33 26.57 55.86 30.2C53.39 33.84 51.24 36.92 51.08 37.05C50.27 37.73 49.03 37.56 48.38 36.68C48.23 36.49 47.71 35.12 47.16 33.5C46.08 30.34 45.75 29.59 44.93 28.52C43.67 26.87 41.83 25.72 39.67 25.23C38.79 25.04 36.88 25.01 36.05 25.19C33.11 25.81 30.86 27.5 29.57 30.05C29.36 30.47 27.98 34.38 27.45 36.06C27.26 36.66 27.06 37.01 26.73 37.32C26.36 37.67 26 37.8 25.39 37.8C24.82 37.8 24.47 37.64 24.09 37.23C23.29 36.36 13.72 22.19 8.66001 14.4C7.68001 12.89 6.70001 11.46 6.48001 11.24C6.26001 11.01 5.83001 10.69 5.52001 10.54C5.01001 10.28 4.85001 10.25 3.95001 10.25C3.05001 10.25 2.90001 10.28 2.42001 10.53C1.66001 10.93 1.05001 11.53 0.730012 12.19C0.480012 12.69 0.450012 12.86 0.450012 13.8C0.450012 14.71 0.480012 14.91 0.680012 15.29C1.62001 17.04 14.79 36.72 18.03 41.2C19.81 43.67 22.42 45 25.43 45C28.93 44.99 32.04 43.11 33.59 40.03C33.77 39.69 34.38 38.03 34.95 36.35C35.53 34.67 36.04 33.21 36.09 33.11C36.27 32.79 36.79 32.41 37.23 32.29C38.07 32.07 39.02 32.46 39.39 33.18C39.49 33.38 39.96 34.67 40.43 36.05C41.61 39.52 41.65 39.61 42.31 40.6C43.81 42.84 46.17 44.27 48.92 44.6C51.76 44.93 54.75 43.8 56.65 41.67C56.95 41.33 59.43 37.76 62.16 33.75C64.89 29.73 67.55 25.82 68.08 25.05C72.62 18.4 72.92 17.85 73.47 15.3C73.72 14.12 73.72 11.58 73.47 10.4C72.91 7.78 71.72 5.56001 69.9 3.72001C68.03 1.84 65.66 0.610004 63.03 0.150005C61.94 -0.0399933 57.04 -0.0399933 56.2 0.140007ZM62.34 7.36C63.23 7.59 64.05 8.06001 64.74 8.75C65.3 9.31001 66.1 10.49 66.1 10.76C66.1 10.85 65.08 10.9 62.36 10.95C57.63 11.04 57.42 11.03 56.93 10.64C56.36 10.19 56.07 9.57 56.14 8.92001C56.2 8.26001 56.5 7.77 57.03 7.45C57.44 7.21 57.49 7.2 59.59 7.2C61.21 7.2 61.87 7.24001 62.34 7.36Z" />
      </svg>
    </div>
  );
};

export default Logo;
