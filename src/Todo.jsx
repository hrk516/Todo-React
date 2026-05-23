import { useState } from 'react';
import { InputTodo } from "./component/InputTodo";
import { IncompleteTodo } from "./component/IncompleteTodo";
import { CompleteTodo } from "./component/CompleteTodo";

export function Todo() {
{/** useState ------------------------------------------------------------- */}
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

{/** 関数 ------------------------------------------------------------------ */}
  /** これがないとtextBoxに入力できない useState("")空を初期値にしてるから */
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  /** Todo追加関数 */
  const onClickAdd = () => {
    if (todoText === "") return; // textが未入力の場合何もしない
    const newTodos = [...incompleteTodos, todoText]; // ...スプレット構文(配列のコピー(newしてる))
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  /** 削除関数 対象のTODOを削除するためにmapの第二引数index(順位が入る)を引数に取る */
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]; // 配列のnew
    newTodos.splice(index, 1); // splice(対象番目を, 何個)削除する
    setIncompleteTodos(newTodos); // setIncompleteTodosを更新する
  }

  /** 完了関数 */
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); // 未完了TODOから削除

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; // 対象の未完了を完了へ追加
    setIncompleteTodos(newIncompleteTodos); // 更新する
    setCompleteTodos(newCompleteTodos);
  }

  /** 戻す関数 */
  const onClickRemove = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); // 完了TODOから削除

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]; // 対象の完了を未完了へ追加
    setIncompleteTodos(newIncompleteTodos); // 更新する
    setCompleteTodos(newCompleteTodos);
  }


{/** return --------------------------------------------------------------- */}
  return (
    <>
      <InputTodo 
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />

      <IncompleteTodo 
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo
        completeTodos={completeTodos}
        onClickRemove={onClickRemove}
      />
    </>
  );
}
