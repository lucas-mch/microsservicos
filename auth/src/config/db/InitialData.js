import bcrypt from 'bcrypt';
import User from '../../modules/user/model/User.js';

export async function createInitialData(){
    await User.sync({force:true});

    let password = await bcrypt.hash('123456', 10);

    await User.create({
        name: 'Lucas Machado de Souza',
        email: 'lcsmachaado@gmail.com',
        password: password
    })

    await User.create({
        name: 'Lucas Machado de Souza',
        email: 'lcsmachaado1@gmail.com',
        password: password
    })
}