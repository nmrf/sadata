/*
 *
 * UserList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Map, List, fromJS } from 'immutable';

import { loadEntitiesIfNeeded } from 'containers/App/actions';
import { isReady, selectUserConnections, selectUserTaxonomies } from 'containers/App/selectors';
import appMessages from 'containers/App/messages';

import EntityList from 'containers/EntityList';

import { CONFIG, DEPENDENCIES } from './constants';
import { selectUsers } from './selectors';
import messages from './messages';

export class UserList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadEntitiesIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
    // reload entities if invalidated
    if (!nextProps.dataReady) {
      this.props.loadEntitiesIfNeeded();
    }
  }

  render() {
    const { dataReady } = this.props;

    const headerOptions = {
      supTitle: this.context.intl.formatMessage(messages.pageTitle),
      icon: 'users',
    };

    return (
      <div>
        <Helmet
          title={this.context.intl.formatMessage(messages.pageTitle)}
          meta={[
            { name: 'description', content: this.context.intl.formatMessage(messages.metaDescription) },
          ]}
        />
        <EntityList
          entities={this.props.entities}
          taxonomies={this.props.taxonomies}
          connections={this.props.connections}
          config={CONFIG}
          header={headerOptions}
          dataReady={dataReady}
          entityTitle={{
            single: this.context.intl.formatMessage(appMessages.entities.users.single),
            plural: this.context.intl.formatMessage(appMessages.entities.users.plural),
          }}
          locationQuery={fromJS(this.props.location.query)}
        />
      </div>
    );
  }
}

UserList.propTypes = {
  loadEntitiesIfNeeded: PropTypes.func,
  dataReady: PropTypes.bool,
  entities: PropTypes.instanceOf(List).isRequired,
  taxonomies: PropTypes.instanceOf(Map),
  connections: PropTypes.instanceOf(Map),
  location: PropTypes.object,
};

UserList.contextTypes = {
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  dataReady: isReady(state, { path: DEPENDENCIES }),
  entities: selectUsers(state, fromJS(props.location.query)),
  taxonomies: selectUserTaxonomies(state),
  connections: selectUserConnections(state),
});
function mapDispatchToProps(dispatch) {
  return {
    loadEntitiesIfNeeded: () => {
      DEPENDENCIES.forEach((path) => dispatch(loadEntitiesIfNeeded(path)));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
