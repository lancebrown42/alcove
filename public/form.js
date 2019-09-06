import React from "react";
const Form = () => {

	
		return(
			<form>
              		<input type="text" name="name" placeholder="Drink Type" />
              		<input type="value" name="abv" placeholder="ABV"/>
              		<input type="value" name="vol" placeholder="Volume in oz"/>
              		<input type="value" name="cost" placeholder="Price"/>
              		<input type="button" value = "Add another option" />
              		<input type="submit" name="submit"/>
      		</form>
      		
          	

			)
	
}

export default Form;