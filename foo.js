class ItemLister extends React.Component {
	constructor() {
  	super()
 		 this.state={info:{}}
  }
  componentDidMount() {
  	fetch('https://ceos.blockmaker.io/v1/chain/get_info')
 		.then(result=>result.json())
    .then(result=>this.setState({info: result}))
  }
  render() {
  	var foo = Object.entries(this.state.info)
    return(
    	<ul>
          
          {foo.length ?
            foo.map(item=><li key={item[0]}>{item[0]}: {item[1]}</li>)
            : <li>Loading...</li>
          }
      </ul>
   )
  }
}

ReactDOM.render(
  <ItemLister />,
  document.getElementById('container')
);
