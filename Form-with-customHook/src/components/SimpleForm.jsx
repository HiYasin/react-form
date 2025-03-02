import useInputField from "../CustomHooks/useInputField";

const SimpleForm = () => {

    // 1st method
    // const [email, handleEmail] = useInputField(); 
    // const [email, handleEmail] = useInputField('Faisal'); 
    // const [password, handlePassword] = useInputField();


    // 2nd method & 3rd method
    const emailState = useInputField();
    const passwordState = useInputField();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        //1st method
        // console.log("Name:", email);
        // console.log("Password:", password);

        // 2nd method & 3rd method
        console.log(emailState.value);
        console.log(passwordState.value);
    }

    return (
        <div>
            <form className="flex flex-col gap-4 w-[200px] mx-auto m-10" onSubmit={handleSubmit}>
                {/* 1st method */}
                {/* <input className="border" type="email" name="email" value={email} onChange={handleEmail}/>
                <input className="border" type="password" name="password" value={password} onChange={handlePassword}/> */}

                {/* 2nd method & 3rd method */}
                <input className="border" type="email" name="email" {...emailState}/>
                <input className="border" type="password" name="password" {...passwordState}/>

                <input className="border" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;