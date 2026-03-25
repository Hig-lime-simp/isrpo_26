class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = "all";
        this.loadTasks();
        this.cacheDom();
        this.attachEventListeners();
        this.renderTasks();
    }

    cacheDom() {
        this.taskInput = document.getElementById("taskInput");
        this.addBtn = document.getElementById("addTask");
        this.taskList = document.getElementById("taskList");
        this.totalTasksSpan = document.getElementById("totalTasks");
        this.completedTasksSpan = document.getElementById("completedTasks");
        this.filterBtns = document.querySelectorAll(".filter-btn");
    }

    loadTasks() {
        const saved = localStorage.getItem("tasks");
        if (saved) {
            this.tasks = JSON.parse(saved);
        }
    }

    saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    addTask(text) {
        if (!text?.trim()) return;

        const task = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.saveTasks();
        this.renderTasks();
    }

    getFilteredTasks() {
        if (this.currentFilter === "active") {
            return this.tasks.filter(t => !t.completed);
        } else if (this.currentFilter === "completed") {
            return this.tasks.filter(t => t.completed);
        }
        return this.tasks;
    }

    renderTasks() {
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            this.taskList.innerHTML = '<li class="empty-message">Задач нет</li>';
            this.updateStats();
            return;
        }

        this.taskList.innerHTML = filteredTasks.map(task => `
            <li class="task-item" data-id="${task.id}">
                <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""}>
                <span class="task-text ${task.completed ? "completed" : ""}">${this.escapeHtml(task.text)}</span>
                <button class="task-delete" data-id="${task.id}">Удалить</button>
            </li>
        `).join("");

        this.updateStats();
    }

    updateStats() {
        this.totalTasksSpan.textContent = this.tasks.length;
        this.completedTasksSpan.textContent = this.tasks.filter(t => t.completed).length;
    }

    escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    attachEventListeners() {
        this.addBtn.addEventListener("click", () => {
            this.addTask(this.taskInput.value);
            this.taskInput.value = "";
            this.taskInput.focus();
        });

        this.taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.addTask(e.target.value);
                e.target.value = "";
            }
        });

        this.taskList.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            if (e.target.classList.contains("task-checkbox")) {
                this.toggleTask(id);
            } else if (e.target.classList.contains("task-delete")) {
                this.deleteTask(id);
            }
        });

        this.filterBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                this.filterBtns.forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                this.currentFilter = e.target.dataset.filter;
                this.renderTasks();
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new TaskManager();
});