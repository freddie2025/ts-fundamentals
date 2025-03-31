import React, { useState } from "react";
import styled from "styled-components";

// Define props interface
interface AlertProps {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  dismissible: boolean;
  children: React.ReactNode;
}

// Styled component with dynamic variant styling
const StyledAlert = styled.div<AlertProps>`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  // Variant-based background and text colors
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "background-color: #cce5ff; border-color: #b8daff; color: #004085;";
      case "success":
        return "background-color: #d4edda; border-color: #c3e6cb; color: #155724;";
      case "danger":
        return "background-color: #f8d7da; border-color: #f5c6cb; color: #721c24;";
      case "warning":
        return "background-color: #fff3cd; border-color: #ffeeba; color: #856404;";
      case "info":
        return "background-color: #cce5ff; border-color: #b8daff; color: #0c5460;";
      case "light":
        return "background-color: #fefefe; border-color: #fdfdfe; color: #818182;";
      case "dark":
        return "background-color: #d6d8d9; border-color: #c6c8ca; color: #1b1e21;";
      case "secondary":
      default:
        return "background-color: #e2e3e5; border-color: #d6d8db; color: #383d41;";
    }
  }}

  // Only apply padding when dismissible is explicitly true
  ${({ dismissible }) => dismissible === true && "padding-right: 4rem;"}
`;

// Dismiss button styling
const DismissButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: inherit;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

// Alert component
const Alert: React.FC<AlertProps> = ({
  variant = "secondary",
  dismissible = false,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <StyledAlert variant={variant} dismissible={dismissible}>
      {children}
      {dismissible === true && (
        <DismissButton onClick={() => setIsVisible(false)}>×</DismissButton>
      )}
    </StyledAlert>
  );
};

export default Alert;
