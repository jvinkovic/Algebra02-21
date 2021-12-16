import React from 'react';

import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
    render() {
        const { taskovi, onCompleteToggle, onDelete } = this.props;
        return (<div>
                    {taskovi.map(t => <TaskItem key={t.id} 
                                                onCompleteToggle={onCompleteToggle} 
                                                onDeleteTask={onDelete}
                                                task={t} />)}
                </div>);
    }
}