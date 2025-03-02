


const ReusaForm = ({formTitle, submit='Submit', handleSubmit}) => {

    const formSubmit = event => {
        event.preventDefault();
        console.log('Form submitted');
        const formData ={
            email: event.target.email.value,
            password: event.target.password.value
        }
        handleSubmit(formData);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">{formTitle}</h1>
            <form className="flex flex-col gap-4 w-[200px] mx-auto" onSubmit={formSubmit}>
                <input className="border" type="email" name="email"/>
                <input className="border" type="password" name="password"/>

                <input className="border" type="submit" value={submit}/>
            </form>
        </div>
    );
};

export default ReusaForm;