import { cn } from "@/lib/utils";

export const ButtonBorder = ({ className }: { className: string }) => {
  // <-- renamed to PascalCase
  return (
    <svg
      className={cn(" fill-none  color-white w-full h-full", className)}
      width="300"
      height="89"
      viewBox="0 0 300 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3224 1.34826H299.038V22.7053L233.704 88.0391H0.714355V28.9563L28.3224 1.34826Z"
        stroke="currentColor"
      ></path>
    </svg>
  );
};

export const HeaderLine = ({ className }: { className: string }) => {
  // <-- renamed to PascalCase
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      id="10015.io"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="Menu_bgDots__cTHb5Menu_active__TVHdP/"
          x="0"
          y="0"
          width="2"
          height="2"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(0, 0) rotate(0) skewX(0)"
        >
          <svg width="1" height="1">
            <g opacity="1">
              <circle cy="20%" cx="20%" r="20%" fill="currentColor"></circle>
            </g>
          </svg>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="rgba(255, 255, 255, 0)"
      ></rect>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#Menu_bgDots__cTHb5Menu_active__TVHdP/)"
      ></rect>
    </svg>
  );
};

export const HeaderWhiteLine = ({ className }: { className: string }) => {
  // <-- renamed to PascalCase
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      id="10015.io"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="Menu_bgDots__cTHb5Menu_active__TVHdP/"
          x="0"
          y="0"
          width="2"
          height="2"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(0, 0) rotate(0) skewX(0)"
        >
          <svg width="1" height="1">
            <g opacity="1">
              <circle cy="20%" cx="20%" r="20%" fill="currentColor"></circle>
            </g>
          </svg>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="rgba(255, 255, 255, 0)"
      ></rect>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#Menu_bgDots__cTHb5Menu_active__TVHdP/)"
      ></rect>
    </svg>
  );
};

export const LeftLine = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      width="172"
      height="9"
      viewBox="0 0 172 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M170.9 8.73303L162.444 0.436035H0.36731"
        stroke="currentColor"
        strokeWidth="0.685824"
      ></path>
    </svg>
  );
};

export const LeftLine2 = ({
  className,
  style,
}: {
  className: string;
  style: React.CSSProperties;
}) => {
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      width="37"
      height="901"
      viewBox="0 0 37 901"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M12.9883 756.254V12.9883L1 1" stroke="currentColor"></path>
      <path d="M36.4395 900.5L13 877.503L13 755" stroke="currentColor"></path>
    </svg>
  );
};

export const RightStrap = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      width="23"
      height="505"
      viewBox="0 0 23 505"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11.5684"
        y="358.721"
        width="11.4287"
        height="145.895"
        fill="currentColor"
      ></rect>
      <rect
        x="11.5684"
        y="0.553711"
        width="11.4287"
        height="145.895"
        fill="currentColor"
      ></rect>
      <rect
        x="0.136719"
        y="146.449"
        width="11.4287"
        height="212.271"
        fill="currentColor"
      ></rect>
    </svg>
  );
};

export const ProjectLine = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      width="23"
      height="1024"
      viewBox="0 0 23 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.25"
        d="M1.38599 1023.86L1.38599 1009.51L21.9216 987.627L21.9216 843.451L1.386 823.068L1.38603 568.745L21.9217 548.362L21.9217 401.729L1.38604 381.346L1.38608 0.890734"
        stroke="currentColor"
      ></path>
    </svg>
  );
};

export const DashedLine = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn("fill-none color-white w-full h-full", className)}
      width="17"
      height="774"
      viewBox="0 0 17 774"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="16.852"
        y1="387.322"
        x2="0.889561"
        y2="387.322"
        stroke="currentColor"
      ></line>
      <line
        x1="16.852"
        y1="501.708"
        x2="0.679531"
        y2="501.708"
        stroke="currentColor"
      ></line>
      <line
        x1="0.678604"
        y1="271.939"
        x2="16.8511"
        y2="271.939"
        stroke="currentColor"
      ></line>
      <line
        x1="16.852"
        y1="605.476"
        x2="0.679531"
        y2="605.476"
        stroke="currentColor"
      ></line>
      <line
        x1="0.678604"
        y1="168.173"
        x2="16.8511"
        y2="168.173"
        stroke="currentColor"
      ></line>
      <line
        x1="16.6406"
        y1="690.374"
        x2="0.888169"
        y2="690.374"
        stroke="currentColor"
      ></line>
      <line
        x1="0.678604"
        y1="83.2734"
        x2="16.641"
        y2="83.2734"
        stroke="currentColor"
      ></line>
      <line
        x1="16.852"
        y1="748.155"
        x2="0.679531"
        y2="748.155"
        stroke="currentColor"
      ></line>
      <line
        x1="0.678604"
        y1="25.4922"
        x2="16.8511"
        y2="25.4922"
        stroke="currentColor"
      ></line>
      <line
        x1="16.852"
        y1="772.918"
        x2="0.679531"
        y2="772.918"
        stroke="currentColor"
      ></line>
      <line
        x1="0.678604"
        y1="0.729492"
        x2="16.8511"
        y2="0.729505"
        stroke="currentColor"
      ></line>
    </svg>
  );
};
