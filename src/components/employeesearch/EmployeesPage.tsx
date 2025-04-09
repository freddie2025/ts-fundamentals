import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import EmployeeSearch from "./EmployeeSearch";
import EmployeesTable from "./EmployeesTable";
import { Employee } from "./Employee";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async (term: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:4000/employees-api/employees",
        {
          params: { search: term },
        }
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on initial load and when searchTerm changes
  useEffect(() => {
    fetchEmployees(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <EmployeeSearch onSearch={(term) => setSearchTerm(term)} />
      {loading ? (
        <LoadingContainer>
          <img src="/loading-spinner.gif" alt="Loading..." />
        </LoadingContainer>
      ) : (
        <EmployeesTable employees={employees} />
      )}
    </div>
  );
};

export default EmployeesPage;
