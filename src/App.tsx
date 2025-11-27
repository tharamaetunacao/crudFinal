// import { useState } from "react";
// import './App.css';




// interface Item {
//   id:number;
//   name:string;
//   category:string;
//   getLabel: () => string;
// }



// const createItem = (id:number,name:string,category:string): Item => {
//   return {
//     id,
//     name,
//     category,
//     getLabel: () => `${name} is a  ${category}`,
//   };
// };




// const items: Item[] = [
//   createItem (1,"Apple","Fruit"),
//   createItem (2,"Banana","Fruit"),
//   createItem (3,"Carrot","Vegetable"),
// ];




// function App(){
//   const [query,setQuery] = useState("");




//   const filtered = items.filter((item)=>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );




//   return (
//     <div style={{padding:"20px"}}>
//       <h3>Map & Filter with Interface Method</h3>




//       <p>
//         search:{" "}
//         <input type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={() => setQuery("")}>Clear</button>
//       </p>




//       {filtered.map((item) => (
//         <p key={item.id}>{item.getLabel()} </p>
//       ))}
//     </div>
//   );
// }
// export default App;












// let name: boolean = true;




  // if (name) {
  //   console.log ("Caril")
  // } else {
  //   console.log ("Dahab");
  // }




  // const id: symbol = Symbol("unique id");
  // const symbol1: symbol = Symbol("lourd");
  // const symbol2: symbol = Symbol("lourd");
  // if(symbol1 === symbol2){
  //   let result = "Yes"
  // }




  // let result: null = null;
  // let value: undefined = undefined;
  // let bigValue: bigint = BigInt(21535454543321312312312321321);
  // let numbers: number[] = [1, 2, 3, 4];
  // let age: (number | string)[] = ["one", 2 , 3, "Four"]
  // let ahai: string | number | boolean | null = 32;
  // let person : {
  //   id: number,
  //   name: String
  //   address:{
  //     city: string,
  //     street: string
  //   }
  // } = {id: 12, name: "Sky",
  //     address: {city: "Panglao", street: "Pamaong"}
  //   };




  //   function addNumbers(number1: number, number2: number):number {
  //     return number1 + number2;
  //   }
    // console.log(addNumbers(6, 4))
    // const ace = addNumbers;




    // function greet(name: string, greeting?:string): void{
    //   if(greeting) {
    //     console.log (`${greeting}, ${name}`);
    //   } else {
    //     console.log (`Hello, ${name}`);
    //   }
    // }
    // greet("Sky")
    // greet("Sky", "Good morning")




    // type Status = "inlove" | "hearbroken";
    // let iAmInLove: Status = "inlove"
    // let iAmHeartBroken: Status = "heartbroken";
    // console.log(iAmInLove, iAmHeartBroken)








    // type Person = {
    //   name: String,
    //   age: number,
    // }
    // let data: Person = {
    //   name: "Sky", age: 90
    // };
















   
// ================================================================================================
    // const [inputValue, setInputValue] = useState<String>("");
    // const [result, setResult] = useState<DisplayResult | null>(null);




    // type IdentifierResult = "Senior" | "Minor" | "Adult";
    // type DisplayResult = {
    //   age: number;
    //   description: IdentifierResult;
    // }




    // function IdentifyAge(age: number): DisplayResult{
    //   let description: IdentifierResult =
    //     age >= 60 ? "Senior" :
    //     age <=17 ? "Minor" : "Adult"
    //   return {age, description};
    // }




    // const handleClick = () => {
    //   const age = Number(inputValue);
    //   if(isNaN(age) || age <= 0){
    //     alert("Age is invalid");
    //     return;
    //   }
    //   setResult(IdentifyAge(age));
    // }
// ================================================================================
    // type IdentifierResult = "Fail" | "Needs Improvement" | "Satisfactory" | "Excellent";
    // type DisplayResult = {
    //   grade: number;
    //   description: IdentifierResult;
    // }




    // function IdentifyGrade(grade: number): DisplayResult {
    //   let description: IdentifierResult =
    //     grade <= 75 ? "Fail" :
    //     grade <= 85 ? "Needs Improvement" :
    //     grade <= 95 ? "Satisfactory" : "Excellent";
    //   return {grade, description};
    // }




    // const handleClick = () => {
    //   const grade = Number(inputValue);
    //   if(isNaN(grade) || grade <= 0 || grade >= 100){
    //     alert("Grade is invalid");
    //     return;
    //   }
    //   setResult(IdentifyGrade(grade));
    // }




