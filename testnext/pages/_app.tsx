// pages/_app.tsx
import { AppProps } from "next/app";
import Head from 'next/head'; // معمولاً برای متا تگ‌ها و عنوان صفحه استفاده می‌شود

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            header
            <Component {...pageProps} />
            footer
        </>
    )
}

export default MyApp; // فقط یک export default
