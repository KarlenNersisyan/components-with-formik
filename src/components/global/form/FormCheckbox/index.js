import { Fragment } from 'react';

//* Components
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

//* Styles
import FormCheckboxStyle from './style';

const FormCheckbox = (props) => {
	const { label, name, options, ...rest } = props;

	return (
		<FormCheckboxStyle className='form-control'>
			<label>{label}</label>

			<Field name={name}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<Fragment key={option.key}>
								<input
									type='checkbox'
									id={option.value}
									value={option.value}
									checked={field.value.includes(option.value)}
									{...rest}
									{...field}
								/>

								<label htmlFor={option.value}>{option.key}</label>
							</Fragment>
						);
					});
				}}
			</Field>

			<ErrorMessage
				name={name}
				component={TextError}
			/>
		</FormCheckboxStyle>
	);
};

export default FormCheckbox;
