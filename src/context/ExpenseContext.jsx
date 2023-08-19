import { createContext, useState } from "react";

const ExpenseContext = createContext()

export const ExpenseProvider = ({children})=>{

    const [todos, setTodos]= useState([
    ]);

    //savetodo
    const savetodo = (text, amount)=>{
        const newtodo = {
            id: crypto.randomUUID(),
            text:text,
            amount:parseInt(amount),
        }
        setTodos([newtodo, ...todos]);
    };

    //deletetodo
    const deletetodo = (id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }

    //edit
    const [edit, setEdit] = useState({
        todo:{},
        isedit:false,
});

        //edit-todo
        const edittodo = (todo)=>{
            setEdit({
                todo:todo,
                isedit:true,
            });
        };

        //update todo

        const update = (id, newtext, newamount)=>{
            setTodos(todos.map((todo)=> todo.id===id ? {...todo, text:newtext, amount:newamount} : todo));
            setEdit({
                todo:{},
                isedit:false,
            });
        };

    return(
        <ExpenseContext.Provider value={{todos,edit, savetodo, deletetodo, edittodo, update}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext;