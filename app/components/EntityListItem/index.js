import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import ListItem from './ListItem';

export default class EntityListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    title: PropTypes.string.isRequired,
    linkTo: PropTypes.string,
    reference: PropTypes.string,
    status: PropTypes.string,
    children: PropTypes.object,
    side: PropTypes.object,
    select: PropTypes.bool,
    checked: PropTypes.bool,
    onSelect: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    side: null,
    checked: false,
  }

  renderListItem = () => {
    const title = this.props.linkTo
      ? <strong><Link to={this.props.linkTo}>{this.props.title}</Link></strong>
      : <strong>{this.props.title}</strong>;

    return (
      <ListItem>
        <table><tbody><tr>
          <td>
            {this.props.select &&
              <input
                type="checkbox"
                checked={this.props.checked}
                onChange={(evt) => this.props.onSelect(evt.target.checked)}
              />
            }
          </td>
          <td>
            <div>
              {this.props.reference &&
                <div>{this.props.reference}</div>
              }
              <div>
                {title}
                {this.props.status &&
                  <span>{` (${this.props.status})`}</span>
                }
              </div>
            </div>
            {this.props.children &&
            <div>
              {this.props.children}
            </div>
            }
          </td>
          <td>
            {this.props.side &&
              <span>
                {this.props.side}
              </span>
            }
          </td>
        </tr></tbody></table>
      </ListItem>
    );
  }

  render() {
    return (
      <div>
        {this.renderListItem()}
      </div>
    );
  }
}
