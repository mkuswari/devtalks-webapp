import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useSearch = (initialKeyword = "", initialCategory = "") => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState(
    searchParams.get("keyword") || initialKeyword
  );
  const [searchCategory, setSearchCategory] = useState(
    searchParams.get("category") || initialCategory
  );

  useEffect(() => {
    setSearchKeyword(searchParams.get("keyword") || initialKeyword);
    setSearchCategory(searchParams.get("category") || initialCategory);
  }, [searchParams, initialKeyword, initialCategory]);

  const handleSearchKeywordChange = (value) => {
    setSearchKeyword(value);
    setSearchParams({ keyword: value });
  };

  const handleSearchCategoryChange = (value) => {
    setSearchCategory(value);
    setSearchParams({ category: value });
  };

  return [
    searchKeyword,
    handleSearchKeywordChange,
    searchCategory,
    setSearchCategory,
    handleSearchCategoryChange,
  ];
};

export default useSearch;
