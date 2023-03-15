import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoItem } from './TodoItem';
import { TodoListCreator } from './TodoListCreator';
import { TodoListFilters } from './TodoListFilter';
import { TodoListState } from './TodoListState';
import { filteredTodoListState } from './TodoStore';

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <div>
            <TodoListState/>
            <TodoListFilters/>
            <TodoListCreator/>
            {todoList.map((item)=>(
                <TodoItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default TodoList;