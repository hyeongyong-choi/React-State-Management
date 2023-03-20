import {rest} from 'msw';

const todos = [
    {
        id:`1`,
        title:`jimmy 1`,
    },
    {
        id:`2`,
        title:`jimmy 2`,
    },
    {
        id:`3`,
        title:`jimmy 3`,
    },
    {
        id:`4`,
        title:`jimmy 4`,
    },
]

export const handlers = [
    rest.post('http://localhost:3000/api/todo', async(req,res,ctx)=>{
        const {todo} = req.body;
        console.log(JSON.stringify(todo));
        todos.push(todo)
        return res(
            ctx.json(true)
        )
    }),
    rest.get('http://localhost:3000/api/todos', async(req,res,ctx)=>{
        return res(
            ctx.json(todos)
        )
    }),

    rest.get('http://localhost:3000/api/user-name', async(req,res,ctx)=>{
        const id = req.url.searchParams.get("id")
        return res(
            ctx.json({
              name: id === "1" ? "The one" : "the other"
            })
          );
    }),
    rest.get('/login', async(req,res,ctx)=>{
        return res(
            ctx.json({
              id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
              firstName: 'John',
              lastName: 'Maverick',
            })
          )
    }),
    rest.get('/data',async(req,res,ctx) =>{ 
        const data = req.url.searchParams.get('id')
        return res(
            ctx.json({
                    "data": {
                        "people" :
                        [
                            {
                                "name": data,
                                "age": 135
                            },
                            {
                                "name": "timmy",
                                "age": 13
                            },
                            {
                                "name": "cindy",
                                "age": 15
                            },
                            {
                                "name": "judy",
                                "age": 25
                            },
                            {
                                "name": "marry",
                                "age": 64
                            },
                            {
                                "name": "tommy",
                                "age": 109
                            }
                        ]
                    }
            })
        )
    })


]