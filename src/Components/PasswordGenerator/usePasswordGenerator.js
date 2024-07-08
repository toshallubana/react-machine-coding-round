import { useState } from "react";

const usePasswordGenerator = () => {

    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const generatePassword = (checkBoxData, length) => {
        let charSet = '', generatedPassword = '';

        const selectedOption = checkBoxData?.filter((checkbox) => checkbox.state)

        if(selectedOption?.length === 0) {
            setErrorMessage("Select at least one option")
            setPassword("")
            return
        }
        console.log(selectedOption, 'selectedOption');
        selectedOption?.forEach((option) => {
            switch(option.title) {
                case "Include Uppercase Letters":
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lower Letters":
                    charSet += "abcdefghijklmnopqrstuvwxyz"
                    break;
                case "Include Numbers":
                    charSet += "0123456789"
                    break;
                case "Include Symbols":
                    charSet += "!@#$%^&*()"
                    break;
                default:
                    break;
            }
        })

        for( let i = 0; i < length; i++) {
            const randomIdex  = Math.floor(Math.random() * charSet.length)
            console.log(randomIdex,'randomIdex')
            console.log(charSet, charSet[randomIdex]);
            generatedPassword += charSet[randomIdex]
        }
        setPassword(generatedPassword)
        setErrorMessage('')
    }

    return { password, errorMessage, generatePassword}
}
export default usePasswordGenerator;