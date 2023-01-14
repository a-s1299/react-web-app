import React from 'react'

class AddNew extends React.Component {
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
        let newBook = {
            "id": this.id.current.value,
            "title": this.title.current.value,
            "author": this.author.current.value,
            "publisher": this.pub.current.value,
            "isbn": this.isbn.current.value,
            "avail": this.avail.current.checked.toString(),
            "who": this.who.current.value,
            "due": this.due.current.value
        };
        let fakeEventHack = {target : { value : 'addnew'}};
        this.props.doHandleActiveChange(fakeEventHack);
        this.props.doSetBody(newBook);
    }

    render() {
        let match;

        try {
            match = (this.props.data[0].id === this.props.id);
        } catch (e) {
            match = false;
        }

        if (!match) {
            return(
                <div>
                    <p>Please fill out this form for new entry:</p><p />
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref={this.id} defaultValue={this.props.id} disabled/><p />
                        <label id='dim'>ID</label><p />
                        
                        <input type="text" ref={this.title} />
                        <label id='dim'>Title</label><p />

                        <input type="text" ref={this.author} />
                        <label id='dim'>Author</label><p />

                        <input type="text" ref={this.pub} />
                        <label id='dim'>Publisher</label><p />

                        <input type="text" ref={this.isbn} />
                        <label id='dim'>ISBN</label><p /><hr color="to-primary"/>

                        <label id='dim'>Available</label>
                        <input type="radio" ref={this.avail} name="avail" defaultChecked />true
                        <input type="radio" name="avail" />false<p />
                        

                        <input type="text" ref={this.who} />
                        <label id='dim'>Who</label><p />

                        <input type="text" ref={this.due} />
                        <label id='dim'>Due</label><p />
                        
                        <input id="button-action-alt" type="submit" value="SUBMIT" />

                    </form>
                </div>
                
            )
        }  else {
            return(
                <div>
                    <p><code><b>ERROR</b> This ID seems to be taken already. Please choose another.</code></p>
                </div>
            )
        }
    }

    
    
}

export default AddNew