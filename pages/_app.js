import styles from '../styles/global.css';

/**
 * 
 * @param {*} Component the component common accross all different pages
 * @returns component
 */

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}