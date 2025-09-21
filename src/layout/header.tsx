"use client";

import { useState } from "react";
import svg from "@/utils/svg";
import { Dot } from "lucide-react";
import { useFilter } from "@/hooks/filter-context";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const {
    selectedFilter1,
    selectedFilter2,
    searchQuery,
    setSelectedFilter1,
    setSelectedFilter2,
    setSearchQuery,
  } = useFilter();

  const handleOpenCourse = () => {
    if (openFilter) setOpenFilter(false);
    setOpen(!open);
  };

  const handleOpenFilter = () => {
    if (open) setOpen(false);
    setOpenFilter(!openFilter);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedFilter1(category);
    setOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  // ...
  return (
    <div className="text-black py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
        <div className="flex flex-row justify-between items-center gap-0">
          <Dot className="hidden lg:block" /> NEW COURSES
        </div>
        <div className="hidden lg:block w-full sm:w-64">
          <input
            type="text"
            placeholder="Search Course..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="h-[40px] w-full focus:outline-none focus:ring-0 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-4 lg:gap-7">
          <div className="hidden lg:flex flex-row justify-between items-center gap-7">
            <div
              className={`${
                selectedFilter1 === "All Course" ? "bg-gray-200" : ""
              } rounded-lg px-4 py-2 cursor-pointer`}
              onClick={() => {
                setSelectedFilter1("All Course");
                handleOpenCourse();
              }}
            >
              All Course
            </div>
            <div
              className={`${
                selectedFilter1 === "Design" ? "bg-gray-200" : ""
              } rounded-lg px-4 py-2 cursor-pointer`}
              onClick={() => {
                setSelectedFilter1("Design");
                handleOpenCourse();
              }}
            >
              Design
            </div>
            <div
              className={`${
                selectedFilter1 === "Development" ? "bg-gray-200" : ""
              } rounded-lg px-4 py-2 cursor-pointer`}
              onClick={() => {
                setSelectedFilter1("Development");
                handleOpenCourse();
              }}
            >
              Development
            </div>
            <div
              className={`${
                selectedFilter1 === "Photography" ? "bg-gray-200" : ""
              } rounded-lg px-4 py-2 cursor-pointer`}
              onClick={() => {
                setSelectedFilter1("Photography");
                handleOpenCourse();
              }}
            >
              Photography
            </div>
            <div
              className={`${
                selectedFilter1 === "Management" ? "bg-gray-200" : ""
              } rounded-lg px-4 py-2 cursor-pointer`}
              onClick={() => {
                setSelectedFilter1("Management");
                handleOpenCourse();
              }}
            >
              Management
            </div>
          </div>
          <div className="relative lg:hidden flex flex-row justify-between items-center gap-7">
            <div
              className="bg-gray-200 rounded-lg px-6 py-2 cursor-pointer"
              onClick={handleOpenCourse}
            >
              {selectedFilter1}
            </div>
            <div
              className={`absolute top-12 left-0 w-full bg-white border border-gray-100 rounded-lg px-4 py-4 z-20 flex flex-col justify-between items-center gap-2 transition-all duration-300 ease-in-out ${
                open
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div
                className="pb-2 hover:text-gray-600 transition-colors cursor-pointer"
                onClick={() => handleCategorySelect("All Course")}
              >
                All Course
              </div>
              <div
                className="pb-2 hover:text-gray-600 transition-colors cursor-pointer"
                onClick={() => handleCategorySelect("Design")}
              >
                Design
              </div>
              <div
                className="pb-2 hover:text-gray-600 transition-colors cursor-pointer"
                onClick={() => handleCategorySelect("Development")}
              >
                Development
              </div>
              <div
                className="pb-2 hover:text-gray-600 transition-colors cursor-pointer"
                onClick={() => handleCategorySelect("Photography")}
              >
                Photography
              </div>
              <div
                className="hover:text-gray-600 transition-colors cursor-pointer"
                onClick={() => handleCategorySelect("Management")}
              >
                Management
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onClick={handleOpenFilter}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            >
              {svg.filter()}
            </div>
            <div
              className={`absolute top-12 right-0 w-[200px] bg-white border border-gray-100 rounded-lg px-2 py-4 z-20 flex flex-col justify-between items-start gap-2 transition-all duration-300 ease-in-out ${
                openFilter
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div
                className={`py-2 px-3 flex flex-row justify-start items-center gap-3 hover:bg-gray-50 w-full rounded cursor-pointer transition-all duration-300 ease-out ${
                  openFilter
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                } ${selectedFilter2 === "lesson" ? "bg-gray-200" : ""}`}
                style={{ transitionDelay: openFilter ? "100ms" : "0ms" }}
                onClick={() => {
                  setSelectedFilter2("lesson");
                  setOpenFilter(false);
                }}
              >
                <div>{svg.class()}</div>
                <div>Filter by lesson</div>
              </div>
              <div
                className={`py-2 px-3 flex flex-row justify-start items-center gap-3 hover:bg-gray-50 w-full rounded cursor-pointer transition-all duration-300 ease-out ${
                  openFilter
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                } ${selectedFilter2 === "student" ? "bg-gray-200" : ""}`}
                style={{ transitionDelay: openFilter ? "150ms" : "0ms" }}
                onClick={() => {
                  setSelectedFilter2("student");
                  setOpenFilter(false);
                }}
              >
                <div>{svg.student()}</div>
                <div>Filter by student</div>
              </div>
              <div
                className={`py-2 px-3 flex flex-row justify-start items-center gap-3 hover:bg-gray-50 w-full rounded cursor-pointer transition-all duration-300 ease-out -translate-x-[2px] ${
                  openFilter
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                } ${selectedFilter2 === "difficulty" ? "bg-gray-200" : ""}`}
                style={{ transitionDelay: openFilter ? "200ms" : "0ms" }}
                onClick={() => {
                  setSelectedFilter2("difficulty");
                  setOpenFilter(false);
                }}
              >
                <div>{svg.difficulty()}</div>
                <div>Filter by difficulty</div>
              </div>
              <div
                className={`py-2 px-3 flex flex-row justify-start items-center gap-3 hover:bg-gray-50 w-full rounded cursor-pointer transition-all duration-300 ease-out ${
                  openFilter
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                } ${selectedFilter2 === "rating" ? "bg-gray-200" : ""}`}
                style={{ transitionDelay: openFilter ? "250ms" : "0ms" }}
                onClick={() => {
                  setSelectedFilter2("rating");
                  setOpenFilter(false);
                }}
              >
                <div>{svg.rating()}</div>
                <div>Filter by rating</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden block w-full sm:w-64">
          <input
            type="text"
            placeholder="Search Course..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="h-[40px] w-full focus:outline-none focus:ring-0 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
