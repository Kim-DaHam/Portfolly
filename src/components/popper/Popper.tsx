import { createPortal } from "react-dom";
import { Group, Item, PopperContainer, Separator } from "./Popper.styled";
import { useEffect } from "react";
import { IComponentFactory } from "@/types";

export type PopperType = 'HEADER' | 'PORTFOLIO_ITEM';

const popperId = {
    'HEADER': 'header-menu',
    'PORTFOLIO_ITEM': 'portfolio-item-menu',
}

function Popper(props: { type: PopperType }) {
    const type = props.type;
    const renderPopper = (type: PopperType) => {
        const ComponentFactory: IComponentFactory = {
            HEADER: (
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
            PORTFOLIO_ITEM: (
                <></>
            ),
        }

        return ComponentFactory[type];
    }

    const findBottomCoordinates = (type: PopperType) => {
        const div = document.getElementById(popperId[type])!;
        const divBottom = div.getBoundingClientRect().bottom;
        const absoluteBottom = window.pageYOffset + divBottom;
        return absoluteBottom;
    }

    const findRightCoordinates = (type: PopperType) => {
        const div = document.getElementById(popperId[type])!;
        const divRight = div.getBoundingClientRect().right;
        const fullWidth = document.documentElement.clientWidth;
        const absoluteRight =  fullWidth - divRight;
        return absoluteRight;
    }

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
        <PopperContainer bottom={findBottomCoordinates(type)} right={findRightCoordinates(type)}>
            {renderPopper(type)}
        </PopperContainer>,
        document.getElementById('modal')!
    )
}

export default Popper;