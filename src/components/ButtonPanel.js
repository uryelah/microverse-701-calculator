import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { styles, clickHandler } = props;

  const panelStyles = {
    flexDirection: 'column',
    ...styles,
  };

  const rowStyles = {
    height: 100,
    display: 'flex',
  };

  return (
    <div style={panelStyles} className="calc-panel">
      <div style={rowStyles}>
        <Button color="grey" name="AC" onClick={clickHandler} />
        <Button color="grey" name="+/-" onClick={clickHandler} />
        <Button color="grey" name="%" onClick={clickHandler} />
        <Button name="÷" onClick={clickHandler} />
      </div>
      <div style={rowStyles}>
        <Button color="grey" name="7" onClick={clickHandler} />
        <Button color="grey" name="8" onClick={clickHandler} />
        <Button color="grey" name="9" onClick={clickHandler} />
        <Button name="X" onClick={clickHandler} />
      </div>
      <div style={rowStyles}>
        <Button color="grey" name="4" onClick={clickHandler} />
        <Button color="grey" name="5" onClick={clickHandler} />
        <Button color="grey" name="6" onClick={clickHandler} />
        <Button name="-" onClick={clickHandler} />
      </div>
      <div style={rowStyles}>
        <Button color="grey" name="1" onClick={clickHandler} />
        <Button color="grey" name="2" onClick={clickHandler} />
        <Button color="grey" name="3" onClick={clickHandler} />
        <Button name="+" onClick={clickHandler} />
      </div>
      <div style={rowStyles}>
        <Button wide color="grey" name="0" onClick={clickHandler} />
        <Button color="grey" name="." onClick={clickHandler} />
        <Button name="=" onClick={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  styles: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
