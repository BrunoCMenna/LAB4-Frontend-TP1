import { useState } from "react";

const TooltipWithRenderProps = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return children(showTooltip, handleMouseEnter, handleMouseLeave);
};

export default TooltipWithRenderProps;
