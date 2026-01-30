declare module "react-native-svg" {
    import * as React from "react";
    export type SvgProps = any;
    export const Svg: React.ComponentType<SvgProps>;
    export const Path: React.ComponentType<any>;
    export const Rect: React.ComponentType<any>;
    export const G: React.ComponentType<any>;
    export const Defs: React.ComponentType<any>;
    export const ClipPath: React.ComponentType<any>;
    export default Svg;
}