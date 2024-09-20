// components/SearchInput.tsx
import React, { useState } from "react";
import { FormControl, InputGroup, ListGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsSearch } from "react-icons/bs";
import classNames from "classnames";
import styles from "../../styles/searchbar.module.scss";

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
      <InputGroup.Text
        className={classNames({
          [styles.searchBarIcon]: true,
        })}
        id="basic-addon1"
      >
        <BsSearch />
      </InputGroup.Text>
      <FormControl
        className={classNames({
          [styles.searchInput]: true,
        })}
        placeholder="Search by landlord name, city, or rating..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ListGroup
          className={classNames({
            "position-absolute w-100": true,
            [styles.suggestionsList]: true,
          })}
        >
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
