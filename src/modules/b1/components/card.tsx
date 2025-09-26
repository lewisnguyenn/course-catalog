"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import svg from "@/utils/svg";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Course {
  id: number;
  name: string;
  category: string;
  desc: string;
  thumbnail: string;
  detail_info: {
    class: number;
    student: number;
    difficulty: string;
  };
  rating: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const progressVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const ProgressCircle = ({
  value,
  rating,
}: {
  value: number;
  rating: number;
}) => {
  // Calculate the angle for the end of the progress arc
  const angle = (value / 100) * 360; // Convert percentage to degrees
  const radius = 28; // Same as circle radius
  const centerX = 32;
  const centerY = 32;

  // Convert angle to radians and calculate position
  const angleInRadians = (angle - 0) * (Math.PI / 180);
  const starX = centerX + radius * Math.cos(angleInRadians);
  const starY = centerY + radius * Math.sin(angleInRadians);

  return (
    <>
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center"
        variants={progressVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className="w-10 h-10 -rotate-[90deg] scale-y-[-1] pt-[1px]"
          viewBox="0 0 64 64"
        >
          {/* Background circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />
          {/* Progress circle */}
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${value * 1.759} 175.9`}
            className="transition-all duration-300 ease-in-out"
            initial={{ strokeDasharray: "0 175.9" }}
            animate={{ strokeDasharray: `${value * 1.759} 175.9` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />
          <g transform={`translate(${starX - 7}, ${starY - 6.5})`}>
            <path
              d="M9.17969 4.03906L12.5312 4.53125C12.8125 4.57812 13.0469 4.76562 13.1406 5.04688C13.2344 5.30469 13.1641 5.60938 12.9531 5.79688L10.5156 8.21094L11.1016 11.6328C11.1484 11.9141 11.0312 12.1953 10.7969 12.3594C10.5625 12.5469 10.2578 12.5469 10 12.4297L7 10.8125L3.97656 12.4297C3.74219 12.5469 3.41406 12.5469 3.20312 12.3594C2.96875 12.1953 2.85156 11.9141 2.89844 11.6328L3.46094 8.21094L1.02344 5.79688C0.8125 5.60938 0.742188 5.30469 0.835938 5.04688C0.929688 4.76562 1.16406 4.57812 1.44531 4.53125L4.82031 4.03906L6.32031 0.921875C6.4375 0.664062 6.69531 0.5 7 0.5C7.28125 0.5 7.53906 0.664062 7.65625 0.921875L9.17969 4.03906Z"
              fill="#FF991F"
            />
          </g>
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC887" />
              <stop offset="100%" stopColor="#FFF1E0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <span className="text-sm font-bold text-gray-800 dark:text-white">
            {rating}
          </span>
        </motion.div>
      </motion.div>
    </>
  );
};

const Card = ({ course, index = 0 }: { course: Course; index?: number }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
      className="w-full"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-full rounded-xl p-6 border  ">
          <motion.div variants={itemVariants}>
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white h-[50px]"
            >
              {course.name}
            </CardItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
            >
              {course.desc}
            </CardItem>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full mt-4">
            <CardItem translateZ="100" className="w-full">
              <Image
                src={course.thumbnail}
                height={1000}
                width={1000}
                className="h-[176px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-row justify-between items-center mt-10"
          >
            <div className="flex flex-row items-center justify-center text-xs text-[#444545] gap-1">
              <div>{svg.class()}</div>
              <div>Lesson: {course.detail_info.class}</div>
            </div>
            <div className="flex flex-row items-center justify-center text-xs text-[#444545] gap-1">
              <div>{svg.student()}</div>
              <div>Student: {course.detail_info.student}</div>
            </div>
            <div className="flex flex-row items-center justify-center text-xs text-[#444545] gap-1">
              <div>{svg.difficulty()}</div>
              <div>{course.detail_info.difficulty}</div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center mt-10"
          >
            <div className="">
              <ProgressCircle
                value={(course.rating / 5) * 100}
                rating={course.rating}
              />
            </div>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
            >
              Start Learning <ChevronRight size={16} />
            </CardItem>
          </motion.div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default Card;
