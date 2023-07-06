const createTodo = async(todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    let r = await response.json()
    return r
}
const getTodo= async(id)=>{
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let r = await response.json()
    return r
}

const mainFunc= async()=>{
    let todo = {
        title: "foo",
        body: "bar",
        userId: 1
    }
    let response = await createTodo(todo)
    console.log(response)
    console.log(await getTodo(100))
}
mainFunc()