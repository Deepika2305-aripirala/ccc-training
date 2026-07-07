/*const express = require("express")

const app = express();
const PORT = 3000;

app.use(express.json());
const nms =[]

function hello(req , res){
    res.json({

       message:  "Hello world"
    });
}
//function to add the two numbers
function add(req ,res){
    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const sum = a + b;
    res.json({
        result: sum
    });
}
//function to calculate the volume of a sphere
function volume(req,res){
    const r = Number(req.query.r);
    const vol = 4.187 * r * r * r;
    res.json({
        result: vol
    })
}

//POST localhost:/3000/names (JSON BODY) {"name: "Dharani}
function names(req ,res){
    const {name} = req.body;
    if(!name){
        return res.json({
            error: "Please add the names"
        });
        
    } 

    nms.push(name)

    res.json({
        message: "Success",
        data: nms,
    });
}
app.get("/",hello);
app.get("/add",add);
app.get("/volume",volume);
app.post("/names",names);

app.listen(PORT);
*/

const express = require("express")

const app = express()

const port = 3000
app.use(express.json())
const names = []

app.post("/names",(req,res)=>{
  const {name} = req.body;
  if (!name){
    return res.json({
      error: "Please give data"
    })
  }
  names.push(name)
  res.json({
    message: "successful post"
  })
})

app.get("/names",(req,res)=>{
    res.status(200).json({
      message: "successful get",
      data: names
    })
})

app.get("/names/:id",(req,res)=>{
  const id = Number(req.params.id)

  if(id<0 || id>=names.length){
    return res.status(404).json({
        message: "error in finding data"
    })
  }

  res.status(200).json({
    message: "success",
    name: names[id]
  })
})

app.put("/names/:id",(req,res)=>{
  const id = Number(req.params.id)
  const {name} = req.body;

  if(id<0 || id>=names.length){
    return res.status(404).json({
        message: "error in finding data"
    })
  }
  names[id] = name
  res.status(200).json({
    message: "success",
    data: names,
    name: names[id]
  })

app.delete("/names/:id",(req,res)=>{
  const id = Number(req.params.id)

  if(id<0 || id>=names.length){
    return res.status(404).json({
        message: "error in finding data"
    })
  }

  names.splice(id,1)
  
  res.status(200).json({
    message: "success",
    data: names
  })

})
  
})




app.listen(port)
