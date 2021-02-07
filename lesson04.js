const user = {
    id: 23,
    name: "Abdul",
    lover :{
        name : 'Jamila',
        favFood : "IceCream"
    },
    friendsAge : [12,15,45],
    friends: ['Lamela', 'Lara', 'Lavlu']

};

const userJSON = JSON.stringify(user);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);

console.log(userFromJSON);