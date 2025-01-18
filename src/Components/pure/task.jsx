import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
// importammos la hoja de estilo task,scss
import '../../Styles/task.scss'

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('create Tak')
        return () => {
            console.log(`Task: ${task.name} isgoin to unmount`);
        };
    }, [task]);


    return (
        <div>
            <h2 className="task-name">
            Nombre: {task.name}
            </h2>
            <h3>
            Descricion: {task.descrition}
            </h3>
            <h4>
            Level: {task.level}
            </h4>
            <h5>
            This task is: {task.completed ? 'COMPLETED':'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = { 
    task: PropTypes.instanceOf(Task)  // instance off es cuando no le especifico si es string o algo asi en este caso quiero que sea una tarea osea task
};


export default TaskComponent;
