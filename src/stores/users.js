import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
    const users={
0:{name:'leni',
    email:'leni@gmail.com',
    phone:115713199,
deliveryAddress:'123,madaraka',
password:'12345678',
userType:'admin',
activeAccount: true
},
1:{name:'Erick',
    email:'erick@gmail.com',
    phone:722834051,
deliveryAddress:'456,karen',
password:'987654321',
userType:'customer',
activeAccount: true
},
2:{name:'Ann',
    email:'ann@gmail.com',
    phone:720579670,
deliveryAddress:'789,kikuyu',
password:'12341234',
userType:'customer',
activeAccount: true
},
3:{name:'Kito',
    email:'kito@gmail.com',
    phone:115713197,
deliveryAddress:'987,embakasi',
password:'12345677',
userType:'customer',
activeAccount: true
},
4:{name:'Nancy',
    email:'nancy@gmail.com',
    phone:115713196,
deliveryAddress:'321,cbd',
password:'12345678',
userType:'customer',
activeAccount: false
},
    }
    
    
        

        return { users}
    },
    actions:{
      
       }
    })