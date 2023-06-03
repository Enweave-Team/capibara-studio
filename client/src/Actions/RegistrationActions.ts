import axios from "axios";

export interface DataType {
    nameAcc: string;
    password: string | number;
    email: string | number;
}


export const registrationActions = async (data: DataType) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/register', {
            email: data.email,
            password: data.password
        })
    } catch (e) {
        // @ts-ignore
        console.log(e.response.data.message);
    }
}

export const login = async (data: DataType) => {
    try {
        const response = await axios.post("http://localhost:5000/auth/login", {
            email: data.email,
            password: data.password
        });
        // localStorage.setItem('currentUser', JSON.stringify({
        //     token: response.data.token ,
        //     user: response.data.user,
        // }));
        console.log(response)
    } catch (e) {
        //@ts-ignore
        console.log(e.response.data.message);
    }

}