import { useRouter } from 'next/router';
import React from 'react';

const Details = () => {

    const router = useRouter()
    const { productId } = router.query

    return (
        <div>
            <h1>Details</h1>
            <h1>ProductId : {productId}</h1>
        </div>
    );
}

export default Details;
