import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import ButtonTagCategory from 'components/buttons/ButtonTagCategory';
import BottomIconWrap from './BottomIconWrap';
import BottomTagGroup from './BottomTagGroup';

export default class EntityListItemMainBottomTaxonomies extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tags: PropTypes.array.isRequired,
  }

  render() {
    return (
      <BottomTagGroup>
        <BottomIconWrap>
          <Icon name="categories" text />
        </BottomIconWrap>
        {
          this.props.tags.map((tag, i) => (
            <ButtonTagCategory
              key={i}
              onClick={tag.onClick}
              taxId={parseInt(tag.taxId, 10)}
              disabled={!tag.onClick}
              title={tag.title}
            >
              {tag.label}
            </ButtonTagCategory>
          ))
        }
      </BottomTagGroup>
    );
  }
}