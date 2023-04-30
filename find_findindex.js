let data = [3, 18, 11, 15, 20, 59, 69];

let result = data.find((item) => item > 50 && item < 100)
console.log(result);

var users = [
    {
        id: 01,
        name: 'Rahul',
        type: 'dev'
    },
    {
        id: 02,
        name: 'Aditya',
        type: 'dev'
    },
    {
        id: 03,
        name: 'Vaibhav',
        type: 'dev'
    },
    {
        id: 04,
        name: 'Devianshi',
        type: 'dev'
    },
    {
        id: 05,
        name: 'Khushi',
        type: 'SW'
    },
]

let res = users.find(function(item){
    if(item.id>3){
        return item.id;
    }
})
console.log(res);
