import React, { FC, useState, useEffect } from 'react';
import { Container, Btn, PageBtn } from './pagination.style';
import { useTask } from '../../hooks/useTask';

type PaginationProps = {
    start: number;
    stop: number;
    setStart: (val: number) => void;
    setStop: (val: number) => void;
}

const tasksPerPage = 10; 

const Pagination: FC<PaginationProps> = ({ start, stop, setStart, setStop }) => {
    const { tasks, setFocusedBtn } = useTask();
    const totalPages = Math.ceil(tasks.length / tasksPerPage);
    const [focused, setFocused] = useState<number>(0);

    useEffect(() => {
        const currentPage = Math.floor(start / tasksPerPage);
        setFocused(currentPage);
    }, [start, tasksPerPage]);

    // const next = (index?: number) => {
    //     if (stop >= tasks.length) {
    //         return;
    //     }
    //     if (focused < totalPages - 1) {
    //         setStart(start + (tasksPerPage * (index || 0)));
    //         setStop(stop + (tasksPerPage * (index || 0)));
    //         setFocused(focused + 1);
    //     }
    // }

    const next = (index?: number) => {
        if (stop >= tasks.length) {
            return;
        }
        
        let newIndex = index || focused + 1;
    
        if (newIndex >= totalPages) {
            newIndex = totalPages - 1;
        }
    
        const newStart = newIndex * tasksPerPage;
        const newStop = newStart + tasksPerPage;
    
        setStart(newStart);
        setStop(newStop);
        setFocused(newIndex);
    }

    

    const previous = (index?: number) => {
        if (start === 0) {
            return;
        }
        
        let newIndex = index || focused - 1;
    
        if (newIndex < 0) {
            newIndex = 0;
        }
    
        const newStart = newIndex * tasksPerPage;
        const newStop = newStart + tasksPerPage;
    
        setStart(newStart);
        setStop(newStop);
        setFocused(newIndex);
    }    

    const move = (index: number) => {
        if (index > focused) {
            next(index);
        } else if (index < focused) {
            previous(index);
        }
        setFocusedBtn(-1);
    }

    return (
        <Container>
            <Btn onClick={() => previous()}>
                <img src='svgs/previous.svg' width='20px' height='20px' />
                <p>Previous</p>
            </Btn>
            {/* <main>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((num: any, index: number) => (
                    <PageBtn key={index.toString()} focused={focused === index} onClick={() => move(index)}>{num}</PageBtn>
                ))}
            </main> */}
            <main>
  {Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const pagesToShow = 5; // Number of pages to show

    // Calculate the range of pages to display, centered around the focused page
    const startPage = Math.max(1, focused - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    // Display the page number only if it's within the calculated range
    if (page >= startPage && page <= endPage) {
      return (
        <PageBtn
          key={index.toString()}
          focused={focused === index}
          onClick={() => move(index)}
        >
          {page}
        </PageBtn>
      );
    }

    // If the page is outside the range, display ellipsis
    if (page === startPage - 1 || page === endPage + 1) {
      return <span key={index.toString()}>...</span>;
    }

    return null; // Hide pages outside the range and ellipsis
  })}
</main>

            <Btn onClick={() => next()}>
                <p>Next</p>
                <img src='svgs/next.svg' width='20px' height='20px' />
            </Btn>
        </Container>
    )
}

export default Pagination;