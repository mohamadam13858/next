import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter()
    const {productId} = router.query
    return (
        <div>
            <h1>productId : {productId}</h1>
        </div>
    );
}

export default ProductId;
