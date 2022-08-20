import React from "react";
import Navigation from "./navigation.layout";

function MainLayout({children}) {
   return (
		<React.Fragment>
			<Navigation />
			{children}
		</React.Fragment>
	 ) 
}

export default MainLayout;