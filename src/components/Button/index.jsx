import Type from 'prop-types';
import { Component } from 'react';
import './styles.css';

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <button disabled={disabled} className="btn" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: Type.string.isRequired,
  onClick: Type.func.isRequired,
  disabled: Type.bool,
};
