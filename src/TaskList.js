import React from 'react';
import PropTypes from 'prop-types';

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

TaskList.propTypes = {
    taskovi: PropTypes.array.isRequired,
    onCompleteToggle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}