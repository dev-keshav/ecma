// ------------------- The use of this keyword in normal and arrow function --------------------

let data = {
    list: "Names",
    friends: ['Adi', 'Vaibhav', 'Rahul', 'Dev', 'Teej'],
    age: [32, 32, 22, 21, 45],
    getHai:function(){
        // console.log(this.list);

        // ------- By using this with normal function -------
        var that = this.list
        this.friends.map(function(item){
            console.log(that, item)
        })

        // --------- By using this with arrow function -------
        this.friends.map((item) => {
            console.log(this.list, item)
        })
    }
}

data.getHai();