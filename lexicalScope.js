let data = {
    list: "Names",
    friends: ['Adi', 'Vaibhav', 'Rahul', 'Dev', 'Teej'],
    age: [32, 32, 22, 21, 45],
    getHai:function(){
        console.log(this.friends)
    }
}

data.getHai();