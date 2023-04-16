import axios from "axios";

interface DataType {
    password: string
    email: string
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