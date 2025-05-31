import { useRouter } from 'next/router';
import React from 'react';

const Params = () => {

    const router = useRouter()
    const { params = [] } = router.query

    console.log(params);



    return (
        <div>
            <h1>
                {params[0]}
            </h1>
            <h1>Params</h1>
        </div>
    );
}

export default Params;
