import React, {Component} from 'react';

class Counter extends Component {
    
    // state = {
    //     value: this.props.counter.value,
    //     // count: 0,
	// 	tags: ['Apple', 'Banana', 'Jack Fruits']
	// 	//imageUrl: 'https://picsum.photos/200'
	// };

	// constructor(){
	// 	super()
	// 	// it will give us refenence of the current Object
	// 	// and binding "bind(this)" it to handleIncrement function
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// 	console.log("Constructor", this);
	// }

	// styles = {
	// 	fontSize: 10,
	// 	fontWeight: "bold"
	// }

	render() {

		// React.createElement('div')
		// React.createElement('React.Fragment')				
		// you can give any javascript expression between the curly braces
		// <img src={this.state.imageUrl} alt=""/>
		// key={tag} .... key must be unique
        // In real life "tag" might be object . so there's may be "tag.id" like that
		// {this.state.tags.length === 0 && 'Please create a new Tag!'}
        // referancing peremeter in onClick method like productId.. we will need it 
        // as dynamically
        // onClick={ () => this.handleIncrement({id : 1}) }

        // console.log('props', this.props.id);

		return (
			<React.Fragment>
                {/* {this.props.children} */ /* we uses "children" property when we needed something like dialog box ...*/}
				<span styles={{fontSize: 10}} className={this.getBadgeClasses()}> {this.formatCount()} </span>
				<button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                {/* {this.randerTags()} */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <br/>
			</React.Fragment>
		);
	}

    // // This is the alternative way of getting the referance of current object instead of using Constructor
    // // for creating referance...
	// handleIncrement = product =>{
    //     console.log(product);
    //     // This will increment of the count variable and set the value of count
    //     this.setState({ value: this.state.value + 1 });
    //     //console.log("Increment Clicked!", this);
        
    // };
    
    // doHandleIncrement = () =>{
    //     this.handleIncrement = ({productId : 1});
    // };

	// randerTags(){

	// 	if(this.state.tags.length === 0) return <p> There is no Tag!</p>;
	// 	return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;
	// };

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	};

	formatCount() {
		const {value} = this.props.counter;
		//return this.state.count  === 0 ? "Zero" : this.state.count;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
