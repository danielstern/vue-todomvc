let todos = [{
    name:"Debug UI",
    complete: false,
},{
    name:"Refactor build step",
    complete: true
},{
    name: "Upgrade Component",
    complete: false
}];

new Vue({
    el:`#app`,
    template:"#app-template",
    data:()=>(
        {
            todos,
            text:``,
            showComplete:true,
        }
    ),
    computed:{
        filteredTodos(){
            return this.todos
                .filter(todo=>this.showComplete ? true : !todo.complete);
        },
        submitIsDisabled(){
            return this.text == "";
        }
    },
    methods:{
        addTodo(){
            todos.push({
                name:this.text,
                complete:false
            });
            this.text = ``;
        },
    }
});