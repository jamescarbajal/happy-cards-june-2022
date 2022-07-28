
export default function LabeledTextInput({ name, value, setValue, inputType}) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input 
                name={name}
                type={inputType || "text"}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    );
}