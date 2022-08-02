import { useContext } from "react";
import { Counter } from "./components/Counter";
import { InputValueContext } from "./context/InputValueContext";

export default function App() {
  const { state, dispatch } = useContext(InputValueContext);

  return (
    <>
      {/* <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET VALUE TO 100
      </button> */}
      <Counter />
    </>
  );
}









// import { useState } from "react";
// import { AppProps, User } from "./interfaces";


// const defaultFormData = {
//   title: "",
//   body: "",
// };


// function App({heading, optionalProp, defaultProp = 'default text'}: AppProps) {
//   const [count, setCount] = useState(0); // type inference
//   const [user, setUser] = useState<User | null>(null) //type annotation

//   const [formData, setFormData] = useState(defaultFormData);
//   const { title, body } = formData;


//   // const fetchUser = () => setUser({
//   //   name: 'Mitch',
//   //   age: 38,
//   //   addr: {
//   //     city: 'City A',
//   //     street: '29 st.',
//   //     number: 345,
//   //     zip: '243643'
//   //   },
//   //   isAdmin: false
//   // })


 
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);

//     setFormData(defaultFormData);
//   };

//   return(
//     <>
//     {/* <h2>{heading}</h2>
//     {optionalProp && <p>{optionalProp}</p>}
//     {defaultProp && <p>{defaultProp}</p>}
//     {user && <p>{`Hello ${user.name}`}</p>}
//     <button onClick={fetchUser}>Fetch User</button> */}

//       <h1>Form</h1>
//       <p>Create a post</p>

//       <form onSubmit={onSubmit}>
//         <label htmlFor="title">Title</label>
//         <br />
//         <input type="text" id="title" value={title} onChange={onChange} />
//         <br />
//         <br />
//         <label htmlFor="body">Body</label>
//         <br />
//         <input type="text" id="body" value={body} onChange={onChange} />
//         <br />
//         <br />
//         <button type="submit">Upload post</button>
//       </form>
//     </>
//   )
// }

// export default App;
