import type { SVGProps } from 'react';
import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={44}
        height={44}
        fill="none"
        {...props}
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <Rect width={43} height={43} x={0.5} y={0.5} fill="#131314" rx={21.5} />
        <G clipPath="url(#a)">
            <Path
                fill="#4285F4"
                d="M31.6 22.227c0-.709-.064-1.39-.182-2.045H22v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35Z"
            />
            <Path
                fill="#34A853"
                d="M22 32c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.596-4.123h-3.34v2.59A9.996 9.996 0 0 0 22 32Z"
            />
            <Path
                fill="#FBBC04"
                d="M16.404 23.9c-.2-.6-.313-1.24-.313-1.9 0-.66.113-1.3.313-1.9v-2.59h-3.34A9.997 9.997 0 0 0 12 22c0 1.614.386 3.14 1.064 4.49l3.34-2.59Z"
            />
            <Path
                fill="#E94235"
                d="M22 15.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C26.959 12.99 24.695 12 22 12c-3.91 0-7.29 2.24-8.936 5.51l3.34 2.59c.787-2.364 2.991-4.123 5.596-4.123Z"
            />
        </G>
        <Rect width={43} height={43} x={0.5} y={0.5} stroke="#8E918F" rx={21.5} />
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M12 12h20v20H12z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
