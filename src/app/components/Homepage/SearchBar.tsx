// components/SearchInput.tsx
import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsArrowReturnLeft, BsSearch } from "react-icons/bs";
import classNames from "classnames";
import styles from "../../styles/searchbar.module.scss";

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!text.length) {
      return;
    }
  };

  return (
    <InputGroup
      className={classNames({
        "mt-4": true,
      })}
      hasValidation={false}
    >
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
        placeholder="Search by address, city, or rating..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        formNoValidate
      />
      <InputGroup.Text
        className={classNames({
          [styles.enterIcon]: true,
        })}
        id="basic-addon1"
      >
        <BsArrowReturnLeft />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default SearchInput;
