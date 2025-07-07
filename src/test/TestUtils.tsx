import { render } from "@testing-library/react";
import { TestWrapper } from "./TestWrapper.tsx";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: TestWrapper, ...options });

export { customRender as render };
