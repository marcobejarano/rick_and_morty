import styles from './About.module.css';

export default function About() {
	return (
		<div className={ styles.aboutPageContainer }>
		    <div className={ styles.aboutPage__description }>
			    <div className={ styles.aboutPage__description_title }>Acerca de este sitio</div>
			    <div className={ styles.aboutPage__description_info }>
			        El presente proyecto tiene como finalidad mostrar a los personajes de la serie "Rick & Morty"
			        en forma de cartas, las cuales serán obtenidas por medio de un API, la cual no requiere de
			        de un API key para poder ser consumida.
			        Durante el proceso se aprende acerca de los pasos requeridos para realizar la parte front-end
			        de un proyecto de desarrollo web. En este caso, usamos React y CSS principalmente.
			    </div>
			</div>
		    <img src="react-logo.jpg" alt="react-logo" className={ styles.aboutPage__image } />
		</div>
	);
}