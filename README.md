# Mini To‑Do App

To‑Do App est une petite application qui permet de gérer une liste de tâches.

Elle fonctionne en deux parties :

- Un backend (une API qui permet d’ajouter des tâches et de les afficher.)
- Un frontend (Une petite interface web qui affichera les tâches et permettra d’en ajouter.)

## technologies choisies

### backend :

- Nodes.js
- Express.js

### frontend :

- HTML/CSS
- Javascript


## Test du backend en local


![backend local](images/back_local_npm_start.png)

![backend local](images/back_local_health.png)

![backend local](images/back_local_tasks.png)

![backend local](images/back_local_tasks_added.png)

![backend local](images/health_nav.png)

![backend local](images/tasks_nav.png)


## Test du backend dans Docker


![backend docker](images/docker_built.png)

![backend docker](images/docker_backend.png)

![backend docker](images/docker_run.png)

![backend docker](images/docker_test.png)

![backend docker](images/docker_test2.png)

![backend docker](images/docker_nav.png)

![backend docker](images/docker_nav2.png)


## Dockerisation du frontend/backend + affichage du projet


![Dockerisation du frontend/backend](images/build_front_back.png)

![Dockerisation du frontend/backend](images/docker_ps.png)

![Dockerisation du frontend/backend](images/docker_run_back.png)

![Dockerisation du frontend/backend](images/docker_run_front.png)

![affichage du projet](images/mini_to_do_app_docker.png)

![affichage du projet](images/mini_to_do_app_docker2.png)


## affichage du projet en local


![affichage du projet](images/docker_remove.png)

![affichage du projet](images/affichage_locale_back.png)

![affichage du projet](images/affichage_locale_front.png)

![affichage du projet](images/locale.png)

![affichage du projet](images/locale2.png)

## Utilisation de Minikube

- Lancement du cluster Minikube.

```bash
minikube start --driver=docker
```
![Minikube](images/minikube_start.png)


- configuré Docker pour que Minikube utilise les images locales.


![Minikube](images/minikube.png)


```bash
kubectl apply -f k8s/
```

![Minikube](images/k8.png)



- Kubernetes a alors créé les pods et les services pour le frontend et le backend.


```bash
kubectl get pods
kubectl get svc
```

![Minikube](images/minikube2.png)


- Le backend est exposé en ClusterIP, donc il n’est accessible que depuis le cluster.

- Le frontend est en NodePort, donc Minikube peut me donner une URL pour y accéder.

```bash
minikube service frontend-service --url
```

![Minikube](images/minikube3.png)


![Minikube](images/mini-to-do-app.png)
