import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  padding: 8px;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;
`;

interface EmployeeSearchProps {
  onSearch: (searchTerm: string) => void;
}

const EmployeeSearch: React.FC<EmployeeSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search employees..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default EmployeeSearch;
