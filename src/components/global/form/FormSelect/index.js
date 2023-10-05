import { Field, ErrorMessage } from 'formik';

//* Components
import TextError from '../../TextError';

//* Styles
import FormSelectStyle from './style';

const FormSelect = (props) => {
	const { label, name, options, ...rest } = props;

	return (
		<FormSelectStyle className='form-control'>
			<label htmlFor={name}>{label}</label>

			<Field
				id={name}
				name={name}
				as='select'
				{...rest}>
				{options.map((option) => {
					return (
						<option
							key={option.value}
							value={option.value}>
							{option.key}
						</option>
					);
				})}
			</Field>

			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</FormSelectStyle>
	);
};

export default FormSelect;
