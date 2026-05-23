export const IncompleteTodo = (props) => {
    const { incompleteTodos, onClickComplete, onClickDelete} = props;
    return (
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