import http from "..";


export const login = async (body) => {
     try {
         const { data } = await http.post('/login.php', {
             data: body
         });

        console.log('data retornada',JSON.stringify(data));
         return data;
     } catch (error) {
         console.log('el error es',error);
     }
 };

