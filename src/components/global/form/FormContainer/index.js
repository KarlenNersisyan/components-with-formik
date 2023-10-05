import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//* Components
import FormControl from '../FormControl';

function FormikContainer() {
	//! Dropdown options example
	const dropdownOptions = [
		{ key: 'Select an option', value: '' },
		{ key: 'Option 1', value: 'option1' },
		{ key: 'Option 2', value: 'option2' },
		{ key: 'Option 3', value: 'option3' },
	];

	//! Radio options example
	const radioOptions = [
		{ key: 'Option 1', value: 'rOption1' },
		{ key: 'Option 2', value: 'rOption2' },
		{ key: 'Option 3', value: 'rOption3' },
	];

	//! Checkbox options example
	const checkboxOptions = [
		{ key: 'Option 1', value: 'cOption1' },
		{ key: 'Option 2', value: 'cOption2' },
		{ key: 'Option 3', value: 'cOption3' },
	];

	//! Initial values
	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
		checkboxOption: [],
		birthDate: null,
	};

	//! Validation Schema
	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
		description: Yup.string().required('Required'),
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
		checkboxOption: Yup.array().required('Required'),
		birthDate: Yup.date().required('Required').nullable(),
	});

	//! Handle submit
	const handleSubmit = (values) => {
		console.log('Form data', values);
		console.log('Saved data', JSON.parse(JSON.stringify(values)));
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			{(formik) => (
				<Form>
					<FormControl
						control='input'
						type='email'
						label='Email'
						name='email'
					/>

					<FormControl
						control='textarea'
						label='Description'
						name='description'
					/>

					<FormControl
						control='select'
						label='Select a topic'
						name='selectOption'
						options={dropdownOptions}
					/>

					<FormControl
						control='radio'
						label='Radio topic'
						name='radioOption'
						options={radioOptions}
					/>

					<FormControl
						control='checkbox'
						label='Checkbox topics'
						name='checkboxOption'
						options={checkboxOptions}
					/>

					<FormControl
						control='date'
						label='Pick a date'
						name='birthDate'
					/>

					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
