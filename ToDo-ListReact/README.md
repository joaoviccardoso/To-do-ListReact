# 📋 To-Do List – React

Aplicação desenvolvida para treinar conceitos essenciais do **React**, explorando **estados**, **props**, **renderização condicional** e **persistência de dados** no `localStorage`.  
O objetivo é gerenciar tarefas de forma simples e intuitiva, com possibilidade de criação, marcação como concluída, exclusão e filtragem.

---

## 🚀 Tecnologias Utilizadas
- **React** (Vite ou Create React App)
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3** (ou Tailwind CSS, se utilizado)

---

## 📜 Regras de Negócio

1. Toda tarefa deve ter um título obrigatório.
2. Não é permitido criar duas tarefas idênticas consecutivas.
3. Uma tarefa pode estar em dois estados:
   - **Pendente**
   - **Concluída**
4. O usuário pode alternar o estado de uma tarefa a qualquer momento.
5. As tarefas devem ser salvas no `localStorage` para persistirem após atualização ou fechamento do navegador.
6. O sistema deve permitir filtrar tarefas por:
   - Todas
   - Concluídas
   - Pendentes
7. Ao excluir uma tarefa, ela deve ser removida permanentemente.
8. O contador de tarefas pendentes deve ser atualizado automaticamente.

---

## ⚙️ Requisitos Funcionais

1. Permitir **criar** uma nova tarefa informando um título.
2. Permitir **marcar** uma tarefa como concluída ou pendente.
3. Permitir **excluir** uma tarefa.
4. Exibir a lista de tarefas com status visual de concluída ou pendente.
5. Filtrar tarefas por status (Todas, Concluídas, Pendentes).
6. Mostrar um **contador** de tarefas pendentes.
7. Salvar e carregar tarefas do `localStorage` automaticamente.
8. Impedir a criação de tarefas sem título ou duplicadas consecutivas.

---
