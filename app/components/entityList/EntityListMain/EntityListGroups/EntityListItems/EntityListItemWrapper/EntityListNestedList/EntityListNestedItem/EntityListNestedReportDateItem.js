import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { palette } from 'styled-theme';

import Icon from 'components/Icon';

import appMessages from 'containers/App/messages';

const Styled = styled.div`
  position: relative;
  font-weight: bold;
  padding: 5px 10px;
  background-color: ${palette('primary', 4)};
  color:  ${(props) => props.overdue ? palette('reports', 0) : palette('light', 4)};
`;
const Status = styled.div`
  font-size: 1.2em;
  color:  ${(props) => props.unscheduled ? palette('light', 3) : 'inherit'};
`;
const DueDate = styled.div`
`;
const IconWrap = styled.div`
  color: ${palette('primary', 4)};
  background-color:  ${(props) => props.overdue ? palette('reports', 0) : palette('light', 4)};
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 32px;
  height: 32px;
  padding: 4px;
`;
const IconWrapUnscheduled = styled(IconWrap)`
  color: ${palette('light', 3)};
  background-color: transparent;
`;


class EntityListNestedReportDateItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    dates: PropTypes.array,
  }

  render() {
    const { dates } = this.props;
    const scheduled = dates && dates.length > 0;
    const overdue = scheduled && dates[0].attributes.overdue;
    return (
      <Styled overdue={overdue}>
        { scheduled &&
          <span>
            <IconWrap overdue={overdue}>
              <Icon name="reminder" />
            </IconWrap>
            <Status>
              { dates[0].attributes.overdue &&
                <span>
                  {this.context.intl && this.context.intl.formatMessage(appMessages.entities.due_dates.overdue)}
                </span>
              }
              { dates[0].attributes.due &&
                <span>
                  {this.context.intl && this.context.intl.formatMessage(appMessages.entities.due_dates.due)}
                </span>
              }
              { !dates[0].attributes.due && !dates[0].attributes.overdue &&
                <span>
                  {this.context.intl && this.context.intl.formatMessage(appMessages.entities.due_dates.scheduled)}
                </span>
              }
            </Status>
            <DueDate overdue={dates[0].attributes.overdue}>
              { this.context.intl && this.context.intl.formatDate(new Date(dates[0].attributes.due_date))}
            </DueDate>
          </span>
        }
        { !scheduled &&
          <span>
            <IconWrapUnscheduled overdue={overdue}>
              <Icon name="reminder" />
            </IconWrapUnscheduled>
            <Status unscheduled>
              {this.context.intl && this.context.intl.formatMessage(appMessages.entities.due_dates.empty)}
            </Status>
          </span>
        }
      </Styled>
    );
  }
}

EntityListNestedReportDateItem.contextTypes = {
  intl: PropTypes.object,
};

export default EntityListNestedReportDateItem;
