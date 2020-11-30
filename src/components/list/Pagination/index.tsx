import _ from 'lodash';
import React from 'react';
import Pagination from 'react-js-pagination';
import { useHistory } from 'react-router';
import Container from './Container';

interface IGetLinkPropsResult {
  pathname: string,
  search?: string
}

interface IPaginationProps {
  current: number,
  pages: number,
  getLinkProps: (arg0: number) => IGetLinkPropsResult
}

const limit = 20;

function PaginationWrapper({ current, pages, getLinkProps }: IPaginationProps) {
  const history = useHistory();

  const getPageUrl = (page: Parameters<typeof getLinkProps>[0]) => {
    const { pathname, search } = getLinkProps(page);

    return `${pathname}${search && `?${search}`}`;
  };
  const onChange = _.flow(
    getPageUrl,
    (url) => history.push(url),
  );

  return (
    <Container>
      <Pagination
        activePage={current}
        itemsCountPerPage={limit}
        totalItemsCount={pages * limit}
        pageRangeDisplayed={7}
        disabledClass="disabled"
        getPageUrl={getPageUrl}
        onChange={onChange}
      />
    </Container>
  );
}

export default PaginationWrapper;
