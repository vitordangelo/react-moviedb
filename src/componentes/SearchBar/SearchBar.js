import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSeacrhTerm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="Searh Icon" />
        <input type="text" placeholder="Search Movie" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
