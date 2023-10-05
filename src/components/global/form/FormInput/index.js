//* Components
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

//* Styles
import FormInputStyle from './style';

const FormInput = (props) => {
	const { label, name, ...rest } = props;

	return (
		<FormInputStyle className='form-control'>
			<label htmlFor={name}>{label}</label>

			<Field
				id={name}
				name={name}
				{...rest}
			/>

			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</FormInputStyle>
	);
};

export default FormInput;
