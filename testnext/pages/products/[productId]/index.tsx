import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {

    const router = useRouter()
    const { productId } = router.query

    const handlePushToDetails = () => {
          
        router.push(`${productId}/details`)
    }

    return (
        <div>
            <h1>productId : {productId}</h1>
            <div>
                <button onClick={handlePushToDetails}>
                    product : {productId} details
                </button>
            </div>
        </div>
    );
}

export default ProductId;
