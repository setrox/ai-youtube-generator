import React, { useState } from "react";
import useHttp from "@/hook/use-http";

const SearchMenu = ({
  updateData,
  updateScreen,
  updateLoading,
  loading,
}: {
  updateData: any;
  updateScreen: any;
  updateLoading: any;
  loading: any;
}) => {
  const [query, setQuery] = useState("");
  const { searchQuery } = useHttp();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    if (loading) return;
    updateLoading(true);

    console.log({ query });

    searchQuery(
      query,
      (res: any) => {
        console.log({ res });
        updateData(res);

        setTimeout(() => {
          updateLoading(false);
          updateScreen(2);
        }, 2000);
      },
      (err: any) => {
        console.log({ err });
        updateLoading(false);

        // testing
        updateData({
          title: "Gain 1000 subscriber on youtube",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum est veritatis autem sint ratione ipsam aliquam eligendi cum. Deleniti minima natus commodi modi? Fuga autem vero nam. Cupiditate, maxime!",
          tags: ["one", "two", "three"],
        });

        setTimeout(() => {
          updateLoading(false);
          updateScreen(2);
        }, 2000);
      }
    );
  };

  return (
    <div className="w-full">
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-4 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-lg border-s-gray-50  border-gray-300 focus:ring-blue-500 focus:border-none focus:outline-none"
              placeholder="Search with title..."
              value={query}
              onChange={(e) => setQuery(e.target.value as any)}
              required
            />
            <button
              type="submit"
              className="absolute w-[5rem] items-center text-center flex justify-center top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-app  rounded-e-lg border border-app  hover:bg-app/95 focus:outline-none"
            >
              {loading ? (
                "..."
              ) : (
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              )}
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchMenu;
