import axios from "axios";

export interface DataType {
    firstName: string;
    lastName: string;
    password: string | number;
    email: string | number;
}


export const registrationActions = async (data: DataType) => {
    try {
        const response = await axios.post('http://localhost:5000/users/create-user', {email:data.email, password:data.password})
    }
    catch (e) {
        // @ts-ignore
        console.log(e.response.data.message);
    }
}