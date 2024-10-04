import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { debounce } from "lodash";

interface SearchInputProps {
  handleChange?: any;
  placeholder?: string;
  long?: boolean;
}
const SearchInput = ({ long = true, ...props }: SearchInputProps) => {
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  //Search Jobs Handler
  const searchHandler = debounce((value) => {
    if (value === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", value);
    }
    setSearchParams(searchParams, { replace: true });
  }, 350);

  useEffect(() => {
    if (value === "") {
      searchParams.delete("search"); // Remove the 'search' key from the URL params
      setSearchParams(searchParams, { replace: true }); // Update the URL params
    }
  }, [value]);

  return (
    <label
      htmlFor="search"
      className="relative flex rounded-md overflow-hidden border-black-5 border"
    >
      <div className="p-3.5 bg-[#101010] text-black-4 flex items-center gap-2 border border-black-5">
        <RiSearch2Line className="text-[15px]" />
        <span className="text-sub-6 hidden md:inline-block">Search</span>
      </div>
      <input
        id="search"
        type="text"
        value={value}
        className={
          "text-sub-6 bg-black-6 text-green-dark-6 border-black-5 border rounded-r-md placeholder:text-sub-6 placeholder:uppercase placeholder:text-black-4 focus:outline-none focus:ring-1 focus:ring-green-dark-8 focus:border-green-dark-8 transition-all duration-300 w-full py-3.5 px-5 "
        }
        onChange={(e) => {
          setValue(e.target.value);
          searchHandler(e.target.value);
          // handleChange(e.target.value);
        }}
        {...props}
      />
      {value !== "" && (
        <div
          className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-6 bg-green-dark-6 w-6 h-6 rounded-full flex items-center justify-center"
          onClick={() => {
            setValue("");
            //handleChange(""); // Clear the search filter
            searchParams.delete("search"); // Remove the 'search' key from the URL params
            setSearchParams(searchParams, { replace: true }); // Update the URL params
          }}
        >
          <RxCross2 className="text-[16px] text-black-6" />
        </div>
      )}
    </label>
  );
};

export default SearchInput;
