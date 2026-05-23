import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';

export function Todo() {
{/** useState ------------------------------------------------------------- */}
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO1","TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO-1","TODO-2"]);

{/** 関数 ------------------------------------------------------------------ */}
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; // ...スプレット構文(配列のコピー(newしてる))
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  /** 対象のTODOを削除するためにmapの第二引数index(順位が入る)を引数に取る */
  const onClickDelete = (index) => {
    alert(index);
  }

{/** return --------------------------------------------------------------- */}
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index) => 
          (
              <li key={todo}> 
              {/** mapやfilterを使うときは初めの要素に一意となるkeyが必要 
               * 変更の差分を出力する為今どの要素か把握する必要がある*/}
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) =>
           (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          )
        )}
        </ul>
      </div>
    </>
  );
}
