import withToggle from "./withToggle";

const ToggleWithHOC = ({ children, visible, toggleVisibility }) => {
  return (
    <div onClick={toggleVisibility}>
      {visible ? <div>Mostrando contenido</div> : children}
    </div>
  );
};

export default withToggle(ToggleWithHOC);
