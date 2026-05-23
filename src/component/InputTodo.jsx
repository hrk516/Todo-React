// CSSもcomponet化　基本的にcomponetに対するCSSは一緒に管理する　どこにも影響しないように
const InputStyle = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}

export const InputTodo = (props) =>{
    const { todoText, onChangeTodoText, onClickAdd, disabled} = props; // 分割代入
    return (
        <div style={InputStyle}>
        <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button disabled={disabled} onClick={onClickAdd}>追加</button>
      </div>
    )
}