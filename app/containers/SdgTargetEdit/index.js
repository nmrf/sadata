/*
 *
 * SdgTargetEdit
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { actions as formActions } from 'react-redux-form/immutable';

import { Map } from 'immutable';

import {
  taxonomyOptions,
  entityOptions,
  renderMeasureControl,
  renderIndicatorControl,
  renderTaxonomyControl,
  getCategoryUpdatesFromFormData,
  getConnectionUpdatesFromFormData,
  getTitleFormField,
  getReferenceFormField,
  getMarkdownField,
  getStatusField,
} from 'utils/forms';

import {
  getMetaField,
} from 'utils/fields';

import { USER_ROLES, CONTENT_SINGLE } from 'containers/App/constants';
import appMessages from 'containers/App/messages';

import {
  loadEntitiesIfNeeded,
  redirectIfNotPermitted,
  updatePath,
  updateEntityForm,
} from 'containers/App/actions';

import { selectReady } from 'containers/App/selectors';

import Loading from 'components/Loading';
import Content from 'components/Content';
import ContentHeader from 'components/ContentHeader';
import EntityForm from 'components/forms/EntityForm';

import {
  selectDomain,
  selectViewEntity,
  selectTaxonomies,
  selectIndicators,
  selectMeasures,
} from './selectors';

import messages from './messages';
import { save } from './actions';
import { DEPENDENCIES, FORM_INITIAL } from './constants';

export class SdgTargetEdit extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadEntitiesIfNeeded();
    if (this.props.dataReady && this.props.viewEntity) {
      this.props.populateForm('sdgtargetEdit.form.data', this.getInitialFormData());
    }
  }

  componentWillReceiveProps(nextProps) {
    // reload entities if invalidated
    if (!nextProps.dataReady) {
      this.props.loadEntitiesIfNeeded();
    }
    // repopulate if new data becomes ready
    if (nextProps.dataReady && !this.props.dataReady && nextProps.viewEntity) {
      this.props.redirectIfNotPermitted();
      this.props.populateForm('sdgtargetEdit.form.data', this.getInitialFormData(nextProps));
    }
  }

  getInitialFormData = (nextProps) => {
    const props = nextProps || this.props;
    const { taxonomies, indicators, viewEntity, measures } = props;

    return viewEntity
    ? Map({
      id: viewEntity.get('id'),
      attributes: viewEntity.get('attributes').mergeWith(
        (oldVal, newVal) => oldVal === null ? newVal : oldVal,
        FORM_INITIAL.get('attributes')
      ),
      associatedTaxonomies: taxonomyOptions(taxonomies),
      associatedIndicators: entityOptions(indicators, true),
      associatedMeasures: entityOptions(measures, true),
    })
    : Map();
  }

  getHeaderMainFields = () => ([ // fieldGroups
    { // fieldGroup
      fields: [
        getReferenceFormField(this.context.intl.formatMessage, appMessages, true), // required
        getTitleFormField(this.context.intl.formatMessage, appMessages, 'titleText'),
      ],
    },
  ]);

  getHeaderAsideFields = (entity) => ([
    {
      fields: [
        getStatusField(this.context.intl.formatMessage, appMessages, entity),
        getMetaField(entity, appMessages),
      ],
    },
  ]);

  getBodyMainFields = (indicators, measures) => ([
    {
      fields: [getMarkdownField(this.context.intl.formatMessage, appMessages)],
    },
    {
      label: this.context.intl.formatMessage(appMessages.entities.connections.plural),
      icon: 'connections',
      fields: [
        renderMeasureControl(measures),
        renderIndicatorControl(indicators),
      ],
    },
  ]);

  getBodyAsideFields = (taxonomies) => ([ // fieldGroups
    { // fieldGroup
      label: this.context.intl.formatMessage(appMessages.entities.taxonomies.plural),
      icon: 'categories',
      fields: renderTaxonomyControl(taxonomies),
    },
  ]);

  render() {
    const { viewEntity, dataReady, viewDomain, indicators, taxonomies, measures } = this.props;
    const reference = this.props.params.id;
    const { saveSending, saveError } = viewDomain.page;

    return (
      <div>
        <Helmet
          title={`${this.context.intl.formatMessage(messages.pageTitle)}: ${reference}`}
          meta={[
            { name: 'description', content: this.context.intl.formatMessage(messages.metaDescription) },
          ]}
        />
        <Content>
          <ContentHeader
            title={this.context.intl.formatMessage(messages.pageTitle)}
            type={CONTENT_SINGLE}
            icon="sdgtargets"
            buttons={
              viewEntity && dataReady ? [{
                type: 'cancel',
                onClick: this.props.handleCancel,
              },
              {
                type: 'save',
                onClick: () => this.props.handleSubmit(
                  viewDomain.form.data,
                  taxonomies,
                  indicators,
                  measures
                ),
              }] : null
            }
          />
          {saveSending &&
            <p>Saving</p>
          }
          {saveError &&
            <p>{saveError}</p>
          }
          { !viewEntity && !dataReady &&
            <Loading />
          }
          { !viewEntity && dataReady && !saveError &&
            <div>
              <FormattedMessage {...messages.notFound} />
            </div>
          }
          {viewEntity && dataReady &&
            <EntityForm
              model="sdgtargetEdit.form.data"
              formData={viewDomain.form.data}
              handleSubmit={(formData) => this.props.handleSubmit(
                formData,
                taxonomies,
                indicators,
                measures
              )}
              handleCancel={this.props.handleCancel}
              handleUpdate={this.props.handleUpdate}
              fields={{
                header: {
                  main: this.getHeaderMainFields(),
                  aside: this.getHeaderAsideFields(viewEntity),
                },
                body: {
                  main: this.getBodyMainFields(indicators, measures),
                  aside: this.getBodyAsideFields(taxonomies),
                },
              }}
            />
          }
        </Content>
      </div>
    );
  }
}

SdgTargetEdit.propTypes = {
  loadEntitiesIfNeeded: PropTypes.func,
  redirectIfNotPermitted: PropTypes.func,
  populateForm: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  viewDomain: PropTypes.object,
  viewEntity: PropTypes.object,
  dataReady: PropTypes.bool,
  params: PropTypes.object,
  taxonomies: PropTypes.object,
  indicators: PropTypes.object,
  measures: PropTypes.object,
};

SdgTargetEdit.contextTypes = {
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  viewDomain: selectDomain(state),
  dataReady: selectReady(state, { path: DEPENDENCIES }),
  viewEntity: selectViewEntity(state, props.params.id),
  measures: selectMeasures(state, props.params.id),
  taxonomies: selectTaxonomies(state, props.params.id),
  indicators: selectIndicators(state, props.params.id),
});

function mapDispatchToProps(dispatch, props) {
  return {
    loadEntitiesIfNeeded: () => {
      DEPENDENCIES.forEach((path) => dispatch(loadEntitiesIfNeeded(path)));
    },
    redirectIfNotPermitted: () => {
      dispatch(redirectIfNotPermitted(USER_ROLES.MANAGER));
    },
    populateForm: (model, formData) => {
      dispatch(formActions.load(model, formData));
    },

    handleSubmit: (formData, taxonomies, indicators, measures) => {
      const saveData = formData
        .set(
          'sdgtargetCategories',
          getCategoryUpdatesFromFormData({
            formData,
            taxonomies,
            createKey: 'sdgtarget_id',
          })
        )
        .set(
          'sdgtargetMeasures',
          getConnectionUpdatesFromFormData({
            formData,
            connections: measures,
            connectionAttribute: 'associatedMeasures',
            createConnectionKey: 'measure_id',
            createKey: 'sdgtarget_id',
          })
        )
        .set(
          'sdgtargetIndicators',
          getConnectionUpdatesFromFormData({
            formData,
            connections: indicators,
            connectionAttribute: 'associatedIndicators',
            createConnectionKey: 'indicator_id',
            createKey: 'sdgtarget_id',
          })
        );

      dispatch(save(saveData.toJS()));
    },
    handleCancel: () => {
      dispatch(updatePath(`/sdgtargets/${props.params.id}`));
    },
    handleUpdate: (formData) => {
      dispatch(updateEntityForm(formData));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SdgTargetEdit);
