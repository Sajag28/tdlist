import React from 'react';
import MainPage1 from './MainPage1.jsx';
import MainPage2 from './MainPage2.jsx';
import MainPage3 from './MainPage3.jsx';
import MainPage4 from './MainPage4.jsx';
import { useMediaQuery } from 'react-query';

export default function MainPage() {
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
      {isExtraLargeViewport && <MainPage1 />}
      {isLargeViewport && !isExtraLargeViewport && <MainPage2 />}
      {isMediumViewport && !isLargeViewport && <MainPage3 />}
      {isSmallViewport && !isMediumViewport && <MainPage4 />}
    </div>
  );
};