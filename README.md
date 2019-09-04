# Todo Simply

A simple todo list

## Technical Stack
- React ([Create-React-App](https://create-react-app.dev))
- Redux - ([Redux Starter Kit](https://redux-starter-kit.js.org/))
- [TypeScript](https://www.typescriptlang.org)
- [Testing Library](https://testing-library.com)

## Notes
1. Using **Create-React-App** because it's a quick, simple and robust way to kickstart a new React project and server-side rendering is out-of-scope.
2. Using **Redux Starter Kit** to help avoid some common boilerplate issues and it includes [Immer](https://github.com/immerjs/immer). Was tempted to use React Context with `useState` and `useReducer` but decided to stick with the more familiar Redux pattern.
3. No client side router since task only details one "page".

## Features
- [ ] `As a user`, I can see my profile pic and username
- [ ] `As a user`, I cannot logout; i am permanently logged in
- [ ] `As a user`, I can see an area containing a list of todo lists. This area has 1 fixed list, which is titled: “Team To-Do List”
- [ ] `As a user`, I cannot add or delete the list of todo lists, including amending their titles.
- [ ] `As a user`, I can view all of my current todo list items in my “Team To-Do List” list, if any exist.
- [ ] `As a user`, I can add new todo items to my “Team To-Do List” list.
- [ ] `As a user`, I can delete todo items from my “Team To-Do List” list.
- [ ] `As a user`, I can mark todo items on my “Team To-Do List” as complete, and they should visually delineate themselves as being different from non-completed items.
