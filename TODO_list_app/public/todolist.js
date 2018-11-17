$(function() {
  let newtodo = $("#newtodo");
  let submit = $("#submit");
  let todolist = $("#todolist");

  submit.click(function() {
    let value = newtodo.val();

    $.post("/todos/", { task: value }, function(data) {
      todolist.empty();
      for (todos of data) {
        todolist.append("<li>" + todos.task + "</li>");
      }
    });
  });
});
