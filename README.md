# ReactCourse_Charter1

## Component Schema Laboratory 2
![image](https://github.com/user-attachments/assets/a2292082-8f5f-4624-abcb-921ab0de8b7e)

## Component Schema Laboratory 3
![image](https://github.com/user-attachments/assets/99b0458d-f1d4-4762-8321-24b4bcb4985e)

## Description Laboratory 3
### Компонент App:
Основний компонент, який відповідає за структуру сторінки. Він містить два дочірні компоненти: PageTitle та ToDoContainer.

### Компонент PageTitle:
Отримує пропс title від батьківського компонента App і виводить його на екран.

### Компонент ToDoContainer:
Основний контейнер для обробки логіки додавання, пошуку та видалення завдань.
Він містить стан для title, search, та toDoList, а також три дочірні компоненти: SearchInput, AddToDoForm, та ToDoTable.

### Компонент SearchInput:
Використовується для фільтрації завдань за допомогою введеного тексту. Отримує пропси searchValue та setSearch для контролю стану пошуку.

### Компонент AddToDoForm:
Відповідає за додавання нових завдань. Отримує пропси title, setTitle та функцію onSubmit, яка обробляє подію додавання завдання.

### Компонент ToDoTable:
Відображає таблицю зі списком завдань, які фільтруються через пошук. Отримує пропси toDoList, onDelete, та search.

### Side Effects:
Side effects виникають між компонентами ToDoContainer та його дочірніми компонентами. Зокрема:
- SearchInput змінює пошуковий запит, що фільтрує список у ToDoTable.
- AddToDoForm змінює список завдань, що відображається у ToDoTable.
- Видалення завдання у ToDoTable впливає на стан списку у ToDoContainer.
