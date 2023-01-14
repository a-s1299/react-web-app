const express = require('express');
const {MongoClient} = require('mongodb');

var app = express();
app.use(express.json());

let user; // defaulted value for example purposed
let pass; // defaulted value for example purposed
let cs = `mongodb+srv://${user}:${pass}@root.gyhbghv.mongodb.net`;
let db;
let books;


async function start() {
    const client = new MongoClient(cs)
    await client.connect();
    db = client.db("database");
    books = db.collection("books");
    console.log("Listening");
    app.listen(3001);
}


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/books', async (req, res) => {
    let curatedResults = [];

    if (req.query.avail == null) {
        curatedResults = await books.find().project({ _id:0, id:1, title:1 }).toArray();
        res.json(curatedResults);
    } else {
        let has = req.query.avail;
        curatedResults = await books.find({ avail : {$eq: has} }).project({ _id:0, id:1, title:1 }).toArray();
        res.json(curatedResults);
    }
});

app.get('/books/:id', async (req, res) => {
    let target = await books.find({ id:req.params.id }).project({ _id:0 }).toArray();

    if (!target.length) {
        res.status(404).statusMessage = "not found";
    }
    else {
        res.json(target);
    }
});

app.post('/books', async (req, res) => {
    let overlap = false;
    let inventory = await books.find().project({id:1}).toArray();

    for (let x in inventory) {
        if (req.body.id == inventory[x].id) {
            overlap = true;
        }
    }
    if (!overlap) {
            await books.insertOne({ id:req.body.id, title:req.body.title, author:req.body.author, 
                        publisher:req.body.publisher, isbn:req.body.isbn, avail:req.body.avail, 
                        who:req.body.who, due:req.body.due })
                .catch( e => {console.log(e)});
            res.status(201).statusMessage = "created";
        
    } else {
        res.status(403).statusMessage = "already exists";
    }
    res.send();
});

app.put('/books/:id', async (req, res) => {
    let target = await books.find({ id:req.params.id }).toArray();

    if (target.length) {
        let copy = JSON.parse(JSON.stringify(target[0]));

        for(let x in req.body) {
            switch (x) {
                case 'id':
                    copy.id = req.body[x];
                    break;
                case 'title':
                    copy.title = req.body[x];
                    break;
                case 'author':
                    copy.author = req.body[x];
                    break;
                case 'publisher':
                    copy.publisher = req.body[x];
                    break;
                case 'isbn':
                    copy.isbn = req.body[x];
                    break;
                case 'avail':
                    copy.avail = req.body[x];
                    break;
                case 'who':
                    copy.who = req.body[x];
                    break;
                case 'due':
                    copy.due = req.body[x];
                    break;
                default:
                    console.log(`PUT-ERROR: \'${x}\' attribute not found in id:${copy.id}`);
            }
        }

        await books.updateOne(
            { id:req.params.id },
            {
                $set: {
                    id: copy.id,
                    title: copy.title,
                    author: copy.author,
                    publisher: copy.publisher,
                    isbn: copy.isbn,
                    avail: copy.avail,
                    who: copy.who,
                    due: copy.due
                }
            }
        ).catch(e => {console.log(e)});
    } else {
        res.status(404).statusMessage = "not found";
    }
    res.send(); 
});

app.delete('/books/:id', async (req, res) => {
    let status = await books.deleteOne( {id:req.params.id} );

    if (status['deletedCount'] == 0) {
        res.status(204).statusMessage = "no content";
    }
    res.send();
});


start();