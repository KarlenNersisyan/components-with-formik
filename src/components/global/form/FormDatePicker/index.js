//* Components
import { Field, ErrorMessage } from 'formik';
import DateView from 'react-datepicker';
import TextError from './TextError';

//* Styles
import FormDatePickerStyle from './style';
import 'react-datepicker/dist/react-datepicker.css';

const FormDatePicker = (props) => {
	const { label, name, ...rest } = props;

	return (
		<FormDatePickerStyle className='form-control'>
			<label htmlFor={name}>{label}</label>

			<Field name={name}>
				{({ form, field }) => {
					const { setFieldValue } = form;
					const { value } = field;

					return (
						<DateView
							id={name}
							selected={value}
							onChange={(val) => setFieldValue(name, val)}
							{...rest}
							{...field}
						/>
					);
				}}
			</Field>

			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</FormDatePickerStyle>
	);
};

export default FormDatePicker;
