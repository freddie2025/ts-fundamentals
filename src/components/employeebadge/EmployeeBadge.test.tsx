import React from "react";
import { render, screen } from "@testing-library/react";
import EmployeeBadge from "./EmployeeBadge";
import { employee } from "./employeeExample";
import { Employee } from "./Employee";

// Mock employee data with all fields
const employeeWithAllFields: Employee = {
  details: {
    firstName: "Tinky",
    middleName: "Middle",
    lastName: "Winky",
  },
  imagePath: "tinky-winky.jpg",
  jobTitle: "Teletubby",
  email: "tinky.winky@teletubbies.com",
  cohort: 12,
  team: "Client Servicing and Engagement",
};

// Mock employee data without optional fields
const employeeMinimal: Employee = {
  details: {
    firstName: "Dipsy",
    lastName: "Green",
  },
  imagePath: "dipsy.jpg",
  jobTitle: "Teletubby",
  email: "dipsy@teletubbies.com",
  team: "Client Servicing and Engagement",
};

describe("EmployeeBadge Component", () => {
  // Test with all fields (including cohort and middleName)
  it("renders correctly with all fields", () => {
    const { container } = render(
      <EmployeeBadge employee={employeeWithAllFields} />
    );
    expect(container).toMatchSnapshot();

    // Verify content
    expect(screen.getByText("Tinky Middle Winky")).toBeInTheDocument();
    expect(screen.getByText("Job Title: Teletubby")).toBeInTheDocument();
    //expect(
    //  screen.getByText("Email: tiny.winky@teletubbies.com")
    //).toBeInTheDocument();
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
    const { container } = render(<EmployeeBadge employee={employeeMinimal} />);
    expect(container).toMatchSnapshot();

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
    //expect(
    //  screen.getByText("Email: tinky.winky@teletubbies.com")
    //).toBeInTheDocument();
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
