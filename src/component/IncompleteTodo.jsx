const IncompleteTodoStyle = {
    border: "2px solid #aacfd0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}

export const IncompleteTodo = (props) => {
    const { incompleteTodos, onClickComplete, onClickDelete} = props;
    return (
        <div style={IncompleteTodoStyle}>
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index) => 
          (
              <li key={todo}> 
              {/** mapやfilterを使うときは初めの要素に一意となるkeyが必要 
               * 変更の差分を出力する為今どの要素か把握する必要がある*/}
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    )
}