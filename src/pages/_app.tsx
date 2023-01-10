
import type { AppProps } from 'next/app';
import { globalStyle } from '../styles/global';
import logoImg from '../assets/logo.svg';
 
globalStyle();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<header>
				<img src={logoImg.src} alt='logo do ignite' />
			</header>
			<Component {...pageProps} />
		</div> 
	);
}
