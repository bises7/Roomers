// components/SearchInput.tsx
import classNames from "classnames";
import React, { useState } from "react";
import { Form, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsSearch } from "react-icons/bs";

const SearchInput: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");

  const landlords: string[] = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
  ];

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.length) {
      setSuggestions([]);
      return;
    }
    const filteredSuggestions = landlords.filter((landlord) =>
      landlord.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <InputGroup className="mt-4">
      <InputGroup.Text id="basic-addon1">
        <BsSearch />
      </InputGroup.Text>
      <FormControl
        placeholder="Search by landlord name, city, or rating..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ListGroup className="position-absolute w-100">
          {suggestions.map((item, index) => (
            <ListGroup.Item key={index} action onClick={() => setQuery(item)}>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </InputGroup>
  );
};

export default SearchInput;
