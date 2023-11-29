const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');


const hasingPassword = async (password) => {
    const pass = await bcrypt.hash(password, 10);
    //  bcrypt.hash use for encrypted passwords
    console.log(pass);
    const passmatch = await bcrypt.compare("durgesh@9669", pass);
    // bcrypt.compare use for decrypted passwords
        if(passmatch){
        console.log(passmatch, "password has  matched");
    }else{
        console.log(passmatch, "password dose not match");
    }
}
hasingPassword('durgesh@9669');
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

// This is a most powerful password hashing algorithm in the world