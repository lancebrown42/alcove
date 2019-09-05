import React from "react";
class Form extends React.Component {

	render(){
		return(
			<form>
              		<input type="text" name="name" placeholder="Drink Type" />
              		<input type="value" name="abv" placeholder="ABV">
              		<input type="value" name="vol" placeholder="Volume in oz">
              		<input type="value" name="cost" placeholder="Price">
              
          	</form>

			)
	}
}