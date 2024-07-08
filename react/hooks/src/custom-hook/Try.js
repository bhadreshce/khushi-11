// import React, { useState } from 'react';

// function TrianglePattern() {
//     const [rows, setRows] = useState(5);



//     return (
//         <div>

//         </div>
//     );
// }

// export default TrianglePattern;

import React from 'react'

const Pattern = ({ rows }) => {
    const starpattern = () => {
        let pattern = [<div>hii</div>, 2222, 333]
        for (let i = 1; i <= rows; i++) {

            pattern.push(
                <div key={i}>
                    {"*".repeat(i)}
                </div>
            );

        }
        return pattern;

    }
    return starpattern();

}

export default Pattern;