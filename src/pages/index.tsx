import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home'; 
import {useKeenSlider} from 'keen-slider/react';
import Camisa1 from '../assets/Camisa-1.png';
import Camisa2 from '../assets/Camisa-2.png';
import Camisa3 from '../assets/Camisa-3.png';


export default function Home() {

	const [sliderRef] = useKeenSlider({
		slides:{
			perView: 'auto',
			spacing: 48
		}
	});

	return (
		<>
			<HomeContainer ref={sliderRef} className='keen-slider' >
				<Product className='keen-slider__slide' >
					<Image src={Camisa1} width= {500} height= {460} alt='' />
					<footer>
						<span>
							Camisa 1						
						</span>
						<strong>
							R$ 90,00
						</strong>
					</footer>
				</Product>
				<Product className='keen-slider__slide'>
					<Image src={Camisa2} width= {500} height= {460} alt='' />
					<footer>
						<span>
							Camisa X
						</span>
						<strong>
							R$ 80,00
						</strong>
					</footer>
				</Product>
				<Product className='keen-slider__slide' >
					<Image src={Camisa3} width= {500} height= {460} alt='' />
					<footer>
						<span>
							Camisa 3
						</span>
						<strong>
							R$ 80,00
						</strong>
					</footer>
				</Product>

			</HomeContainer>
		</>					
	);
}
