import { useState } from 'react';

const useInputField = (defaultValue = '') => {
    //`value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.
    //instead of using defaultValue=null, use defaultValue = ''
    const [value, setValue] = useState(defaultValue);

    // 1st method
    // const handleChange = event => {
    //     setValue(event.target.value);
    // };
    // return [value, handleChange];


    // 2nd method
    // const onChange = event => {
    //     setValue(event.target.value);
    // };
    // return { value, onChange };


    // 3rd method
    const handlechange = event => {
        setValue(event.target.value);
    };
    return { value, onChange: handlechange };

    //React does not recognize the `handleChange` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `handlechange` instead.
};

export default useInputField;