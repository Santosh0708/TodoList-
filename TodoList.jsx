import { useState } from "react"

export default function TodoList(){
    const [Activity,setActivity] = useState();
    const [Listdata,setlistData]=useState([]);

    function input(e){
        setActivity(e.target.value);
        console.log(Activity);
    }


    function AddActivity(){
        setlistData(()=>{
            let updatedList=[...Listdata, Activity]
            
             setActivity('')
            return updatedList
        }

        )}

        function RemoveActivity(i){
            const updatedList = Listdata.filter((elem,id)=>{
              return i!=id;
            })
            setlistData(updatedList);
      
        }
    return(

        <div className="container">
            
            <div className="Activity">
            <h1>Todo List Apk</h1>
            <input type="text" placeholder="Enter Task" onChange={input}/>
               
               <button onClick={AddActivity}>Add</button>
              <p>List Activity</p>
             {
                Listdata !=[] && Listdata.map((data, i)=>{
                    return(
                    <div className="dataShow">
                      <h2>{data}</h2>
                     <button className="btn" onClick={()=>RemoveActivity(i)} >Remove</button>
                     </div>
                )
                })
             }
           
                
              </div>
                  
        </div>


    ) 
}