// =========================PRELIM===================================================================
    // const [height, setHeight] = useState<string>("");
    // const [weight, setWeight] = useState<string>("");
    // const [result, setResult] = useState<DisplayResult | null>(null);




    // type IdentifierResult = "Underweight" | "Normal" | "Overweight" | "Obese";
    // type DisplayResult = {
    //   bmi: number;
    //   description: IdentifierResult;
    //   color: string;
    //   tip: string;
    // };




    // function IdentifyBMI(bmi: number): DisplayResult {
    //   if (bmi <= 18.5) {
    //     return {
    //       bmi,
    //       description: "Underweight",
    //       color: "red",
    //       tip: "Focus on nutrient-dense food"
         
    //     };
    //   } else if (bmi <= 25) {
    //     return {
    //       bmi,
    //       description: "Normal",
    //       color: "green",
    //       tip: "Maintaned balance eating"
    //     };
    //   } else if (bmi <= 30) {
    //     return {
    //       bmi,
    //       description: "Overweight",
    //       color: "orange",
    //       tip: "Aim for gradual lifestyle changes"
    //     };
    //   } else {
    //     return {
    //       bmi,
    //       description: "Obese",
    //       color: "yellow",
    //       tip: "Work closely with healthcare provider"
    //     };
    //   }
    // }




    // const handleClick = () => {
    //   const h = Number(height) / 100;
    //   const w = Number(weight);




    //   if (!h || !w || h <= 0 || w <= 0) {
    //     alert("Please enter valid height and weight!");
    //     return;
    //   }




    //   const bmi = w / (h * h);
    //   setResult(IdentifyBMI(bmi));
    // };
















    // type IdentifierResult = "Underweight" | "Normal" | "Overweight" | "Obese";
    // type DisplayResult = {
    //   bmi: number;
    //   description: IdentifierResult;
    //   color: string;
    //   tip: string;
    // };




    // function IdentifyBMI(bmi: number): DisplayResult {
    //   let description: IdentifierResult =
    //     bmi < 18.5 ? "Underweight" :
    //     bmi < 25 ? "Normal" :
    //     bmi < 30 ? "Overweight" : "Obese";




    //   let color =
    //     description === "Underweight" ? "red" :
    //     description === "Normal" ? "green" :
    //     description === "Overweight" ? "orange" : "yellow";




    //   let tip =
    //     description === "Underweight" ? "Focus on nutrient-dense food" :
    //     description === "Normal" ? "Maintain balanced eating" :
    //     description === "Overweight" ? "Aim for gradual lifestyle changes" :
    //     "Work closely with a healthcare provider";




    //   return { bmi, description, color, tip };
    // }




    // const handleClick = () => {
    //   const h = Number(height);
    //   const w = Number(weight);




    //   if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
    //     alert("Please enter valid height and weight!");
    //     return;
    //   }




    //   const bmi = w / (h * h);
    //   setResult(IdentifyBMI(bmi));
    // };




// ===============================================================================================
 
  // interface Book{
  //   title: string;
  //   author: string;
  //   year: number;
  //   readonly x : number,
  //   readonly y : number
  // }




  // const book: Book = {
  //   title: "Harry Potter",
  //   author: "J.K. Rowling",
  //   year: 2002,
  //   x: 5,
  //   y: 20




  // }




  // interface MathOperation {
  //   (x: number, y: number): number;
  // }




  // const add: MathOperation = (x, y) => x + y;
  // const subtract: MathOperation = (x, y) => x - y;
  // const multiply: MathOperation = (x, y) => x * y;
  // const divide: MathOperation = (x, y) => x / y;




  // interface School {
  //   name: string;
  // }




  // interface csd extends School {
  //   name: "Cristal e-College"
  //   student: "Sky"
  // }




  // interface Books <hey> {
  //   values: hey
  // }




  // const heybook : Books <string> = {
  //   values: "Fantastic Beasts"
  // }




  // const heybook2: Books <number> = {
  //   values: 12345
  // }




  // // type assertion
  // let myVariable: unknown = 100;
  // let fiveHundred: number = (myVariable as number) * 5;
 
  // // const assertion
  // let carilGF = ["Joanna", "Mikha", "Colet"];
  // carilGF.push("Salome");




  // // named parameters
  // function divide ({dividend, divisor}: {dividend: number; divisor: number}): number {
  //   return dividend / divisor;
  // }




  // function add2 (a: number, b: number, ...rest: number[]){
  //   return a +b + rest.reduce((p,c) => p + c, 0);
  // }




