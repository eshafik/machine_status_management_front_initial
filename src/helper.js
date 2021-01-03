import machineStatusManagement from "./api/machineStatusManagement";

export const checkUser = async (phone_number) =>{
        const response = await machineStatusManagement.post('check_login', {username:phone_number});
        if (response.status === 200){
            return response.data;
        }
        return {is_exists: false}
}