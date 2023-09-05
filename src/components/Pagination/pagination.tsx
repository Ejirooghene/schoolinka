import React, { FC, useState } from 'react';
import { Container, Btn, PageBtn } from './pagination.style';
import { useTask } from '../../hooks/useTask';

type PaginationProps = {
    start: number;
    stop: number;
    setStart: (val: number) => void;
    setStop: (val: number) => void;
}

const Pagination: FC<PaginationProps> = ({ start, stop, setStart, setStop }) => {
    const [tasks] = useTask();
    const [focused, setFocused] = useState<number>(0);

    const next = () => {
        if(stop === 80){
            return;
        }
        setStart(stop);
        setStop(stop + 10);
        setFocused(focused + 1);
    }

    const previous = () => {
        if(start === 0){
            return;
        }
        setStart(start - 10);
        setStop(stop - 10);
        setFocused(focused - 1);
    }

    const move = (index: number) => {
        const newStart = index * 10;
        const newStop = (index + 1) * 10;
      
        if (newStart >= 0 && newStop <= tasks.length) {
          setStart(newStart);
          setStop(newStop);
          setFocused(index);
        }
    };
      

    return (
        <Container>
            <Btn onClick={previous}>
                <img src='svgs/previous.svg' width='20px' height='20px' />
                <p>Previous</p>
            </Btn>
            <main>
                {Array.from({length: tasks.length / 10 },(_, index) => index + 1).map((num: any, index: number) => (
                    <PageBtn key={index.toString()} focused={focused === index} onClick={() => move(index)}>{num}</PageBtn>
                ))}
            </main>
            <Btn onClick={next}>
                <p>Next</p>
                <img src='svgs/next.svg' width='20px' height='20px' />
            </Btn>
        </Container>
    )
}

export default Pagination;