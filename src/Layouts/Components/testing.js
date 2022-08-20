import React from "react";

const Testing = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </React.Fragment>
  )
}

export default Testing;

// const Testing = (props) => {
//   const { title, description} = props
//   return (
//     <React.Fragment>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </React.Fragment>
//   )
// }

// const Testing = (props) => {
//   console.log(props.title);
//   console.log(props.description)
//   return (
//     <React.Fragment>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//     </React.Fragment>
//   )
// }

