import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>products</h1>
            <Link href={{
                pathname: "/products/1",
                query: { id: 1 }
            }}>products1</Link>
            <hr />
            <Link href={{
                pathname: "/products/2",
                query: { id: 2 }
            }} >Products2</Link>
            <hr />
            <Link href={{
                pathname: "/products/3",
                query: { id: 3 }
            }}>products3</Link>
        </div>
    );
}

export default Index;
