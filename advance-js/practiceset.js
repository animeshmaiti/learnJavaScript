const a = async (text,n=2)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text);
        },1000*n)
    })
}

let x = [1,2,3];

const sum = (a,b,c) =>{
    console.log(a+b+c);
}
sum(...x);// this semi colon is important here because after this we need to separate the iife

(
    async ()=>{
        let b = await a("after 1 sec",1);
        console.log(b);
        let c = await a("after 2 sec",2);
        console.log(c);
    }
)()

const simpleInterest = (p,r,t)=>{
    return p + ((p*r*t)/100);
}
let p=1000;
console.log(`For ${p} rupees we will get total ${simpleInterest(p,10,3)} rupees`);