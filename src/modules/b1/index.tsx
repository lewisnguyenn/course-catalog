"use client";

import { DATA } from "@/utils/data";
import Card from "../components/card";
import { motion } from "framer-motion";
import { useFilter } from "@/hooks/filter-context";
import { useMemo } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function B1() {
  const { selectedFilter1, selectedFilter2, searchQuery } = useFilter();

  const filteredAndSortedCourses = useMemo(() => {
    let courses = [...DATA.COURSES];

    if (searchQuery.trim()) {
      courses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilter1 !== "All Course") {
      courses = courses.filter((course) => course.category === selectedFilter1);
    }

    if (selectedFilter2) {
      courses.sort((a, b) => {
        switch (selectedFilter2) {
          case "lesson":
            return a.detail_info.class - b.detail_info.class;
          case "student":
            return a.detail_info.student - b.detail_info.student;
          case "difficulty":
            const difficultyOrder = ["Beginner", "Intermediate", "Advanced"];
            const aIndex = difficultyOrder.indexOf(a.detail_info.difficulty);
            const bIndex = difficultyOrder.indexOf(b.detail_info.difficulty);
            return aIndex - bIndex;
          case "rating":
            return a.rating - b.rating;
          default:
            return 0;
        }
      });
    }

    return courses;
  }, [selectedFilter1, selectedFilter2, searchQuery]);

  return (
    <div className="text-black pb-20">
      {filteredAndSortedCourses.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${selectedFilter1}-${selectedFilter2}-${searchQuery}`}
        >
          {filteredAndSortedCourses.map((course, index) => (
            <Card key={course.id} course={course} index={index} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500">
            {searchQuery.trim()
              ? `No courses found with the keyword "${searchQuery}"`
              : "No courses found that match the selected filters."}
          </p>
        </div>
      )}
    </div>
  );
}
