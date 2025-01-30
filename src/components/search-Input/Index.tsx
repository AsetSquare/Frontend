import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { debounce } from "lodash";
import LoadingState from "../loading-state/Index";
import ErrorState from "../error-state/Index";
import EmptyState from "../empty-state/Index";
import { saveToLocalStorage } from "@/utils/localstorage/Index";

interface SearchInputProps {
  isLoading?: boolean;
  isError?: boolean;
  data?: {
    asset: string;
    name: string;
    id: string;
    assetAddress: string;
    type: string;
    amount: number;
    description: string;
    imageUrl: string;
    marketId: string;
    ownerId: string;
    status: string;
  }[];
  refetch?: any;
  handleChange?: any;
  placeholder?: string;
  long?: boolean;
  isData?: boolean;
}
const SearchInput = ({
  long = true,
  isData = false,
  isLoading,
  isError,
  data = [],
  refetch,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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
    <div className="relative">
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
      {value !== "" && isData && (
        <div className="rounded-lg border border-black-5 overflow-hidden bg-[#101010] absolute top-[150%] -right-4 z-50 w-full">
          <div className="py-3 px-3.5 text-green-dark-6 text-body-5 !font-medium flex items-center gap-2 bg-black-6">
            <span className="text-[16px] md:text-[18px] text-green-dark-6">
              🔥
            </span>{" "}
            Trending Search
          </div>

          <div className="max-h-[256px] overflow-y-auto scrollbar-hide">
            {isLoading ? (
              <LoadingState size={24} className="!h-[150px]" />
            ) : isError ? (
              <ErrorState refetch={refetch} className="!h-[200px]" />
            ) : data?.length > 0 ? (
              data?.map((cur) => {
                return (
                  <div
                    key={cur.id}
                    className="px-3 py-4 border-y border-white-6 flex items-center cursor-pointer gap-3"
                    onClick={() => {
                      saveToLocalStorage("asset", cur);
                      navigate(`/explorer/asset/${cur.id}`);
                    }}
                  >
                    <img
                      src={cur.imageUrl}
                      alt=""
                      className="p-2.5 w-10 h-10 object-contain border-[0.67px] rounded border-white-6 bg-black-6"
                    />
                    <div>
                      <h6 className="text-sub-6 text-white-1 uppercase flex items-center gap-2">
                        {cur.name}{" "}
                        <span className="text-body-6 bg-green-dark-6 text-black-6 !font-semibold !text-[11px] py-0 px-2 rounded-lg block">
                          {cur.type}
                        </span>
                      </h6>
                      <p className="text-body-5 text-white-4 mt-1">{cur.id}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <EmptyState
                text="No Assets or Markets Found"
                className="!h-[150px]"
                iconclassName="text-[32px]"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
