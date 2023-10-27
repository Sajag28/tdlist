import React from 'react'
import Login1 from './Login1.jsx'
import Login2 from './Login2.jsx'
import Login3 from './Login3.jsx'
import Login4 from './Login4.jsx'
import { useMediaQuery } from 'react-query';

export default function MainLogin() {
  const isExtraLargeViewport = useMediaQuery('(min-width: 1200px)');
  const isLargeViewport = useMediaQuery('(min-width: 992px)');
  const isMediumViewport = useMediaQuery('(min-width: 768px)');
  const isSmallViewport = useMediaQuery('(min-width: 600px)');

  if (isExtraLargeViewport) {
    return <Login1/>;
  } else if (isLargeViewport) {
    return <Login2/>;
  } else if (isMediumViewport) {
    return <Login3/>;
  } else if (isSmallViewport) {
    return <Login4/>;
  } else {
    return null;
  }
};