import React, { useEffect, useState } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Row, Title } from 'styled/base';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findNavigation, getQuery } from 'utils';

import { Container, Item, WrapperItem, BackButton } from './styled';

const Navigation = () => {
  const dispatch = useDispatch();
  const selected = getQuery().get('selected');
  const [query, setQuery] = useState(selected);
  const [navigation, setNavigation] = useState(
    findNavigation(selected ? selected.split('-') : null)
  );

  const handleClick = (menu, path, id) => {
    if (!isEmpty(menu)) {
      setQuery(query ? `${query}-${id}` : id.toString());
      return setNavigation(menu);
    }
    return dispatch(push(path));
  };

  const handleBack = () => {
    const selectedIds = query.split('-');
    let newQuery = '';
    if (selectedIds.length > 1) {
      selectedIds.pop();
      newQuery = selectedIds.join(', ');
    }
    setQuery(newQuery);
    const newNavigation = findNavigation(newQuery.split('-'));
    setNavigation(newNavigation);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.delete('selected');
      params.append('selected', query);
    }
    dispatch(push({ search: params.toString() }));
  }, [query]);

  return (
    <Container>
      <Row center $bsStyle={{ alignItems: 'center' }}>
        {selected && (
          <BackButton onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} height={80} width={80} />
          </BackButton>
        )}
        <Title>Navigation</Title>
      </Row>
      {navigation.map(screen => (
        <WrapperItem key={`${screen.order}${screen.id}`}>
          <Item
            type="button"
            onClick={() => handleClick(screen.subMenu, screen.path, screen.id)}
            disabled={screen.disabled}
          >
            {screen.label}
          </Item>
        </WrapperItem>
      ))}
    </Container>
  );
};

export default Navigation;
