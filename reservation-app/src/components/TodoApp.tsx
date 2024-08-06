// import文省略

// supabaseFunctionsの呼び出し
import {
    fetchTodoList,
    addTodoItem,
    deleteTodoItem,
    checkTodoItem,
  } from '../../utils/supabaseFunctions';
  
  // JSONサーバーの記述を削除
  // const API_URL = 'http://localhost:3000/todo/';
  
  interface Todo {
    id: number;
    title: string;
    status: boolean;
  }
  
  const TodoApp = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
  
    useEffect(() => {
      fetchTodo();
    }, []);
  
    // const fetchTodo = () => {
    //   fetch(API_URL)
    //     .then((responseData) => {
    //       return responseData.json();
    //     })
    //     .then((result) => {
    //       setTodoList(result);
    //     });
    // };
  
    // SupabaseによるfetchTodo関数を定義
    const fetchTodo = async () => {
      const todoList = (await fetchTodoList()) as Todo[];
      setTodoList(todoList);
    };
  
    // const addTodo = (inputTitle: string) => {
    //   const addData = {
    //     title: inputTitle,
    //     status: false,
    //   };
    //   fetch(API_URL, {
    //     body: JSON.stringify(addData),
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then(fetchTodo);
    // };
  
    // SupabaseによるaddTodo関数を定義
    const addTodo = async (inputTitle: string) => {
      if (!inputTitle) return;
  
      await addTodoItem(inputTitle);
      fetchTodo();
    };
  
    // const deleteTodo = (id: number) => {
    //   const targetUrl = API_URL + id;
    //   fetch(targetUrl, {
    //     method: 'DELETE',
    //   }).then(fetchTodo);
    // };
  
    // SupabaseによるdeleteTodo関数を定義
    const deleteTodo = async (id: number) => {
      await deleteTodoItem(id);
      fetchTodo();
    };
  
    // const checkTodo = (id: number, title: string, status: boolean) => {
    //   const targetUrl = API_URL + id;
    //   const editData = {
    //     id: id,
    //     title: title,
    //     status: !status,
    //   };
    //   fetch(targetUrl, {
    //     body: JSON.stringify(editData),
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then(fetchTodo);
    // };
  
    // SupabaseによるcheckTodo関数を定義
    const checkTodo = async (id: number, status: boolean) => {
      await checkTodoItem(id, status);
      fetchTodo();
    };
  
    return (
      // 記述省略
    );
  };
  
  export default TodoApp;