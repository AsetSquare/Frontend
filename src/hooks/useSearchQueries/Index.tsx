import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface DataQuery {
  page: number;
  pageLimit: number;
  search: string;
  filterBy: string;
  [key: string]: string | number;
}

const useSearchQueries = (queryKeys: string[] = []) => {
  const [searchParams] = useSearchParams();
  const [dataQuery, setDataQuery] = useState<DataQuery>({
    page: 1,
    pageLimit: 10,
    search: "",
    filterBy: "",
  });

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    const pageLimit = parseInt(searchParams.get("pageLimit") || "10");
    const search = searchParams.get("search") || "";
    const filterBy = searchParams.get("filterBy") || "";

    //Dynamic query keys from searchParams
    const additionalParams: { [key: string]: string | number } = {};
    queryKeys.forEach((key) => {
      const paramValue = searchParams.get(key) || "";
      if (paramValue) {
        additionalParams[key] = paramValue;
      }
    });

    // DataQuery state Update
    setDataQuery((prevQuery) => ({
      ...prevQuery,
      page,
      pageLimit,
      search,
      filterBy,
      ...additionalParams,
    }));
  }, [searchParams]);

  return dataQuery;
};

export default useSearchQueries;