// ==================ACTIVITY==================================
  //   type Role = "admin" | "guest" | "";
  //   interface User {
  //     name: string;
  //     role: Role;
  //   }




  //   interface OperationResult {
  //     value: number;
  //     description: string;
  //   }




  //   interface MathOperation {
  //     (x: number, y: number): number;
  //   }




  // const add: MathOperation = (x, y) => x + y;
  // const sub: MathOperation = (x, y) => x - y;
  // const multi: MathOperation = (x, y) => x * y;
  // const divs: MathOperation = (x, y) => (y !== 0 ? x / y : NaN);




  // const [user, setUser] = useState<User>({ name: "", role: "" });
  // const [loginName, setLoginName] = useState("");
  // const [loginRole, setLoginRole] = useState<Role>("");
  // const [num1, setNum1] = useState<string>("");
  // const [num2, setNum2] = useState<string>("");
  // const [result, setResult] = useState<OperationResult | null>(null);




  // const handleLogin = () => {
  //   if (!/^[A-Za-z\s]+$/.test(loginName)) {
  //     alert("Name must only contain string or letters");
  //     return;
  //   }
  //   setUser({ name: loginName.trim(), role: loginRole as Role });
  // };




  // const calculate = (operation: MathOperation, label: string) => {
  //   const value = operation(Number(num1) as number, Number(num2) as number);
  //   setResult({ value, description: label });
  // };




 
//   return (
//     <>
//     {/* {result} {value}  */}
//       {/* {bigValue}  */}
//       {/* {numbers} {age}
//       {ahai} */}
//       {/* My id is {person.id} and my name is {person.name}  */}
//       {/* {person.address.city} {person.address.street} */}
//       {/* {addNumbers(8, 12)} */}
//       {/* {ace(2, 12)} */}
//       {/* {data.name}, {data.age} */}




//       {/* <h1>Age Identifier</h1>
//       <input type="number" onChange={(e) => setInputValue(e.target.value)}
//       placeholder="Enter age"/>
//       <button onClick={handleClick}>Check Age</button>
//       {result && (<p>
//         Age: {result.age} <br />
//         Description: {result.description}
//       </p>)} */}
//       {/* {result?.age} {result?.description} */}
//       {/* {result && <p>{result.age} {result.description}</p>} */}








//       {/* <h1>Grade Identifier</h1>
//       <input type="number" onChange={(e) => setInputValue(e.target.value)}
//       placeholder="Enter grade"/>








//       <button onClick={handleClick}>Check Grade</button> */}








//       {/* {result && (<p style={{color: result.grade <= 75 ? "red" :
//         result.grade <= 85 ? "blue" :
//         result.grade <= 95 ? "green" : "yellow"}}>
//         Grade: {result.grade} <br />
//         Description: {result.description}
//       </p>)} */}
//       {/* {result && (<p>
//         Grade: {result.grade} <br />
//         Description
//         <p style={{color:
//           result.grade <= 75 ? "red" :
//           result.grade <= 85 ? "blue" :
//           result.grade <= 95 ? "green" : "yellow"}}>
//           {result.description}
//           </p>
//       </p>)} */}




//       {/* <h1>BMI Calculator</h1>
//       <input
//         type="number"
//         placeholder="Enter height"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//       /> <br />
//       <input
//         type="number"
//         placeholder="Enter weight"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       /> <br />
//       <button onClick={handleClick}>Calculate BMI</button>
//       {result && (
//         <><p>
//           BMI:
//           <span style={{ color: result.color }}>
//             {result.bmi.toFixed(1)} ({result.description})
//           </span>
//          </p>
//           <p>
//             Tips:
//             <span style={{ color: result.color }}>
//               {result.tip}
//             </span>
//           </p>
//           </>
//       )} */}








