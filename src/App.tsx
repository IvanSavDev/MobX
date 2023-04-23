import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Checkbox, Col, Divider, List, Row } from 'antd';
import Input from 'antd/es/input/Input';
import { DeleteOutlined } from '@ant-design/icons';

import { todo } from './store/todo';

const App: React.FC<{ todo: typeof todo }> = observer(({ todo }) => {
  const [todoName, setTodoName] = useState('');

  return (
    <>
      <Row gutter={8}>
        <Col>
          <Input
            placeholder="Enter your todo"
            value={todoName}
            onChange={({ target }) => setTodoName(target.value)}
          />
        </Col>
        <Col>
          <Button
            onClick={() => {
              todo.addTodo(todoName);
              setTodoName('');
            }}
          >
            add
          </Button>
        </Col>
      </Row>
      <Divider orientation="left">Uncompleted todo:</Divider>
      <List
        bordered
        dataSource={todo.uncompletedTodo}
        renderItem={({ id, name, completed }) => (
          <List.Item>
            <Checkbox
              checked={completed}
              onChange={() => todo.completeTodo(id, true)}
            >
              {name}
            </Checkbox>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => todo.removeTodo(id)}
            />
          </List.Item>
        )}
      />
      <Divider orientation="left">Completed todo:</Divider>
      <List
        bordered
        dataSource={todo.completedTodo}
        renderItem={({ id, name, completed }) => (
          <List.Item>
            <Checkbox
              checked={completed}
              onChange={() => todo.completeTodo(id, false)}
            >
              {name}
            </Checkbox>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => todo.removeTodo(id)}
            />
          </List.Item>
        )}
      />
    </>
  );
});

export default App;
