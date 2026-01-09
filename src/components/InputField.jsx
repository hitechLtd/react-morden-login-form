import { useState } from "react";
import { Eye } from "lucide-react";

const InputField = ({type, placeholder, icon}) => {
    //State to toggle password visibility 
    const [isPasswordShown, setIsPassword] = useState(false);
    return (
        <div className="input-wrapper">
            <input type={isPasswordShown ? 'text' : type}
            placeholder={placeholder}
             className="input-field"
             required
              />
              <i className="material-symbols-rounded">{icon}</i>
              {type ==='password' && (
                <i onClick={() => setIsPassword(prevState => !prevState)}
                className="material-symbols-rounded eye-icon">
                    {isPasswordShown ? 'visibility': 'visibility_off'}
                </i>
              )}
        </div>
    )
}
export default InputField;