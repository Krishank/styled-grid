import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
  * @desc This is as a select box
  *
  *  @options :

  * @improvement: select should be a atom and dropdown should be a molecule
*/

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};


class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      value: selected,
    };
  }

  onChange(e) {
    const { value } = e.target;
    const { onSelect } = this.props;
    onSelect(value);
    this.setState({ value });
    return { value };
  }

  render() {
    const { options, className } = this.props;
    const { value } = this.state;
    return (
      <div className={`form-group select-box ${className}`}>
        <label className="sr-only" htmlFor="select-box">
          Select
        </label>
        <select
          id="select-box"
          value={value}
          onChange={e => this.onChange(e)}
          className="form-control"
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: '',
  selected: '',
};
Dropdown.propTypes = propTypes;


export default Dropdown;
