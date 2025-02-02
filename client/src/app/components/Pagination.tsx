"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Parse the current page from the URL query parameters
    const page = parseInt(searchParams.get("page") || "1", 10);
    if (!page || page > totalPages || page < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page);
    }
  }, [searchParams, totalPages]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", page.toString());
      router.push(`?${newParams.toString()}`);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const MAX_PAGES_TO_SHOW = 5; // Number of pages to show around the current page

    // Always show the first page
    pages.push(1);

    // Calculate the range of pages to show around the current page
    let startPage = Math.max(2, currentPage - Math.floor(MAX_PAGES_TO_SHOW / 2));
    let endPage = Math.min(totalPages - 1, currentPage + Math.floor(MAX_PAGES_TO_SHOW / 2));

    // Adjust the range if it's too close to the start or end
    if (currentPage <= Math.floor(MAX_PAGES_TO_SHOW / 2) + 1) {
      endPage = MAX_PAGES_TO_SHOW;
    } else if (currentPage >= totalPages - Math.floor(MAX_PAGES_TO_SHOW / 2)) {
      startPage = totalPages - MAX_PAGES_TO_SHOW + 1;
    }

    // Add ellipsis if there are skipped pages between the first page and the start page
    if (startPage > 2) {
      pages.push("...");
    }

    // Add the range of pages around the current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis if there are skipped pages between the end page and the last page
    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 mt-6'>
      {/* Previous Button with Icon */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <FaChevronLeft className="w-4 h-4" /> {/* Icon for Previous */}
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-4 py-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(page as number)}
            className={`px-4 py-2 text-sm rounded-md hover:bg-[#D9DFC6] transition ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button with Icon */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2  bg-gray-200 text-gray-800 rounded-md hover:bg-[#D9DFC6] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <FaChevronRight className="w-4 h-4" /> {/* Icon for Next */}
      </button>
    </div>
  );
};

export default Pagination;