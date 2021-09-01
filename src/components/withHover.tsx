import React, { useState } from 'react';

const withHoverHOC = (Comp: any) => {
    const WithHover = () => {
        const [textHover, setHover] = useState(false);
        const [textColor, setTextColor] = useState('#888');
        return <Comp
            textColor={textColor}
            textHover={textHover}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setTextColor('green')} />
    }

    return WithHover;
}

export default withHoverHOC;