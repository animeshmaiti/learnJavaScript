class GeneratePassword {
    constructor(length) {
        this.length = length;
    }
    generateHardPass() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < this.length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    generateNumberPass() {
        const characters = '0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < this.length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    generateFunnyPass() {
        const strings = ['Wrong password','123456','qwerty','my name is hacker','i love u'];
        let result = '';
        const stringsLength = strings.length;
        const random = Math.floor(Math.random() * stringsLength);
        result = strings[random];
        return result;
    }
}
const password = new GeneratePassword(10);
console.log(password.generateHardPass());
console.log(password.generateFunnyPass());
console.log(password.generateNumberPass());