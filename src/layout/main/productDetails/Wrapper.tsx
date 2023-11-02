import React from "react";

type WrapperPropsType = {
    children: any
    className?: any
}

const Wrapper = (props: WrapperPropsType) => {
    return (
        <div
            className={` w-full mx-auto max-w-[1280px] px-5 md:px-10 ${
                props.className || ""
            }`}
        >
            {props.children}
        </div>
    );
};

export default Wrapper;
