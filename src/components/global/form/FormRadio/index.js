import { Fragment } from 'react';

//* Components
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

//* Styles
import FormRadioStyle from './style';

const FormRadio = (props) => {
	const { label, name, options, ...rest } = props;

	return (
		<FormRadioStyle className='form-control'>
			<label>{label}</label>

			<Field name={name}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<Fragment key={option.key}>
								<input
									type='radio'
									id={option.value}
									value={option.value}
									checked={field.value === option.value}
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
		</FormRadioStyle>
	);
};

export default FormRadio;
