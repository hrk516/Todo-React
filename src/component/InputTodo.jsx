export const InputTodo = (props) =>{
    const { todoText, onChangeTodoText, onClickAdd} = props; // 分割代入
    return (
        <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
    )
}