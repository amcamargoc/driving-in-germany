"use client"

import { useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  let currentPage = parseInt(searchParams.get("page") || "1", 10);
  if (!currentPage || currentPage >  totalPages || currentPage < 1) {
    currentPage = 1
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", page.toString());
      router.push(`?${newParams.toString()}`);
    }
  };

  const getPageNumbers = () => {
    const PAGES_AVAILABLE = 4
    const pages = [];
    const prevPageOffset = currentPage - PAGES_AVAILABLE
    const nextPageOffset = currentPage + PAGES_AVAILABLE

    for (let i = Math.max(1, prevPageOffset); i <= Math.min(totalPages, nextPageOffset); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 mt-6'>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Previous
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`px-4 py-2 text-sm rounded-md hover:bg-[#D9DFC6] transition ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-[#FFF2C2] text-gray-800 rounded-md hover:bg-[#D9DFC6] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
