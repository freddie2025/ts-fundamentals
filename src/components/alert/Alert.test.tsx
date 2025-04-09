import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "./Alert";

const variants: Array<
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
> = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

describe("Alert Component", () => {
  // Snapshot test for each variant (non-dismissible)
  variants.forEach((variant) => {
    it(`renders correctly with variant "${variant}"`, () => {
      const { container } = render(
        <Alert $variant={variant} $dismissible={false}>
          This is a {variant} alert
        </Alert>
      );
      expect(container).toMatchSnapshot();
    });
  });

  // Snapshot test for each variant (dismissible)
  variants.forEach((variant) => {
    it(`renders correctly with variant "${variant}" and dismissible`, () => {
      const { container } = render(
        <Alert $variant={variant} $dismissible={true}>
          This is a dismissible {variant} alert
        </Alert>
      );
      expect(container).toMatchSnapshot();
    });
  });

  // Test default variant (secondary) when no variant is provided
  it("renders with default variant (secondary) when no variant is passed", () => {
    const { container } = render(
      <Alert $dismissible={false}>This is a default alert</Alert>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("This is a default alert")).toBeInTheDocument();
  });

  // Test dismissible functionality
  it("hides the alert when dismiss button is clicked", () => {
    render(
      <Alert $variant="danger" $dismissible={true}>
        Dismissible alert
      </Alert>
    );

    // Check initial render
    expect(screen.getByText("Dismissible alert")).toBeInTheDocument();

    // Click dismiss button
    fireEvent.click(screen.getByText("×"));

    // Check it’s gone
    expect(screen.queryByText("Dismissible alert")).not.toBeInTheDocument();
  });

  // Test children rendering
  it("renders children correctly", () => {
    render(
      <Alert $variant="info" $dismissible={false}>
        <span>Custom content</span>
      </Alert>
    );
    expect(screen.getByText("Custom content")).toBeInTheDocument();
  });
});
