import ToggleWithHOC from "./components/ToggleWithHOC";
import ToggleWithRenderProps from "./components/ToggleWithRenderProps";
import TooltipWithHOC from "./components/TooltipWithHOC";
import TooltipWithRenderProps from "./components/TooltipsWithRenderProps";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h2>Toggle con HOC</h2>
      <ToggleWithHOC>
        <div>Clickea para mostrar</div>
      </ToggleWithHOC>

      <h2>Tooltip con HOC</h2>
      <TooltipWithHOC>
        <div>Hace hoover sobre mi</div>
      </TooltipWithHOC>

      <h2>Toggle con Render Props</h2>
      <ToggleWithRenderProps>
        {(visible, toggleVisibility) => (
          <div onClick={toggleVisibility}>
            {visible ? "Mostrando contenido" : "Clickea para mostrar"}
          </div>
        )}
      </ToggleWithRenderProps>

      <h2>Tooltip con Render Props</h2>
      <TooltipWithRenderProps>
        {(showTooltip, handleMouseEnter, handleMouseLeave) => (
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showTooltip ? "Mostrando contenido" : "Pasa el mouse por encima"}
          </div>
        )}
      </TooltipWithRenderProps>
    </div>
  );
};

export default App;
