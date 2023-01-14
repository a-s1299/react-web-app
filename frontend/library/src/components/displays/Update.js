import React from 'react'

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.id = React.createRef();
        this.title = React.createRef();
        this.author = React.createRef();
        this.pub = React.createRef();
        this.isbn = React.createRef();
        this.avail = React.createRef();
        this.who = React.createRef();
        this.due = React.createRef();
        this.newBook = {};
        ;
    }

    
    
    handleSubmit() {
        let updatedBook = {
            "id": this.id.current.value,
            "title": this.title.current.value,
            "author": this.author.current.value,
            "publisher": this.pub.current.value,
            "isbn": this.isbn.current.value,
            "avail": this.avail.current.checked.toString(),
            "who": this.who.current.value,
            "due": this.due.current.value
        };
        let fakeEventHack = {target : { value : 'update'}};
        this.props.doHandleActiveChange(fakeEventHack);
        this.props.doSetBody(updatedBook);
    }

    render() {
        let match;

        try {
            match = (this.props.data[0].id === this.props.id);
        } catch (e) {
            match = false;
        }

        if (match) {
            return(
                <div>
                    <p>Please adjust the data as you see fit:</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref={this.id} 
                            defaultValue={this.props.data[0].id} /><p />
                        <label id='dim'>ID</label><p />

                        <input type="text" ref={this.title} 
                            defaultValue={this.props.data[0].title} />
                        <label id='dim'>Title</label><p />

                        <input type="text" ref={this.author} 
                            defaultValue={this.props.data[0].author} />
                        <label id='dim'>Author</label><p />

                        <input type="text" ref={this.pub} 
                            defaultValue={this.props.data[0].publisher} />
                        <label id='dim'>Publisher</label><p />

                        <input type="text" ref={this.isbn} 
                            defaultValue={this.props.data[0].isbn} />
                        <label id='dim'>ISBN</label><p /><hr />

                        <label id='dim'>Available</label>
                        <input type="radio" ref={this.avail} name="avail" 
                            defaultChecked={this.props.data[0].avail === "true"} /><em>true</em>
                        <input type="radio" name="avail" 
                            defaultChecked={this.props.data[0].avail === "false"} /><em>false</em>
                        

                        <input type="text" ref={this.who} 
                            defaultValue={this.props.data[0].who} />
                        <label id='dim'>Who</label><p />

                        <input type="text" ref={this.due} 
                            defaultValue={this.props.data[0].due} />
                        <label id='dim'>Due</label><p />

                        <input id="button-action-alt" type="submit" value="SUBMIT" />

                    </form>
                </div>
                
            )
        }  else {
            return(
                <div>
                    <p><code><b>ERROR</b> There seems to be no book with this ID.</code></p>
                </div>
            )
        }
    }

    
    
}

export default Update