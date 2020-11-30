import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { LoadableContent } from '../components/page';
import { View } from '../components/view';
import { view } from '../ducks';

// eslint-disable-next-line import/order
import type { match as Match } from 'react-router-dom';
import type ICharacter from '../types/Character';

interface IMatchParams {
  id: string
}

interface IViewProps {
  character: ICharacter,
  loading: boolean,
  match: Match<IMatchParams>,
  fetchCharacter: (arg0: string) => void
}

function ViewWrapper({
  character, loading, match, fetchCharacter,
}: IViewProps) {
  const { id } = match.params;

  React.useEffect(
    () => {
      fetchCharacter(id);
    },
    [id],
  );

  return (
    <LoadableContent
      loading={loading}
      isNoData={!character}
      renderContent={() => <View character={character} />}
    />
  );
}

function mapDispatchToProps(dispatch: (arg0: any) => void) {
  return {
    fetchCharacter: (id: string) => {
      dispatch(view.actions.fetch(id));
    },
  };
}

export default connect(
  _.property('view'),
  mapDispatchToProps,
)(ViewWrapper);
