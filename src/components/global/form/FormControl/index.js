//* Components
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import FormCheckbox from './FormCheckbox';
import FormDatePicker from './FormDatePicker';

const FormControl = (props) => {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <FormInput {...rest} />;
		case 'textarea':
			return <FormTextarea {...rest} />;
		case 'select':
			return <FormSelect {...rest} />;
		case 'radio':
			return <FormRadio {...rest} />;
		case 'checkbox':
			return <FormCheckbox {...rest} />;
		case 'date':
			return <FormDatePicker {...rest} />;
		default:
			return null;
	}
};

export default FormControl;
