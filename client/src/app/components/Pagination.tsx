"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current page from the query parameters
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

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
    <div className='flex flex-wrap justify-center items-center gap-2'>
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
          <button
            key={index}
            onClick={() => {
              // Navigate to a middle page when ellipsis is clicked
              const middlePage = Math.ceil((currentPage + totalPages) / 2);
              goToPage(middlePage);
            }}
            className="px-4 py-2 text-gray-500 hover:bg-gray-200 rounded-md transition"
          >
            ...
          </button>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(page as number)}
            className={`px-4 py-2 text-sm rounded-md hover:bg-[#D9DFC6] transition ${
              currentPage === page ? "bg-gray-500 text-white" : "bg-gray-200"
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
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md  disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <FaChevronRight className="w-4 h-4" /> {/* Icon for Next */}
      </button>
    </div>
  );
};

export default Pagination;