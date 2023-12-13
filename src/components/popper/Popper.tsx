import { createPortal } from "react-dom";
import { Group, Item, PopperContainer, Separator } from "./Popper.styled";
import { useEffect } from "react";
import { IComponentFactory } from "@/types";

export type Popper = 'header' | 'portfolioItem';

const renderPopper = (type: Popper) => {
    const ComponentFactory: IComponentFactory = {
        header: (
            <>
            <Group>
                <Item>MenuItem1</Item>
                <Item>MenuItem2</Item>
            </Group>
            <Separator/>
            <Group>
                <Item>MenuItem3</Item>
                <Item>MenuItem4</Item>
            </Group>
            </>
        ),
        portfolioItem: (
            <></>
        ),
    }

    return ComponentFactory[type];
}

function Popper(props: { type: Popper, right: number, bottom: number}) {
    const { type, right, bottom } = props;

    useEffect(()=>{
        document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;
            overflow: hidden;
        `

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    },[]);

    return createPortal(
        <PopperContainer top={bottom} right={right}>
            {renderPopper(type)}
        </PopperContainer>,
        document.getElementById('modal')!
    )
}

export default Popper;