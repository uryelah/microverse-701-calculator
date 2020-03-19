import React from 'react';
import Button from './Button';

function ButtonPanel(props) {
  const { styles } = props;

  const panelStyles = {
    flexDirection: 'column',
    ...styles
  }

  const rowStyles = {
    height: 100,
    display: 'flex'
  }

  return (
    <div style={panelStyles} className="calc-panel">
      <div style={rowStyles}>
        <Button color="grey" name="AC" />
        <Button color="grey" name="+/-" />
        <Button color="grey" name="%" />
        <Button name="÷" />
      </div>
      <div style={rowStyles}>
        <Button color="grey" name="7" />
        <Button color="grey" name="8" />
        <Button color="grey" name="9" />
        <Button name="X" />
      </div>
      <div style={rowStyles}>
        <Button color="grey" name="4" />
        <Button color="grey" name="5" />
        <Button color="grey" name="6" />
        <Button name="-" />
      </div>
      <div style={rowStyles}>
        <Button color="grey" name="1" />
        <Button color="grey" name="2" />
        <Button color="grey" name="3" />
        <Button name="+" />
      </div>
      <div style={rowStyles}>
        <Button wide={true} color="grey" name="0" />
        <Button color="grey" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
