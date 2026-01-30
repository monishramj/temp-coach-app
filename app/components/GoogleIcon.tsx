import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function GoogleIcon({ width = 24, height = 24 }: { width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" accessibilityRole="image" accessibilityLabel="Google">
      <Path fill="#EA4335" d="M12 5.5a6.5 6.5 0 0 1 5.9 3.7l-2.8 1.9A4 4 0 1 0 12 5.5z" />
      <Path fill="#34A853" d="M6 7.6A6.5 6.5 0 0 1 12 1.5c2.2 0 4.2.9 5.6 2.3l-2 2A4 4 0 0 0 12 5.5 4 4 0 0 0 8.5 7.2z" />
      <Path fill="#FBBC05" d="M6 16.4A6.5 6.5 0 0 1 12 22.5c2.2 0 4.2-.9 5.6-2.3l-2-2A4 4 0 0 0 12 18.5a4 4 0 0 0-3.5-2.1z" />
      <Path fill="#4285F4" d="M18.5 16.8A6.5 6.5 0 0 1 12 22.5c-2.2 0-4.2-.9-5.6-2.3l2-2A4 4 0 0 0 12 18.5a4 4 0 0 0 6.5-1.7z" />
    </Svg>
  );
}