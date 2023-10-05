import { createGlobalStyle, css } from 'styled-components';

const Typography = createGlobalStyle`${css`
	* {
		box-sizing: border-box;
		outline: none;
		-webkit-appearance: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important; //! Touch highlight color
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;
	}

	body {
		width: 100%;
		min-height: 100vh;
		margin: 0;
		padding: 0;
		background-color: var(--white);
		overflow-x: hidden;
		position: relative;

		main {
			position: relative;
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			z-index: 1;
			transition: margin-top 1s;
		}

		&::-webkit-scrollbar {
			display: none;
		}
	}

	ul,
	fieldset {
		margin: 0;
		padding: 0;
		list-style: none;
		border: none;
	}

	p {
		margin-block-start: 0;
		margin-block-end: 0;
	}

	button {
		padding: 0;
		border-width: 0;
		border-color: inherit;
		background-color: inherit;
	}

	a {
		-webkit-tap-highlight-color: transparent;
	}

	//! Font sizes
	.h1,
	h1 {
		font-size: var(--h1);
		margin: 0;
	}

	.h2,
	h2 {
		font-size: var(--h2);
		margin: 0;
	}

	.h3,
	h3 {
		font-size: var(--h3);
		margin: 0;
	}

	.h4,
	h4 {
		font-size: var(--h4);
		margin: 0;
	}

	.h5,
	h5 {
		font-size: var(--h5);
		margin: 0;
	}

	.h6,
	h6 {
		font-size: var(--h6);
		margin: 0;
	}

	.p,
	p {
		font-size: var(--p);
		margin: 0;
	}
`}`;

export default Typography;
