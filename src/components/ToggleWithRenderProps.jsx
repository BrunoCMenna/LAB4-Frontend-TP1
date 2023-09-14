import { useState } from "react";

const ToggleWithRenderProps = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return children(visible, toggleVisibility);
};

export default ToggleWithRenderProps;