//        {/* <h1>BMI Calculator</h1>
//        <input
//         type="number"
//         placeholder="Enter weight"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       /> <br/>
//       <input
//         type="number"
//         placeholder="Enter height"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//       /> <br/>
//       <button onClick={handleClick}>Calculate BMI</button>
//       {result && (
//           <>
//           <br />
//           <br />
//             <p>
//             BMI: {""}
//             <span style={{ color: result.color }}>
//               {result.bmi} ({result.description})
//             </span></p>
           
//             <p>
//             Tips: {""}
//             <span style={{ color: result.color }}>
//               {result.tip}
//             </span></p>
//           </>
//       )} */}








//       {/* <h1>Hello World</h1> */}
//       {/* <h1>{book.x}{book.y}</h1> */}
//       {/* {add(5, 3)} <br />
//       {subtract(9, 2)} <br /> */}
   
//     {/* {heybook.values} <br />
//     {heybook2.values} */}
   
//       {/* {fiveHundred} */}
   
//       {/* {add2(2, 5 , 2 ,1 ,3,2, 4 ,4,2, )} <br /> */}




// {/* ==========================ACTIVIY======================== */}
//       {/* {user.role === "" ? (
//         <>
//           <h1>Calculator Login</h1>
//           <input
//             type="text"
//             value={loginName}
//             onChange={(e) => setLoginName(e.target.value as string)}
//             placeholder="Enter name to login"
//             style={{ marginBottom: "10px" }}
//           />
//           <br />
//           <select
//             value={loginRole}
//             onChange={(e) => setLoginRole(e.target.value as Role)}
//             style={{ marginBottom: "10px" }}
//           >
//             <option value="">Select role</option>
//             <option value="guest">Guest</option>
//             <option value="admin">Admin</option>
//           </select>
//           <br />
//           <button onClick={handleLogin}>Login</button>
//         </>
//       ) : user.role === "guest" ? (
//         <>
//           <h2>Hello {user.name} (guest), you can’t use calculator</h2>
//           <button onClick={() => setUser({ name: "", role: "" })}>Logout</button>
//         </>
//       ) : user.role === "admin" ? (
//         <>
//           <h3>Welcome {user.name} (admin)</h3>
//           <input
//             type="number"
//             value={num1}                                                                                                                                                                                                                                                                                                                                                                                                                                      
//             placeholder="Enter first number"
//             onChange={(e) =>
//               setNum1((e.target as HTMLInputElement).value as string)
//             }
//           />
//           <input
//             type="number"
//             value={num2}
//             placeholder="Enter second number"
//             onChange={(e) =>
//               setNum2((e.target as HTMLInputElement).value as string)
//             }
//           />
//           <br />
//           <button onClick={() => calculate(add, "Addition")}>Addition</button>
//           <button onClick={() => calculate(sub, "Subtraction")}>Subtraction</button>
//           <button onClick={() => calculate(multi, "Multiplication")}>
//             Multiplication
//           </button>
//           <button onClick={() => calculate(divs, "Division")}>Division</button>




//           {result && (
//             <p>
//               {result.description}: {result.value}
//             </p>
//           )}




//           <br />
//           <button
//             onClick={() => {
//               setResult(null);
//               setNum1("");
//               setNum2("");
//             }}
//           >Clear
//           </button>
//           <button onClick={() => setUser({ name: "", role: "" })}>Logout</button>
//         </>
//       ) : (
//         <h2>Please login to use the calculator</h2>
//       )} */}
//     </>




// ========================MIDTERM EXAM================================
// interface Item {
//   id:number;
//   name:string;
//   description:string;
//   getLabel: () => string;
// }




// const createItem = (id:number,name:string,description:string): Item => {
//   return {
//     id,
//     name,
//     description,
//     getLabel: () => `${name} a  ${description}`,
//   };
// };




