import { Priority } from "../views/TodoInputter/TodoInputter";
import { Todo } from "../pages/main/Main";

export class TodoManager {

  static instance: TodoManager = new TodoManager()

  createTodo(text: string, priority: Priority): Todo {
    ++this.todoId
    return {id: this.todoId, text: text, priority: priority}
  }

  /** プライベートプロパティ **/
  /**
   * 全てのTodoオブジェクトで一意のidを持たせるためこのプロパティで一元管理する
   */
  private todoId = 0
}