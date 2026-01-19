const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "http://host.docker.internal:3000";


async function loadTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.name;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const name = input.value;

  if (!name) return;

  await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  input.value = "";
  loadTasks();
}

loadTasks();
