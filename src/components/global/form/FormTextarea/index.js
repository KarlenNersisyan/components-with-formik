import { Field, ErrorMessage } from 'formik';

//* Components
import TextError from '../../TextError';

//* Styles
import FormTextareaStyle from './style';

const FormTextarea = (props) => {
	const { label, name, ...rest } = props;

	return (
		<FormTextareaStyle className='form-control'>
			<label htmlFor={name}>{label}</label>

			<Field
				id={name}
				name={name}
				as='textarea'
				{...rest}
			/>

			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</FormTextareaStyle>
	);
};

export default FormTextarea;
