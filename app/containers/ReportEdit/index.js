/*
 *
 * ReportEdit
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { actions as formActions } from 'react-redux-form/immutable';
import { browserHistory } from 'react-router';

import { fromJS, List, Map } from 'immutable';

import { getCheckedValuesFromOptions } from 'components/MultiSelect';

import { PUBLISH_STATUSES } from 'containers/App/constants';

import { loadEntitiesIfNeeded } from 'containers/App/actions';

import Page from 'components/Page';
import EntityForm from 'components/forms/EntityForm';

import {
  getEntity,
  isReady,
} from 'containers/App/selectors';

import {
  pageSelector,
  formSelector,
} from './selectors';

import messages from './messages';
import { save } from './actions';

export class ReportEdit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadEntitiesIfNeeded();

    if (this.props.dataReady) {
      this.props.populateForm('reportEdit.form.data', this.getInitialFormData());
    }
  }

  componentWillReceiveProps(nextProps) {
    // reload entities if invalidated
    if (!nextProps.dataReady) {
      this.props.loadEntitiesIfNeeded();
    }

    if (nextProps.dataReady && !this.props.dataReady) {
      this.props.populateForm('reportEdit.form.data', this.getInitialFormData(nextProps));
    }
  }

  getInitialFormData = (nextProps) => {
    const props = nextProps || this.props;
    const { report } = props;
    return Map({
      id: report.id,
      attributes: fromJS(report.attributes),
      associatedDate: report && report.indicator && report.indicator.dates
      ? Object.values(report.indicator.dates).reduce((options, date) => options.push(Map({
        checked: report.attributes.due_date_id && report.attributes.due_date_id.toString() === date.id.toString(),
        value: date.id,
      })), List())
      : List(),
      // TODO allow single value for singleSelect
    });
  }

  mapDateOptions = (dates, dateId) => Object.values(dates).reduce((options, date) => {
    if (date.reportCount === 0 || (dateId && dateId.toString() === date.id.toString())) {
      options.push({
        value: { value: date.id },
        label: date.attributes.due_date,
      });
    }
    return options;
  }, []);

  renderDateControl = (dates, dateId) => ({
    id: 'dates',
    model: '.associatedDate',
    label: 'Scheduled Date',
    controlType: 'multiselect',
    options: fromJS(this.mapDateOptions(dates, dateId)),
  });
  render() {
    const { report, dataReady } = this.props;
    const reference = this.props.params.id;
    const { saveSending, saveError } = this.props.page;
    const required = (val) => val && val.length;

    const dateOptions = report && report.indicator && report.indicator.dates
      ? this.renderDateControl(report.indicator.dates, report.attributes.due_date_id)
      : null;


    let pageTitle = this.context.intl.formatMessage(messages.pageTitle);

    if (report) {
      pageTitle = `${pageTitle} (Indicator: ${report.attributes.indicator_id})`;
    }

    return (
      <div>
        <Helmet
          title={`${this.context.intl.formatMessage(messages.pageTitle)}: ${reference}`}
          meta={[
            { name: 'description', content: this.context.intl.formatMessage(messages.metaDescription) },
          ]}
        />
        { !report && !dataReady &&
          <div>
            <FormattedMessage {...messages.loading} />
          </div>
        }
        { !report && dataReady && !saveError &&
          <div>
            <FormattedMessage {...messages.notFound} />
          </div>
        }
        {report && dataReady &&
          <Page
            title={pageTitle}
            actions={[
              {
                type: 'simple',
                title: 'Cancel',
                onClick: () => this.props.handleCancel(reference),
              },
              {
                type: 'primary',
                title: 'Save',
                onClick: () => this.props.handleSubmit(this.props.form.data),
              },
            ]}
          >
            {saveSending &&
              <p>Saving</p>
            }
            {saveError &&
              <p>{saveError}</p>
            }
            <EntityForm
              model="reportEdit.form.data"
              handleSubmit={(formData) => this.props.handleSubmit(formData)}
              handleCancel={() => this.props.handleCancel(reference)}
              fields={{
                header: {
                  main: [
                    {
                      id: 'title',
                      controlType: 'input',
                      model: '.attributes.title',
                      validators: {
                        required,
                      },
                      errorMessages: {
                        required: this.context.intl.formatMessage(messages.fieldRequired),
                      },
                    },
                  ],
                  aside: [
                    {
                      id: 'no',
                      controlType: 'info',
                      displayValue: reference,
                    },
                    {
                      id: 'status',
                      controlType: 'select',
                      model: '.attributes.draft',
                      value: report.draft,
                      options: PUBLISH_STATUSES,
                    },
                    {
                      id: 'updated',
                      controlType: 'info',
                      displayValue: report.attributes.updated_at,
                    },
                    {
                      id: 'updated_by',
                      controlType: 'info',
                      displayValue: report.user && report.user.attributes.name,
                    },
                  ],
                },
                body: {
                  main: [
                    dateOptions,
                    {
                      id: 'description',
                      controlType: 'textarea',
                      model: '.attributes.description',
                    },
                    {
                      id: 'document_url',
                      controlType: 'input',
                      model: '.attributes.document_url',
                    },
                    {
                      id: 'document_public',
                      controlType: 'select',
                      model: '.attributes.document_public',
                      options: PUBLISH_STATUSES,
                    },
                  ],
                },
              }}
            />
          </Page>
        }
      </div>
    );
  }
}

ReportEdit.propTypes = {
  loadEntitiesIfNeeded: PropTypes.func,
  populateForm: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  page: PropTypes.object,
  form: PropTypes.object,
  report: PropTypes.object,
  dataReady: PropTypes.bool,
  params: PropTypes.object,
};

ReportEdit.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  page: pageSelector(state),
  form: formSelector(state),
  dataReady: isReady(state, { path: [
    'progress_reports',
    'users',
    'due_dates',
    'indicators',
  ] }),
  report: getEntity(
    state,
    {
      id: props.params.id,
      path: 'progress_reports',
      out: 'js',
      extend: [
        {
          type: 'single',
          path: 'users',
          key: 'last_modified_user_id',
          as: 'user',
        },
        {
          type: 'single',
          path: 'indicators',
          key: 'indicator_id',
          as: 'indicator',
          extend: {
            path: 'due_dates',
            key: 'indicator_id',
            reverse: true,
            as: 'dates',
            extend: {
              type: 'count',
              path: 'progress_reports',
              key: 'due_date_id',
              reverse: true,
              as: 'reportCount',
            },
          },
        },
      ],
    },
  ),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEntitiesIfNeeded: () => {
      dispatch(loadEntitiesIfNeeded('users'));
      dispatch(loadEntitiesIfNeeded('progress_reports'));
      dispatch(loadEntitiesIfNeeded('due_dates'));
      dispatch(loadEntitiesIfNeeded('indicators'));
    },
    populateForm: (model, formData) => {
      dispatch(formActions.load(model, fromJS(formData)));
    },
    handleSubmit: (formData) => {
      let saveData = formData;

      // TODO: remove once have singleselect instead of multiselect
      const formDateIds = getCheckedValuesFromOptions(formData.get('associatedDate'));
      if (List.isList(formDateIds) && formDateIds.size) {
        saveData = saveData.setIn(['attributes', 'due_date_id'], formDateIds.first());
      }

      dispatch(save(saveData.toJS()));
    },
    handleCancel: (reference) => {
      // not really a dispatch function here, could be a member function instead
      // however
      // - this could in the future be moved to a saga or reducer
      // - also its nice to be next to handleSubmit
      browserHistory.push(`/reports/${reference}`);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportEdit);
