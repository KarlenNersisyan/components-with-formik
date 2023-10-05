import styled from 'styled-components';

const AppStyle = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;

	label {
		font-weight: bold;
		display: flex;
		margin-bottom: 5px;
	}

	input + label {
		font-weight: bold;
		display: inline-flex;
		margin-right: 20px;
	}

	input[type='text'],
	input[type='email'],
	input[type='password'],
	textarea,
	select {
		display: block;
		width: 400px;
		padding: 6px 12px;
		font-size: 14px;
		line-height: 1.42857143;
		color: #555;
		background-color: #fff;
		background-image: none;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.form-control {
		margin-bottom: 20px;
	}
`;

export default AppStyle;
