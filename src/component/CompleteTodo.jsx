const CompleteStyle = {
    border: "2px solid #aacfd0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#c9dede"
}

export const CompleteTodo = (props) => {
    const { completeTodos, onClickRemove } = props;
    return (
        <div style={CompleteStyle}>
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo,index) =>
           (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickRemove(index)}>戻す</button>
              </div>
            </li>
          )
        )}
        </ul>
      </div>
    )
}