// import {useState} from 'react';
// import * as yup from 'yup';

// export default function validateInput(event) {
//     const [name, setName] = useState(null);
//     const [phone, setPhone] = useState(null);
//     const [errorName, setErrorName] = useState(false);
//     const [errorPhone, setErrorPhone] = useState(false);
//   const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//   const nameRegExp =
//         /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    
//     const nameSchema = yup
//         .string()
//         .required()
//         .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
//         .trim();
//     const phoneSchema = yup
//         .string()
//         .matches(phoneRegExp, 'Phone number is not valid')
//         .nullable();
    
//     if (name === 'name'{
//          try {
//       const validateName = await nameSchema.validate(event.target.name.value);

//       const duplicateContact = contacts.find(
//         contact => contact.name.toLowerCase() === name.value.toLowerCase()
//       );

//       if (duplicateContact)
//         return window.alert(`${name.value} is already in contacts`);

//       dispatch(addContact(validateContact));
//       navigate('/contacts');
//       form.reset();
//     } catch (error) {
//       setError(true);
//     }
//     })

 

//   return <div>useValidate</div>;
// }
