
    {
        const tasks = [
        {
            content: "zjesc sniadanie",
            done: false,
        },
        {    
             content: "wypic kawke",
             done: true,
      },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : "" }>
            <button class="js-done">zrobione</button>
            <button class="js-remove">usun</button>${task.content}
            </li>
            `;
    }  

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    document.querySelector(".js-task").innerHTML = htmlString;
    };

    const addNewTask = () => {   
        tasks.push({
        content: newTaskContent,
    });
    
    render();}

        const removeTask = (index) => {
            tasks.splice(index, 1);
            render();
        };



    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();

    };

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
    });

  

const onFormSubmit = (event) => {
    event.preventDefault();

    
   
    if (newTaskContent === "") {
        return;
    };
};





    const init = () => {
        render();
    };

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

    };