import http from "..";


export const login = async (body) => {
     try {
         const { data } = await http.post('/login.php', {
             data: body
         });

        
         return data;
     } catch (error) {
         console.log('el error es',error);
     }
 };

