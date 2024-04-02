import inquirer from "inquirer";
import chalk from "chalk";
//create a todo in array
//use function cammand
//operations
let todos = [];
async function createtodo(todos) {
    let exit = true;
    do {
        let ans = await inquirer.prompt({ type: "list",
            message: "Select an operation.",
            name: "Select",
            choices: ["add", "update", "view", "remove", "Exit"],
        });
        if (ans.Select == "add") {
            let addtodo = await inquirer.prompt({ type: "input",
                message: "add item to todo",
                name: "todo",
            });
            todos.push(addtodo.todo);
            console.log(chalk.greenBright(todos));
        }
        if (ans.Select == "update") {
            let updatetodo = await inquirer.prompt({ type: "list",
                message: "Select an item for update.",
                name: "todo",
                choices: todos.map(i => i)
            });
            let addtodo = await inquirer.prompt({ type: "input",
                message: "Add item to todo",
                name: "todo",
            });
            let newtodo = todos.filter(arr => arr !== updatetodo.todo);
            todos = [...newtodo, addtodo.todo];
            console.log(chalk.redBright(todos));
        }
        if (ans.Select == "view") {
            console.log(chalk.yellowBright(todos));
        }
        if (ans.Select == "remove") {
            let removetodo = await inquirer.prompt({ type: "list",
                message: "Select an item for remove.",
                name: "todo",
                choices: todos.map(m => m),
            });
            let newremovetodo = todos.filter(s => s !== removetodo.todo);
            todos = [...newremovetodo];
            console.log(chalk.bgBlackBright(todos));
        }
        if (ans.Select == "Exit") {
            exit = false;
        }
    } while (exit);
}
createtodo(todos);
