import Task from './task'

const UI = () => {
  const content = document.getElementById("content")
  // Create navbar
  const nav = document.createElement("nav")
  const navTitle = document.createElement("div")
  navTitle.innerText = "✅ Todo List"
  content.appendChild(nav)
  nav.appendChild(navTitle)

  // divide main part in sidebar and main
  const container = document.createElement("div")
  container.classList.add("container")
  const main = document.createElement("main")
  const aside = document.createElement("aside")
  content.appendChild(container)
  container.appendChild(aside)
  container.appendChild(main)

  // create aside content
  const inbox = document.createElement("div")
  inbox.innerHTML = "<i class='fa-solid fa-inbox'></i> Inbox"
  aside.appendChild(inbox)
  const today = document.createElement("div")
  today.innerHTML = "<i class='fa-solid fa-calendar-day'></i></i> Today"
  aside.appendChild(today)
  const thisWeek = document.createElement("div")
  thisWeek.innerHTML = "<i class='fa-solid fa-calendar-week'></i> This Week"
  aside.appendChild(thisWeek)
  const projectCategory = document.createElement("div")
  projectCategory.innerHTML = "Projects"
  aside.appendChild(projectCategory)
  const addProject = document.createElement("div")
  addProject.innerHTML = "<i class='fa-solid fa-plus'></i> Add Project"
  aside.appendChild(addProject)


  // create main content
  const mainTitle = document.createElement("h1")
  mainTitle.innerText = "Inbox"
  main.appendChild(mainTitle)
  const taskList = document.createElement("div")
  main.appendChild(taskList)
  const addNewTask = document.createElement("div")
  addNewTask.innerHTML = "<i class='fa-solid fa-plus'> Add"
  addNewTask.classList.add("newTask")
  main.appendChild(addNewTask)

  // addEventListener for new task button and show input for new tasks and hide addNewTask button
  addNewTask.addEventListener("click", () => {
    addNewTask.classList.add('hide')
    const input = document.createElement('input')
    input.classList.add("textInput")
    main.append(input)
    const addButton = document.createElement('button')
    addButton.classList.add('addButton')
    addButton.innerText = "Add"
    const cancelButton = document.createElement('button')
    cancelButton.classList.add('cancelButton')
    cancelButton.innerText = "Cancel"
    main.appendChild(addButton)
    main.appendChild(cancelButton)

    // Add event listener for click on add button
    addButton.addEventListener("click", () => {
      addTasks()
    })
    
    // Add event listener for press enter.
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTasks()
      }
    });

    const addTasks = () => {
      createTask(document.querySelector(".textInput").value)
      addButton.remove()
      cancelButton.remove()
      input.remove()
      addNewTask.classList.remove('hide')
      updateTaskList();
    }

    cancelButton.addEventListener("click", () => {
      addButton.remove()
      cancelButton.remove()
      input.remove()
      addNewTask.classList.remove('hide')
    })
    
  })

  // update the dom with new tasks
  const updateTaskList = () => {
    taskList.innerHTML = ""
    tasks.forEach(element => {
      console.log(element.taskContentcontent)
      const taskItem = document.createElement('div')
      taskItem.innerHTML = `<input type="checkbox"> ${element.taskContent}`
      taskItem.classList.add('tasks')
      taskList.appendChild(taskItem)
    });
  }


  // create footer
  const footer = document.createElement("footer")
  footer.innerText = "Created by Antonio Guerriere ⚡️"
  content.appendChild(footer)




}

const tasks = []

function createTask(input) {
  let newTask = new Task(input);
  console.log(newTask)
  tasks.push(newTask)
}


export default UI