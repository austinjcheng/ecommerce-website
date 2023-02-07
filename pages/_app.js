import Link from "next/link";


const MyApp = ({ Component, pageProps}) => {
    return (
    <>
        <Link legacyBehavior href="/">
            <a>Home</a>
        </Link>
        <Component {...pageProps} />
        <footer>Austin Cheng</footer>
    </>
    )
}
export default MyApp;