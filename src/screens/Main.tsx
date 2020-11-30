import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { stringify } from 'query-string';
import { List, NameSearch, Pagination } from '../components/list';
import { LoadableContent } from '../components/page';
import { list } from '../ducks';
import { useQuery } from '../components/hooks';

import type ICharacter from '../types/Character';

interface IFetchCharactersParams {
  name: string,
  page: number
}

interface IMainProps {
  characters: Array<ICharacter>,
  loading: boolean,
  pages?: number,
  fetchCharacters: (params: IFetchCharactersParams) => void
}

function Main({
  characters, loading, pages, fetchCharacters,
}: IMainProps) {
  const [query] = useQuery();
  const name = query.name || '';
  const page = Number(query.page) || 1;

  React.useEffect(
    () => {
      fetchCharacters({ name, page });
    },
    [name, page],
  );

  return (
    <>
      <NameSearch queryKey="name" />
      <LoadableContent
        loading={loading}
        isNoData={!characters}
        renderContent={() => (
          <>
            <List characters={characters} />
            {pages > 1 && (
            <Pagination
              current={page}
              pages={pages}
              getLinkProps={(newPage) => ({
                pathname: '/characters',
                search: stringify({ ...query, page: newPage }),
              })}
            />
            )}
          </>
        )}
      />
    </>
  );
}

Main.defaultProps = {
  pages: 0,
};

function mapDispatchToProps(dispatch: (arg0: any) => void) {
  return {
    fetchCharacters: (params: Parameters<typeof list.actions.fetch>[0]) => {
      dispatch(list.actions.fetch(params));
    },
  };
}

export default connect(
  _.property('list'),
  mapDispatchToProps,
)(Main);
