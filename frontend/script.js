const API_URL = "http://backend-service:3000";

async function loadTasks() {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    const tasks = await res.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t.name;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Erreur lors du chargement des tâches :", err);
  }
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const name = input.value;

  if (!name) return;

  try {
    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    input.value = "";
    loadTasks();
  } catch (err) {
    console.error("Erreur lors de l'ajout :", err);
  }
}

loadTasks();
