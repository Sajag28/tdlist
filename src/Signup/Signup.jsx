import React from 'react';
import Signup1 from './Signup1.jsx';
import Signup2 from './Signup2.jsx';
import Signup3 from './Signup3.jsx';
import Signup4 from './Signup4.jsx';
import { useMediaQuery } from 'react-query';


export default function Signup() {
  const isExtraLargeViewport = useMediaQuery('(min-width: 1200px)');
  const isLargeViewport = useMediaQuery('(min-width: 992px)');
  const isMediumViewport = useMediaQuery('(min-width: 768px)');
  const isSmallViewport = useMediaQuery('(min-width: 600px)');
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  return (
    <div style={styles.container}>
      {isExtraLargeViewport && <Signup1 />}
      {isLargeViewport && !isExtraLargeViewport && <Signup2 />}
      {isMediumViewport && !isLargeViewport && <Signup3 />}
      {isSmallViewport && !isMediumViewport && <Signup4 />}
    </div>
  );
};