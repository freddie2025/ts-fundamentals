import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeBadge from "./EmployeeBadge";
import { employee } from "./employeeExample";

// Mock employee data with all fields
const employeeWithAllFields = {
  details: {
    firstName: "Tinky",
    middleName: "Middle",
    lastName: "Winky",
  },
  imagePath: "tinky-winky.jpg",
  jobTitle: "Teletubby",
  email: "tinky.winky@teletubbies.com",
  //cohort: 12,
  team: "Client Servicing and Engagement" as const,
};

// Mock employee data without optional fields
const employeeMinimal = {
  details: {
    firstName: "Dipsy",
    lastName: "Green",
  },
  imagePath: "dipsy.jpg",
  jobTitle: "Teletubby",
  email: "dipsy@teletubbies.com",
  team: "Client Servicing and Engagement" as const,
};

describe("EmployeeBadge Component", () => {
  // Test with all fields (including cohort and middleName)
  it("renders correctly with all fields", () => {
    const { asFragment } = render(
      <EmployeeBadge employee={employeeWithAllFields} />
    );
    expect(asFragment()).toMatchSnapshot();

    // Verify content
    expect(screen.getByText("Tinky Middle Winky")).toBeInTheDocument();
    expect(screen.getByText("Job Title: Teletubby")).toBeInTheDocument();
    expect(
      screen.getByText("Email: tinky.winky@teletubbies.com")
    ).toBeInTheDocument();
    expect(screen.getByText("Cohort: 12")).toBeInTheDocument();
    expect(
      screen.getByText("Team: Client Servicing and Engagement")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Tinky Middle Winky's profile")).toHaveAttribute(
      "src",
      "tinky-winky.jpg"
    );
  });

  // Test with minimal fields (no cohort, no middleName)
  it("renders correctly without optional fields", () => {
    const { asFragment } = render(<EmployeeBadge employee={employeeMinimal} />);
    expect(asFragment()).toMatchSnapshot();

    // Verify content
    expect(screen.getByText("Dipsy Green")).toBeInTheDocument();
    expect(screen.getByText("Job Title: Teletubby")).toBeInTheDocument();
    expect(
      screen.getByText("Email: dipsy@teletubbies.com")
    ).toBeInTheDocument();
    expect(screen.queryByText(/Cohort:/)).not.toBeInTheDocument();
    expect(
      screen.getByText("Team: Client Servicing and Engagement")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Dipsy Green's profile")).toHaveAttribute(
      "src",
      "dipsy.jpg"
    );
  });

  // Test with the provided example data
  it("renders correctly with example data", () => {
    const { asFragment } = render(<EmployeeBadge employee={employee} />);
    expect(asFragment()).toMatchSnapshot();

    // Verify content
    expect(screen.getByText("Tinky Winky")).toBeInTheDocument();
    expect(screen.getByText("Job Title: Teletubby")).toBeInTheDocument();
    expect(
      screen.getByText("Email: tinky.winky@teletubbies.com")
    ).toBeInTheDocument();
    expect(screen.getByText("Cohort: 12")).toBeInTheDocument();
    expect(
      screen.getByText("Team: Client Servicing and Engagement")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Tinky Winky's profile")).toHaveAttribute(
      "src",
      "tinky-winky.jpg"
    );
  });
});
