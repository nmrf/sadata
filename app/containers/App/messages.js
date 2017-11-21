/*
 * Global Messages
 *
 * This contains the global text.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  app: {
    title: {
      id: 'app.containers.App.app.title',
      defaultMessage: 'Sadata',
    },
    claim: {
      id: 'app.containers.App.app.claim',
      defaultMessage: 'Samoa\'s home of human rights implementation',
    },
  },
  overview: {
    id: 'app.containers.App.overview',
    defaultMessage: 'Overview',
  },
  buttons: {
    cancel: {
      id: 'app.containers.App.buttons.cancel',
      defaultMessage: 'Cancel',
    },
    save: {
      id: 'app.containers.App.buttons.save',
      defaultMessage: 'Save',
    },
    close: {
      id: 'app.containers.App.buttons.close',
      defaultMessage: 'Close',
    },
    add: {
      id: 'app.containers.App.buttons.add',
      defaultMessage: 'Add',
    },
    edit: {
      id: 'app.containers.App.buttons.edit',
      defaultMessage: 'Edit',
    },
    assign: {
      id: 'app.containers.App.buttons.assign',
      defaultMessage: 'Update',
    },
    previous: {
      id: 'app.containers.App.buttons.previous',
      defaultMessage: 'Previous',
    },
    next: {
      id: 'app.containers.App.buttons.next',
      defaultMessage: 'Next',
    },
    import: {
      id: 'app.containers.App.buttons.import',
      defaultMessage: 'Import',
    },
  },
  labels: {
    perPage: {
      id: 'app.containers.App.labels.perPage',
      defaultMessage: 'Per page',
    },
  },
  forms: {
    fieldRequired: {
      id: 'app.containers.App.forms.fieldRequired',
      defaultMessage: 'This field cannot be empty',
    },
    dateFormatError: {
      id: 'app.containers.App.forms.dateFormatError',
      defaultMessage: 'Please enter the date in the required format: {format}',
    },
    emailFormatError: {
      id: 'app.containers.App.forms.emailFormatError',
      defaultMessage: 'Please enter a valid email address',
    },
    passwordMismatchError: {
      id: 'app.containers.App.forms.passwordMismatchError',
      defaultMessage: 'Password confirmation does not match password',
    },
    passwordShortError: {
      id: 'app.containers.App.forms.passwordShortError',
      defaultMessage: 'Password is too short (minimum is 6 characters)',
    },
    passwordInvalidError: {
      id: 'app.containers.App.forms.passwordInvalidError',
      defaultMessage: 'Current password does not match password on file',
    },
    numberError: {
      id: 'app.containers.App.forms.numberError',
      defaultMessage: 'Please enter a number',
    },
    endDateBeforeStartDateError: {
      id: 'app.containers.App.forms.endDateBeforeStartDateError',
      defaultMessage: 'End date must be after start date',
    },
    startDateAfterEndDateError: {
      id: 'app.containers.App.forms.startDateAfterEndDateError',
      defaultMessage: 'Start date must be before end date',
    },
    outdatedError: {
      id: 'app.containers.App.forms.outdatedError',
      defaultMessage: 'Item outdated: this item had been updated on the server. Please review the latest server version below.',
    },
    titleRequiredError: {
      id: 'app.containers.App.forms.titleRequiredError',
      defaultMessage: '"Title" is required. ',
    },
    referenceRequiredError: {
      id: 'app.containers.App.forms.referenceRequiredError',
      defaultMessage: '"Reference" is required. ',
    },
  },
  hints: {
    autoReference: {
      id: 'app.containers.App.hints.autoReference',
      defaultMessage: 'Leave blank to assign database id',
    },
    user_only: {
      id: 'app.containers.App.hints.user_only',
      defaultMessage: 'Check to categorise users only',
    },
  },
  textValues: {
    user_only: {
      id: 'app.containers.App.textValues.user_only',
      defaultMessage: 'Categorises users only',
    },
  },
  importFields: {
    title: {
      id: 'app.containers.App.importFields.title',
      defaultMessage: 'Title | text (required)',
    },
    reference: {
      id: 'app.containers.App.importFields.reference',
      defaultMessage: 'Reference | text',
    },
    referenceRequired: {
      id: 'app.containers.App.importFields.referenceRequired',
      defaultMessage: 'Reference | text (required)',
    },
    description: {
      id: 'app.containers.App.importFields.description',
      defaultMessage: 'Description | text (markdown supported)',
    },
    accepted: {
      id: 'app.containers.App.importFields.accepted',
      defaultMessage: 'Accepted | boolean (true/false)',
    },
    response: {
      id: 'app.containers.App.importFields.response',
      defaultMessage: 'Government response | text (markdown supported)',
    },
    outcome: {
      id: 'app.containers.App.importFields.outcome',
      defaultMessage: 'Desired outcome | text (markdown supported)',
    },
    indicator_summary: {
      id: 'app.containers.App.importFields.indicator_summary',
      defaultMessage: 'Indicator summary | text (markdown supported)',
    },
    target_date: {
      id: 'app.containers.App.importFields.target_date',
      defaultMessage: 'Target Date | date ({format})',
    },
    target_date_comment: {
      id: 'app.containers.App.importFields.target_date_comment',
      defaultMessage: 'Target date comment | text',
    },
  },
  placeholders: {
    title: {
      id: 'app.containers.App.placeholders.title',
      defaultMessage: 'Enter title',
    },
    name: {
      id: 'app.containers.App.placeholders.name',
      defaultMessage: 'Full name',
    },
    email: {
      id: 'app.containers.App.placeholders.email',
      defaultMessage: 'Email address',
    },
    password: {
      id: 'app.containers.App.placeholders.password',
      defaultMessage: 'Password',
    },
    passwordCurrent: {
      id: 'app.containers.App.placeholders.passwordCurrent',
      defaultMessage: 'Current Password',
    },
    passwordNew: {
      id: 'app.containers.App.placeholders.passwordNew',
      defaultMessage: 'New Password',
    },
    passwordConfirmation: {
      id: 'app.containers.App.placeholders.passwordConfirmation',
      defaultMessage: 'Confirm Password',
    },
    short_title: {
      id: 'app.containers.App.placeholders.short_title',
      defaultMessage: 'Abbr.',
    },
    menu_title: {
      id: 'app.containers.App.placeholders.menu_title',
      defaultMessage: 'Menu title',
    },
    order: {
      id: 'app.containers.App.placeholders.order',
      defaultMessage: '#',
    },
    reference: {
      id: 'app.containers.App.placeholders.reference',
      defaultMessage: 'ID',
    },
    description: {
      id: 'app.containers.App.placeholders.description',
      defaultMessage: 'Enter description',
    },
    content: {
      id: 'app.containers.App.placeholders.content',
      defaultMessage: 'Enter content',
    },
    response: {
      id: 'app.containers.App.placeholders.response',
      defaultMessage: 'Enter response comment',
    },
    outcome: {
      id: 'app.containers.App.placeholders.outcome',
      defaultMessage: 'Enter desired outcome',
    },
    indicator_summary: {
      id: 'app.containers.App.placeholders.indicator_summary',
      defaultMessage: 'Enter indicator summary',
    },
    target_date_comment: {
      id: 'app.containers.App.placeholders.target_date_comment',
      defaultMessage: 'Additional information',
    },
    url: {
      id: 'app.containers.App.placeholders.url',
      defaultMessage: 'Enter full URL',
    },
    number: {
      id: 'app.containers.App.placeholders.number',
      defaultMessage: 'ID',
    },
  },
  attributes: {
    draft: {
      id: 'app.containers.App.attributes.draft',
      defaultMessage: 'Status',
    },
    title: {
      id: 'app.containers.App.attributes.title',
      defaultMessage: 'Title',
    },
    description: {
      id: 'app.containers.App.attributes.description',
      defaultMessage: 'Description',
    },
    content: {
      id: 'app.containers.App.attributes.content',
      defaultMessage: 'Content',
    },
    accepted: {
      id: 'app.containers.App.attributes.accepted',
      defaultMessage: 'Government response',
    },
    response: {
      id: 'app.containers.App.attributes.response',
      defaultMessage: 'Government response comment',
    },
    outcome: {
      id: 'app.containers.App.attributes.outcome',
      defaultMessage: 'Desired outcome',
    },
    indicator_summary: {
      id: 'app.containers.App.attributes.indicator_summary',
      defaultMessage: 'Indicator summary',
    },
    target_date_comment: {
      id: 'app.containers.App.attributes.target_date_comment',
      defaultMessage: 'Target date comment',
    },
    short_title: {
      id: 'app.containers.App.attributes.short_title',
      defaultMessage: 'Short title',
    },
    menu_title: {
      id: 'app.containers.App.attributes.menu_title',
      defaultMessage: 'Menu title',
    },
    order: {
      id: 'app.containers.App.attributes.order',
      defaultMessage: 'Menu order',
    },
    reference: {
      id: 'app.containers.App.attributes.reference',
      defaultMessage: 'Reference',
    },
    referenceDefault: {
      id: 'app.containers.App.attributes.referenceDefault',
      defaultMessage: 'Reference (leave blank to use database id)',
    },
    referenceOptional: {
      id: 'app.containers.App.attributes.referenceOptional',
      defaultMessage: 'Reference (optional)',
    },
    id: {
      id: 'app.containers.App.attributes.id',
      defaultMessage: 'No.',
    },
    idOrRef: {
      id: 'app.containers.App.attributes.idOrRef',
      defaultMessage: 'No./Ref.',
    },
    name: {
      id: 'app.containers.App.attributes.name',
      defaultMessage: 'User name',
    },
    email: {
      id: 'app.containers.App.attributes.email',
      defaultMessage: 'Email address',
    },
    status: {
      id: 'app.containers.App.attributes.status',
      defaultMessage: 'Status',
    },
    url: {
      id: 'app.containers.App.attributes.url',
      defaultMessage: 'Website',
    },
    date: {
      id: 'app.containers.App.attributes.date',
      defaultMessage: 'Date',
    },
    target_date: {
      id: 'app.containers.App.attributes.target_date',
      defaultMessage: 'Target date',
    },
    start_date: {
      id: 'app.containers.App.attributes.start_date',
      defaultMessage: 'Start date',
    },
    start_date_only: {
      id: 'app.containers.App.attributes.start_date_only',
      defaultMessage: 'Due date',
    },
    end_date: {
      id: 'app.containers.App.attributes.end_date',
      defaultMessage: 'End date',
    },
    frequency_months: {
      id: 'app.containers.App.attributes.frequency_months',
      defaultMessage: 'Reporting frequency',
    },
    repeat: {
      id: 'app.containers.App.attributes.repeat',
      defaultMessage: 'Repeat?',
    },
    target_date_empty: {
      id: 'app.containers.App.attributes.target_date_empty',
      defaultMessage: 'No target date set',
    },
    document_url: {
      id: 'app.containers.App.attributes.document_url',
      defaultMessage: 'Attached document',
    },
    document_upload: {
      id: 'app.containers.App.attributes.document_upload',
      defaultMessage: 'Upload document',
    },
    document_uploading: {
      id: 'app.containers.App.attributes.document_uploading',
      defaultMessage: 'Uploading document',
    },
    document_public: {
      id: 'app.containers.App.attributes.document_public',
      defaultMessage: 'Document status',
    },
    documentEmpty: {
      id: 'app.containers.App.attributes.documentEmpty',
      defaultMessage: 'No document attached yet',
    },
    due_date_id: {
      id: 'app.containers.App.attributes.due_date_id',
      defaultMessage: 'Due date',
    },
    due_date_id_empty: {
      id: 'app.containers.App.attributes.due_date_id_empty',
      defaultMessage: 'No report scheduled',
    },
    user_only: {
      id: 'app.containers.App.attributes.user_only',
      defaultMessage: 'Users only',
    },
    manager_id: {
      indicators: {
        id: 'app.containers.App.attributes.manager_id.indicators',
        defaultMessage: 'Assigned user',
      },
      categories: {
        id: 'app.containers.App.attributes.manager_id.categories',
        defaultMessage: 'Category manager',
      },
      categoriesEmpty: {
        id: 'app.containers.App.attributes.manager_id.categoriesEmpty',
        defaultMessage: 'No category manager assigned',
      },
      indicatorsEmpty: {
        id: 'app.containers.App.attributes.manager_id.indicatorsEmpty',
        defaultMessage: 'No indicator reporter assigned',
      },
    },
    meta: {
      title: {
        id: 'app.containers.App.attributes.meta.title',
        defaultMessage: 'Meta',
      },
      updated_by: {
        id: 'app.containers.App.attributes.meta.updated_by',
        defaultMessage: 'Updated by',
      },
      updated_at: {
        id: 'app.containers.App.attributes.meta.updated_at',
        defaultMessage: 'Last updated',
      },
    },
  },
  entities: {
    showAll: {
      id: 'app.containers.App.entities.showAll',
      defaultMessage: 'Show all',
    },
    showLess: {
      id: 'app.containers.App.entities.showLess',
      defaultMessage: 'Show less',
    },
    connected: {
      id: 'app.containers.App.entities.connected',
      defaultMessage: '(inferred)',
    },
    recommendations: {
      single: {
        id: 'app.containers.App.entities.recommendations.single',
        defaultMessage: 'Recommendation',
      },
      plural: {
        id: 'app.containers.App.entities.recommendations.plural',
        defaultMessage: 'Recommendations',
      },
      singleLong: {
        id: 'app.containers.App.entities.recommendations.singleLong',
        defaultMessage: 'HR body recommendation',
      },
      pluralLong: {
        id: 'app.containers.App.entities.recommendations.pluralLong',
        defaultMessage: 'HR body recommendations',
      },
      empty: {
        id: 'app.containers.App.entities.recommendations.empty',
        defaultMessage: 'No recommendations yet',
      },
    },
    measures: {
      single: {
        id: 'app.containers.App.entities.measures.single',
        defaultMessage: 'Action',
      },
      plural: {
        id: 'app.containers.App.entities.measures.plural',
        defaultMessage: 'Actions',
      },
      singleLong: {
        id: 'app.containers.App.entities.measures.singleLong',
        defaultMessage: 'Government action',
      },
      pluralLong: {
        id: 'app.containers.App.entities.measures.pluralLong',
        defaultMessage: 'Government actions',
      },
      empty: {
        id: 'app.containers.App.entities.measures.empty',
        defaultMessage: 'No actions yet',
      },
    },
    sdgtargets: {
      single: {
        id: 'app.containers.App.entities.sdgtargets.single',
        defaultMessage: 'SDG target',
      },
      plural: {
        id: 'app.containers.App.entities.sdgtargets.plural',
        defaultMessage: 'SDG targets',
      },
      empty: {
        id: 'app.containers.App.entities.sdgtargets.empty',
        defaultMessage: 'No SDG targets yet',
      },
    },
    indicators: {
      single: {
        id: 'app.containers.App.entities.indicators.single',
        defaultMessage: 'Indicator',
      },
      plural: {
        id: 'app.containers.App.entities.indicators.plural',
        defaultMessage: 'Indicators',
      },
      empty: {
        id: 'app.containers.App.entities.indicators.empty',
        defaultMessage: 'No indicators yet',
      },
    },
    pages: {
      single: {
        id: 'app.containers.App.entities.pages.single',
        defaultMessage: 'Page',
      },
      plural: {
        id: 'app.containers.App.entities.pages.plural',
        defaultMessage: 'Pages',
      },
    },
    users: {
      single: {
        id: 'app.containers.App.entities.users.single',
        defaultMessage: 'User',
      },
      plural: {
        id: 'app.containers.App.entities.users.plural',
        defaultMessage: 'Users',
      },
    },
    progress_reports: {
      single: {
        id: 'app.containers.App.entities.progress_reports.single',
        defaultMessage: 'Progress report',
      },
      plural: {
        id: 'app.containers.App.entities.progress_reports.plural',
        defaultMessage: 'Progress reports',
      },
      empty: {
        id: 'app.containers.App.entities.progress_reports.empty',
        defaultMessage: 'No reports yet',
      },
      unscheduled: {
        id: 'app.containers.App.entities.progress_reports.unscheduled',
        defaultMessage: 'Extraordinary (no due date assigned)',
      },
      unscheduled_short: {
        id: 'app.containers.App.entities.progress_reports.unscheduled_short',
        defaultMessage: 'Extraordinary',
      },
      showAll: {
        id: 'app.containers.App.entities.progress_reports.showAll',
        defaultMessage: 'Show all reports',
      },
      showLess: {
        id: 'app.containers.App.entities.progress_reports.showLess',
        defaultMessage: 'Show less reports',
      },
    },
    connections: {
      single: {
        id: 'app.containers.App.entities.connections.single',
        defaultMessage: 'Connection',
      },
      plural: {
        id: 'app.containers.App.entities.connections.plural',
        defaultMessage: 'Connections',
      },
    },
    taxonomies: {
      single: {
        id: 'app.containers.App.entities.taxonomies.single',
        defaultMessage: 'Category',
      },
      plural: {
        id: 'app.containers.App.entities.taxonomies.plural',
        defaultMessage: 'Categories',
      },
      1: {
        single: {
          id: 'app.containers.App.entities.taxonomies.1.single',
          defaultMessage: 'Human rights body',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.1.plural',
          defaultMessage: 'Human rights bodies',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.1.empty',
          defaultMessage: 'No human rights body assigned yet',
        },
      },
      2: {
        single: {
          id: 'app.containers.App.entities.taxonomies.2.single',
          defaultMessage: 'Cycle',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.2.plural',
          defaultMessage: 'Cycles',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.2.empty',
          defaultMessage: 'No cycle assigned yet',
        },
      },
      3: {
        single: {
          id: 'app.containers.App.entities.taxonomies.3.single',
          defaultMessage: 'Human rights issue',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.3.plural',
          defaultMessage: 'Human rights issues',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.3.empty',
          defaultMessage: 'No human rights issue assigned yet',
        },
      },
      4: {
        single: {
          id: 'app.containers.App.entities.taxonomies.4.single',
          defaultMessage: 'Affected persons',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.4.plural',
          defaultMessage: 'Affected persons',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.4.empty',
          defaultMessage: 'No affected persons assigned yet',
        },
      },
      5: {
        single: {
          id: 'app.containers.App.entities.taxonomies.5.single',
          defaultMessage: 'Thematic cluster',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.5.plural',
          defaultMessage: 'Thematic clusters',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.5.empty',
          defaultMessage: 'No thematic cluster assigned yet',
        },
      },
      6: {
        single: {
          id: 'app.containers.App.entities.taxonomies.6.single',
          defaultMessage: 'Organisation',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.6.plural',
          defaultMessage: 'Organisations',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.6.empty',
          defaultMessage: 'No organisation assigned yet',
        },
      },
      7: {
        single: {
          id: 'app.containers.App.entities.taxonomies.7.single',
          defaultMessage: 'SDG',
        },
        plural: {
          id: 'app.containers.App.entities.taxonomies.7.plural',
          defaultMessage: 'SDGs',
        },
        empty: {
          id: 'app.containers.App.entities.taxonomies.7.empty',
          defaultMessage: 'No SDG assigned yet',
        },
      },
    },
    due_dates: {
      single: {
        id: 'app.containers.App.entities.due_dates.single',
        defaultMessage: 'Due date',
      },
      plural: {
        id: 'app.containers.App.entities.due_dates.plural',
        defaultMessage: 'Due dates',
      },
      empty: {
        id: 'app.containers.App.entities.due_dates.empty',
        defaultMessage: 'No report scheduled',
      },
      overdue: {
        id: 'app.containers.App.entities.due_dates.overdue',
        defaultMessage: 'Report overdue',
      },
      due: {
        id: 'app.containers.App.entities.due_dates.due',
        defaultMessage: 'Report due',
      },
      scheduled: {
        id: 'app.containers.App.entities.due_dates.scheduled',
        defaultMessage: 'Report scheduled',
      },
      overdueNext: {
        id: 'app.containers.App.entities.due_dates.overdueNext',
        defaultMessage: 'Next report overdue',
      },
      dueNext: {
        id: 'app.containers.App.entities.due_dates.dueNext',
        defaultMessage: 'Next report due',
      },
      scheduledNext: {
        id: 'app.containers.App.entities.due_dates.scheduledNext',
        defaultMessage: 'Next report scheduled',
      },
      showAll: {
        id: 'app.containers.App.entities.due_dates.showAll',
        defaultMessage: 'Show all dates',
      },
      showLess: {
        id: 'app.containers.App.entities.due_dates.showLess',
        defaultMessage: 'Show less dates',
      },
      schedule: {
        id: 'app.containers.App.entities.due_dates.schedule',
        defaultMessage: 'Progress report schedule',
      },
    },
    categories: {
      single: {
        id: 'app.containers.App.entities.categories.single',
        defaultMessage: 'Category',
      },
      plural: {
        id: 'app.containers.App.entities.categories.plural',
        defaultMessage: 'Categories',
      },
    },
    roles: {
      single: {
        id: 'app.containers.App.entities.roles.single',
        defaultMessage: 'User role',
      },
      plural: {
        id: 'app.containers.App.entities.roles.plural',
        defaultMessage: 'User roles',
      },
      defaultRole: {
        id: 'app.containers.App.entities.user_roles.defaultRole',
        defaultMessage: 'No role assigned',
      },
    },
  },
  messages: {
    notSignedIn: {
      id: 'app.containers.App.messages.notSignedIn',
      defaultMessage: 'Please sign in or register first to access this page',
    },
    alreadySignedIn: {
      id: 'app.containers.App.messages.alreadySignedIn',
      defaultMessage: 'Welcome back!',
    },
    signInGuestReport: {
      id: 'app.containers.App.messages.signInGuestReport',
      defaultMessage: 'Please sign in or register first to submit a progress report',
    },
    submitInvalid: {
      id: 'app.containers.App.messages.submitInvalid',
      defaultMessage: 'One or more fields have errors.',
    },
    recoverSuccess: {
      id: 'app.containers.App.messages.recoverSuccess',
      defaultMessage: 'Please check your email and follow the instructions to reset your password.',
    },
    createdAsGuest: {
      id: 'app.containers.App.messages.createdAsGuest',
      defaultMessage: '{entityType} created successfully. It will become publicly available once verified and published by an authorised user.',
    },
  },
  ui: {
    publishStatuses: {
      draft: {
        id: 'app.containers.App.ui.publishStatuses.draft',
        defaultMessage: 'Draft',
      },
      public: {
        id: 'app.containers.App.ui.publishStatuses.public',
        defaultMessage: 'Public',
      },
    },
    docPublishStatuses: {
      public: {
        id: 'app.containers.App.ui.docPublishStatuses.public',
        defaultMessage: 'Public',
      },
      private: {
        id: 'app.containers.App.ui.docPublishStatuses.private',
        defaultMessage: 'Private',
      },
    },
    acceptedStatuses: {
      accepted: {
        id: 'app.containers.App.ui.acceptedStatuses.accepted',
        defaultMessage: 'Accepted',
      },
      noted: {
        id: 'app.containers.App.ui.acceptedStatuses.noted',
        defaultMessage: 'Not accepted',
      },
    },
    reportFrequencies: {
      monthly: {
        id: 'app.containers.App.ui.reportFrequencies.monthly',
        defaultMessage: 'Monthly',
      },
      quarterly: {
        id: 'app.containers.App.ui.reportFrequencies.quarterly',
        defaultMessage: 'Quarterly',
      },
      semiannual: {
        id: 'app.containers.App.ui.reportFrequencies.semiannual',
        defaultMessage: 'Semiannual',
      },
      annual: {
        id: 'app.containers.App.ui.reportFrequencies.annual',
        defaultMessage: 'Annual',
      },
    },
    sortOrderOptions: {
      asc: {
        id: 'app.containers.App.ui.sortOrderOptions.asc',
        defaultMessage: 'Ascending',
      },
      desc: {
        id: 'app.containers.App.ui.sortOrderOptions.desc',
        defaultMessage: 'Descending',
      },
    },
  },
});
