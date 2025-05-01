import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'

type Props = {
  itemsPerPage: number,
  totalItems: number,
  currentPage: number,
  pagesToShow: number,
  setCurrentPage: (currentPage: number) => void
}

export const PaginationComponent = ({itemsPerPage, totalItems, currentPage, setCurrentPage, pagesToShow}: Props) => {

  const [totalPages, setTotalPages] = useState<number[]>();

  useEffect(() => {
    const pagesArray = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1);
    if (pagesArray.length > pagesToShow) {
      if (pagesArray.length - pagesToShow + 1 > currentPage) {
        const buttonsToShow = [...pagesArray.slice(currentPage - 1, (currentPage + pagesToShow) - 2), pagesArray[pagesArray.length - 1]]
        setTotalPages(buttonsToShow);
      } else {
        const buttonsToShow = [...pagesArray.slice(pagesArray.length - pagesToShow, pagesArray.length)]
        setTotalPages(buttonsToShow);
      }
    } else {
      setTotalPages(pagesArray);
    }
    
  }, [itemsPerPage, totalItems, pagesToShow, currentPage])
  
  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  }

  const handleBackPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className='flex justify-center items-center gap-4 my-5'>
      <button
        className='text-meadow-400 disabled:text-tapa-100'
        onClick={handleBackPage}
        disabled={currentPage === 1}
      >
        <Icon
          icon={"ri:arrow-left-s-line"}
          fontSize={32}
        />
      </button>
      {
        totalPages && totalPages.map((page, index) => (
          <div 
            key={index}
            className='flex gap-4 justify-center'
          >
            {
              index === totalPages.length - 1 && currentPage < Math.ceil(totalItems / itemsPerPage) - pagesToShow + 1 &&
              <span>
                <Icon
                  icon={"tabler:dots"}
                  fontSize={32}
                />
              </span>
            }
          <button
            onClick={() => handleCurrentPage(page)}
            className={`rounded-md py-1 px-2 border-meadow-400 border-2 bg-tapa-900 min-w-9 font-semibold hover:bg-meadow-400 disabled:bg-meadow-400`}
            disabled={page === currentPage}
          >
            {page}
          </button>
          </div>
        ))
      }
      <button
        className='text-meadow-400 disabled:text-tapa-100'
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
      >
        <Icon
          icon={"ri:arrow-right-s-line"}
          fontSize={32}
        />
      </button>
    </div>
  )
}
