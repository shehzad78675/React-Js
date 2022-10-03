import { ErrorMessage, useField } from "formik"

const TextFields = ({label, ...props}) => {
    const [field, meta] = useField(props);
    console.log(meta);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input type="text" className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete="off"/>
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

export default TextFields;