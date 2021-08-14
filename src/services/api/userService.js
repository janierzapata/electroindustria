import http from "..";


export const login = async (body) => {
    console.log('data', body);
    try {
        const { data } = await http.post('/login.php', {
            data: body
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