// const items: Item[] = [
//   createItem (1,"Apple","red fruit"),
//   createItem (2,"Banana","yellow fruit"),
//   createItem (3,"Carrot","orange vegetable"),
// ];




// function App(){
//   const [query,setQuery] = useState("");
//   const [descrip, setDescrip] = useState("");


//   const filtered = items.filter((item)=>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );




//   return (
//     <div style={{padding:"20px"}}>
//       <h3>Midterm Exam | Search and Update item using array</h3>
//       <p>
//         search:{" "}
//         <input type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={() => setQuery("")}>Clear</button>
//       </p>




//       {filtered.map((item) => (
//         <p key={item.id}>{item.getLabel()}
//           <br />
//           <input type="text"
//           value={descrip}
//           onChange={(e) => setDescrip(e.target.value)}
//           placeholder="New description"
//           />
//           <button onClick={() => setDescrip(item.id)}>Update</button>
       
//         </p>
//       ))}
//     </div>
//   );
// }
// export default App;


// interface Item {
//   id:number;
//   name:string;
//   description:string;
//   getLabel: () => string;
// }

// const createItem = (id:number,name:string,description:string): Item => {
//   return {
//     id,
//     name,
//     description,
//     getLabel: () => `${name} a  ${description}`,
//   };
// };


// function App(){
//   const [items, setItems] = useState<Item[]>([
//     createItem(1, "Apple", "red fruit"),
//     createItem(2, "Banana", "yellow fruit"),
//     createItem(3, "Carrot", "orange vegetable"),
//   ]);

//   const [query,setQuery] = useState("");
//   const [descrip, setDescrip] = useState<{ [key: number]: string }>({});
//   const filtered = items.filter((item)=>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );
 
//   const handleUpdate = (id: number) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? createItem(item.id, item.name, descrip[id] || item.description)
//           : item
//       )
//     );
//     setDescrip((prev) => ({ ...prev, [id]: "" }));
//   };

//   return (
//     <div style={{padding:"20px"}}>
//       <h3>Midterm Exam | Search and Update item using array</h3>
//       <p>
//         search:{" "}
//         <input type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         />
//         <button onClick={() => setQuery("")}>Clear</button>
//       </p>

//       {filtered.map((item) => (
//         <div key={item.id}>
//             <div style={{ fontWeight: "bold", fontSize: "20" }}>
//               {item.name}
//             </div>
//             {item.description}
//             <br/>
//           <input
//             type="text"
//             value={descrip[item.id] || ""}
//             onChange={(e) =>
//               setDescrip((prev) => ({ ...prev, [item.id]: e.target.value }))
//             }
//             placeholder="New description"
//           />
//           <button onClick={() => handleUpdate(item.id)}>Update</button>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;


// ===========================================================================================================


import { useState, useEffect, FormEvent } from "react";
import "./App.css";

const API_URL = "https://crud-final-nu.vercel.app/api/items";

interface Item {
  id: number;
  name: string;
  quantity: number;
  description: string | null;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: Item[] = await response.json();
      console.log("Fetched items:", data);
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setQuantity(1);
    setDescription("");
    setEditingItem(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const itemData = { name, quantity, description: description.trim() || null };

    try {
      let response;
      if (editingItem) {
        response = await fetch(`${API_URL}/${editingItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(itemData),
        });
      } else {
        response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(itemData),
        });
      }

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const savedItem: Item = await response.json();

      if (editingItem) {
        setItems(items.map((item) => (item.id === savedItem.id ? savedItem : item)));
      } else {
        setItems([...items, savedItem]);
      }

      resetForm();
    } catch (error) {
      console.error("Failed to save item:", error);
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setName(item.name);
    setQuantity(item.quantity);
    setDescription(item.description || "");
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return (
    <div className="App">
      <h1>Inventory Management</h1>

      <form onSubmit={handleSubmit} className="item-form">
        <h3>{editingItem ? "Edit Item" : "Add New Item"}</h3>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min={0}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{editingItem ? "Update Item" : "Add Item"}</button>
        {editingItem && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div className="item-list">
        <h2>Inventory Items</h2>
        {loading ? (
          <p>Loading items...</p>
        ) : items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description || "N/A"}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
