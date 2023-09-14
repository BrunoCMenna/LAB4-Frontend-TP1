import withToggle from "./withToggle";

const TooltipWithHOC = ({ children, visible, toggleVisibility }) => {
  return (
    <div onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
      {visible ? <div>Mostrando el contenido</div> : children}
    </div>
  );
};

export default withToggle(TooltipWithHOC);
