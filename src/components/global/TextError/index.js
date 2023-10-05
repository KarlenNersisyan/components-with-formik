//* Styles
import TextErrorStyle from './style';

const TextError = (props) => {
	return <TextErrorStyle className='error'>{props.children}</TextErrorStyle>;
};

export default TextError;
