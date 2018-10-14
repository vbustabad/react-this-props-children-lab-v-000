import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const className = 'heaven';
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        theme: child.props.theme === className
      });
    });

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}
