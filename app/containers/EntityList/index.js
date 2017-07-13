/*
 *
 * EntityList
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Map, List, fromJS } from 'immutable';

import Sidebar from 'components/styled/Sidebar';

import EntityListSidebar from 'components/entityList/EntityListSidebar';
import EntityListMain from 'components/entityList/EntityListMain';

import { isUserManager } from 'containers/App/selectors';

import { updatePath } from 'containers/App/actions';
import appMessages from 'containers/App/messages';

import {
  activePanelSelector,
  entitiesSelectedSelector,
} from './selectors';

import {
  resetState,
  showPanel,
  saveEdits,
  selectEntity,
  selectEntities,
  updateQuery,
  updateGroup,
  updatePage,
  updateExpand,
} from './actions';

export class EntityList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.resetStateOnMount();
  }
  formatLabel = (path) => {
    const message = path.split('.').reduce((m, key) => m[key] || m, appMessages);
    return this.context.intl.formatMessage(message);
  }
  render() {
    // console.log('EntityList.render')
    // console.log('EntityList.render' , this.props.entityIdsSelected && this.props.entityIdsSelected.toJS())

    // make sure selected entities are still actually on page
    const { entityIdsSelected, entities } = this.props;
    const entityIdsSelectedFiltered = entityIdsSelected.size > 0 && entities
      ? entityIdsSelected.filter((id) => entities.map((entity) => entity.get('id')).includes(id))
      : entityIdsSelected;
    return (
      <div>
        <Sidebar>
          { this.props.dataReady &&
            <EntityListSidebar
              entities={this.props.entities}
              taxonomies={this.props.taxonomies}
              connections={this.props.connections}
              connectedTaxonomies={this.props.connectedTaxonomies}
              entityIdsSelected={
                entityIdsSelected.size === entityIdsSelectedFiltered.size
                ? entityIdsSelected
                : entityIdsSelectedFiltered
              }
              config={this.props.config}
              locationQuery={this.props.locationQuery}
              canEdit={this.props.isManager}
              activePanel={this.props.activePanel}
              formatLabel={this.formatLabel}
              onPanelSelect={this.props.onPanelSelect}
              onAssign={(associations, activeEditOption) =>
                this.props.handleEditSubmit(associations, activeEditOption, this.props.entityIdsSelected)}
            />
          }
        </Sidebar>
        <EntityListMain
          entities={this.props.entities}
          taxonomies={this.props.taxonomies}
          connections={this.props.connections}
          connectedTaxonomies={this.props.connectedTaxonomies}
          entityIdsSelected={
            entityIdsSelected.size === entityIdsSelectedFiltered.size
            ? entityIdsSelected
            : entityIdsSelectedFiltered
          }
          locationQuery={this.props.locationQuery}

          config={this.props.config}
          header={this.props.header}
          entityTitle={this.props.entityTitle}

          dataReady={this.props.dataReady}
          isManager={this.props.isManager}

          formatLabel={this.formatLabel}
          onEntitySelect={this.props.onEntitySelect}
          onEntitySelectAll={this.props.onEntitySelectAll}
          onTagClick={this.props.onTagClick}
          onExpand={this.props.onExpand}
          onGroupSelect={this.props.onGroupSelect}
          onSubgroupSelect={this.props.onSubgroupSelect}
          onSearch={this.props.onSearch}
          onPageSelect={this.props.onPageSelect}
          onEntityClick={this.props.onEntityClick}
        />
      </div>
    );
  }
}

EntityList.propTypes = {
  // wrapper props
  entities: PropTypes.instanceOf(List).isRequired,
  taxonomies: PropTypes.instanceOf(Map),
  connections: PropTypes.instanceOf(Map),
  connectedTaxonomies: PropTypes.instanceOf(Map),
  config: PropTypes.object,
  dataReady: PropTypes.bool,
  header: PropTypes.object,
  locationQuery: PropTypes.instanceOf(Map),
  entityTitle: PropTypes.object, // single/plural
  // selector props
  activePanel: PropTypes.string,
  isManager: PropTypes.bool,
  entityIdsSelected: PropTypes.object,
  // dispatch props
  onPanelSelect: PropTypes.func.isRequired,
  handleEditSubmit: PropTypes.func.isRequired,
  onEntitySelect: PropTypes.func.isRequired,
  onEntitySelectAll: PropTypes.func.isRequired,
  onTagClick: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onGroupSelect: PropTypes.func.isRequired,
  onSubgroupSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onPageSelect: PropTypes.func.isRequired,
  onEntityClick: PropTypes.func.isRequired,
  resetStateOnMount: PropTypes.func.isRequired,
};

EntityList.contextTypes = {
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isManager: isUserManager(state),
  activePanel: activePanelSelector(state),
  entityIdsSelected: entitiesSelectedSelector(state),
});

function mapDispatchToProps(dispatch, props) {
  return {
    resetStateOnMount: () => {
      dispatch(resetState());
    },
    onPanelSelect: (activePanel) => {
      dispatch(showPanel(activePanel));
    },
    onEntitySelect: (id, checked) => {
      dispatch(selectEntity({ id, checked }));
    },
    onEntityClick: (id, path) => {
      dispatch(updatePath(`/${path || props.config.clientPath}/${id}`));
    },
    onEntitySelectAll: (ids) => {
      dispatch(selectEntities(ids));
    },
    onTagClick: (value) => {
      dispatch(updateQuery(fromJS([value])));
    },
    onExpand: (expandNoNew) => {
      // default expand by 1
      dispatch(updateExpand(typeof expandNoNew !== 'undefined'
        ? expandNoNew
        : props.expandNo + 1
      ));
    },
    onSearch: (value) => {
      dispatch(updateQuery(fromJS([
        {
          query: 'search',
          value,
          replace: true,
          checked: value !== '',
        },
      ])));
    },
    onGroupSelect: (value) => {
      dispatch(updateGroup(fromJS([
        {
          query: 'group',
          value,
        },
      ])));
      if (value === '') {
        dispatch(updateGroup(fromJS([
          {
            query: 'subgroup',
            value,
          },
        ])));
      }
    },
    onSubgroupSelect: (value) => {
      dispatch(updateGroup(fromJS([
        {
          query: 'subgroup',
          value,
        },
      ])));
    },
    onPageSelect: (page) => {
      dispatch(updatePage(page));
    },
    handleEditSubmit: (formData, activeEditOption, entityIdsSelected) => {
      const entities = props.entities.filter(
        (entity) => entityIdsSelected.includes(entity.get('id'))
      );
      let saveData = Map();
      const changes = formData.get('values').filter((option) => option.get('hasChanged'));

      const creates = changes
        .filter((option) => option.get('checked') === true)
        .map((option) => option.get('value'));
      const deletes = changes
        .filter((option) => option.get('checked') === false)
        .map((option) => option.get('value'));

      if (activeEditOption.group === 'attributes') {
        if (creates.size > 0) {
          const newValue = creates.first(); // take the first TODO multiselect should be run in single value mode and only return 1 value
          saveData = saveData
            .set('attributes', true)
            .set('path', props.config.serverPath)
            .set('entities', entities.reduce((updatedEntities, entity) =>
              entity.getIn(['attributes', activeEditOption.optionId]) !== newValue
                ? updatedEntities.push(entity.setIn(['attributes', activeEditOption.optionId], newValue))
                : updatedEntities
            , List()));
        }
      } else {
        // associations
        saveData = saveData
          .set('attributes', false)
          .set('path', activeEditOption.path)
          .set('updates', Map({
            create: List(),
            delete: List(),
          }));

        if (creates.size > 0) {
          saveData = saveData.setIn(['updates', 'create'], entities.reduce((createList, entity) => {
            let changeSet = List();
            let existingAssignments;
            switch (activeEditOption.group) {
              case ('taxonomies'):
                existingAssignments = entity.get('categories');
                break;
              case ('connections'):
                existingAssignments = entity.get(activeEditOption.optionId);
                break;
              default:
                existingAssignments = List();
                break;
            }

            if (!!existingAssignments && existingAssignments.size > 0) {
              // exclude existing relations from the changeSet
              changeSet = creates.filter((id) => !existingAssignments.includes(parseInt(id, 10)));
            } else {
              changeSet = creates; // add for all creates
            }

            return createList.concat(changeSet.map((change) => ({
              [activeEditOption.ownKey]: entity.get('id'),
              [activeEditOption.key]: change,
            })));
          }, List()));
        }
        if (deletes.size > 0) {
          saveData = saveData.setIn(['updates', 'delete'], entities.reduce((deleteList, entity) => {
            let changeSet = List();
            let existingAssignments;
            switch (activeEditOption.group) {
              case ('taxonomies'):
                existingAssignments = entity.get('categories');
                break;
              case ('connections'):
                existingAssignments = entity.get(activeEditOption.optionId);
                break;
              default:
                existingAssignments = List();
                break;
            }

            if (!!existingAssignments && existingAssignments.size > 0) {
              changeSet = existingAssignments
                .filter((assigned) => deletes.includes(assigned.toString()))
                .keySeq() // discard values
                .toList();
            }
            return deleteList.concat(changeSet);
          }, List()));
        }
      }
      // console.log(saveData.toJS())
      dispatch(saveEdits(saveData.toJS()));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EntityList);
