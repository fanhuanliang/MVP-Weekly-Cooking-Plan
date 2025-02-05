import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const ShoppingList = (props) => {
  if(!props.openList) return null;
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <Button onClick={props.closeList }>Close</Button>
        <div>Grocery List</div>
      </div>
    </div>
  )
}

export default ShoppingList;