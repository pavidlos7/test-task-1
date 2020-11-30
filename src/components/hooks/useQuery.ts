import type { StringifiableRecord } from 'query-string';

import { parse, stringify } from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

export default function useQuery() {
  const history = useHistory();
  const location = useLocation();

  const query = parse(location.search);
  const replaceQuery = (nextQuery: StringifiableRecord) => {
    history.replace({
      ...location,
      search: stringify(nextQuery),
    });
  };

  return [query, replaceQuery];
}
