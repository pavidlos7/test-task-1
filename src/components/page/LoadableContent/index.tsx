import React from 'react';
import NoData from './NoData';
import Preloader from './Preloader';

interface ILoadableContentProps {
  loading: boolean,
  isNoData: boolean,
  renderContent: () => JSX.Element
}

function LoadableContent({ loading, isNoData, renderContent }: ILoadableContentProps) {
  if (loading) {
    return <Preloader />;
  }

  if (isNoData) {
    return <NoData />;
  }

  return renderContent();
}

export default LoadableContent;
