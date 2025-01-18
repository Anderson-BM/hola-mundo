import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enunm';
import TaskComponent from '../pure/task';


const TaskList = () => {

    const desfaulTask = new Task('Programacion WEB', 'APP clon de Uber', false, LEVELS.URGENT);
// ESTADO DE EL COMPONENETE
    const [tasks, setTasks] = useState(desfaulTask);
    const [loandig, setLoandig] = useState(true);


// CONTROL DE EL CICLO DE VIDA DE EL COMPONENETE
useEffect(() => {
    console.log('Task State has been componente')
    setLoandig(false)
    return () => {
        console.log('TaskList componet is goin to unmount...')

    };
}, [tasks]);



    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div>
                <h1>Your Task:</h1> 
            </div>
            
            <TaskComponent task={desfaulTask} ></TaskComponent>
        </div>
    );
};


export default TaskList;
