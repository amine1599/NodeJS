const generatePassword=require('generate-password');

function generateRandomPassword(){
    const password = generatePassword.generate({
        length:10,
        numbers:true, // include digits in the generated passwords
        symbols:false,  // exclude special characters from being used
        uppercase:true,
        strict:true,
    });
    console.log('genrated password:',password)
}

generateRandomPassword();