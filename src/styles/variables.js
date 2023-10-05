import { createGlobalStyle, css } from 'styled-components';

function spaceGenerator() {
	let str = '';

	for (let i = 1; i <= 250; i++) {
		str += `--sp${i}x: calc(var(--spSize) * ${i});`;
	}

	return str;
}

const Variables = createGlobalStyle`${css`
	:root {
		//! Spacing
		--spSize: 8px;

		--sp0-5x: calc(var(--spSize) * 0.5);
		--sp1-5x: calc(var(--spSize) * 1.5);
		--sp2-5x: calc(var(--spSize) * 2.5);
		${spaceGenerator()}

		//! Transition
        --trTime: 0.3s;

		//! Colors
		--black: ${(props) => props.theme.black};
		--white: ${(props) => props.theme.white};

		//! Variables
		--h1: 6em;
		--h2: 5em;
		--h3: 4em;
		--h4: 3em;
		--h5: 2em;
		--h6: 1em;
		--p: 0.5em;
	}
`}`;

export default Variables;
