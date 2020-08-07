//Destructor create an object property and access selected property using De structure.
// const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochu khet', phone: '017621170600', friends:['Tom Hancks', 'Tom crise', 'Tom yearn']};

// const { phone, gfName, address, salary } = person;
// const phoneNum = person.phone;
// console.log(gfName, phone, address, salary);
//================================================================
//Creat an array and access her property using De structure.
// const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan' , 'Sharukh Khan'];
// const [chotoFriends, nextFriends, ...restFriends] = friends;
// console.log(chotoFriends, nextFriends, restFriends);
//========================================================================
const complexObject = {
    name : 'abc',
    info: {
        address : 'Kola Bagan',
        leader : 'Tiger Leader'
    }
}
const {leader} = complexObject.info;