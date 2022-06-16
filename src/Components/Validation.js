
// username : first name, last name -- accept only alphabets
export function usernameValidation(input){
    return /^[a-zA-Z\s]+$/.test(input);
}

// email validation
export function emailValidation(input){
     return /^.+@.+\..+$/.test(input);
}

//passowrd validation
export function passwordValidation(input){
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/.test(input);
}

// book id and noOfBooks -- only numeric
export function bookIdnoOfBooksValidation(input){
    return /^[0-9]+$/.test(input);
}

// book title & Author-- alphanumeric 50 chars
export function bookTitleAuthorValidation(input){
    return /^[a-zA-Z0-9\s]{1,50}$/.test(input);
}

// book description -- alphanumeric
export function bookDescValidation(input){
    return /^[a-zA-Z0-9\s]{1,150}$/.test(input);
}