// import React from 'react';

// const withComponentClass = (WrappedComponent) => {
//   return (props) => {
//     const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
//     const className = `${componentName}___root`; // Logique de nommage ici

//     return (
//       <div className={className}>
//         <WrappedComponent {...props} />
//       </div>
//     );
//   };
// };

// export default withComponentClass;

import React from 'react';

const withClassName = (WrappedComponent) => {
  const WithClassName = (props) => {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    // Recursively render children components and add class names
    const renderChildrenWithClassNames = (children) => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <div className={child.type.displayName || child.type.name || 'Component'}>
              {React.cloneElement(child)}
            </div>
          );
        }
        return child; // Return non-element children as is
      });
    };

    return (
      <div className={componentName}>
        {/* Render WrappedComponent with its props and children */}
        <WrappedComponent {...props}>
          {renderChildrenWithClassNames(props.children)}
        </WrappedComponent>
      </div>
    );
  };

  WithClassName.displayName = `WithClassName(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithClassName;
};

export default withClassName;