import React from 'react';
import withComponentClass from './withComponentClass';

const withAllComponents = (WrappedComponent) => {
  return (props) => {
    console.log('Number of children:', React.Children.count(props.children)); // Compte les enfants

    const childrenWithClass = React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) {
        const WrappedChild = withComponentClass(child.type);
        return <WrappedChild {...child.props} />;
      }
      return child;
    });

    return <WrappedComponent {...props}>{childrenWithClass}</WrappedComponent>;
  };
};

export default withAllComponents;