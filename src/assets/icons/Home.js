import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({fill, stroke, ...props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill={fill}
      stroke={stroke}
      d="M.441 11.772 12.63.733 24.44 11.568h-2.575v9.165H3.05v-8.96H.44Z"
      style={{
        fill: {fill},
        fillOpacity: 1,
      }}
    />
  </Svg>
);

export default HomeIcon;
