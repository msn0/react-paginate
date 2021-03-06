'use strict';

import React from 'react';

export default class BreakView extends React.Component {
  render() {
    let label = this.props.breakLabel;

    return (
      <li className="break">
        {label}
      </li>
    );
  }
};
