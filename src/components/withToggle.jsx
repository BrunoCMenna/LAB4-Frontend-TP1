import { useState } from "react";

const withToggle = (WrappedComponent) => {
  return function WithToggle(props) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
      setVisible(!visible);
    };

    return (
      <WrappedComponent
        {...props}
        visible={visible}
        toggleVisibility={toggleVisibility}
      />
    );
  };
};

export default withToggle;
