1. Import `useState`

```
import { useState } from 'react'
```

`useState` lets the component store and update data.

---

### 2. Three states

```
const [title, setTitle] = useState('')
```

const [details, setDetails] = useState('')

const [task, setTask] = useState([])

* `title` → stores the note heading.
* `details` → stores the note description.
* `task` → stores **all notes** in an array.

For example:

```
task = [
```

{ title: "Study", details: "Learn React" },

{ title: "Shopping", details: "Buy milk" }

]

---

### 3. Adding a note

When the form is submitted:

```
const submitHandler = (e) => {
```

e.preventDefault()

const copyTask = [...task]

copyTask.push({ title, details })

setTask(copyTask)

setTitle('')

setDetails('')

}

What happens:

1. `e.preventDefault()` stops the page from refreshing.
2. `[...task]` creates a copy of the existing notes.
3. `.push({ title, details })` adds the new note.
4. `setTask(copyTask)` updates React's state.
5. `setTitle('')` and `setDetails('')` clear the inputs.

---

### 4. Deleting a note

```
const deleteNote = (idx) => {
```

const copyTask = [...task]

copyTask.splice(idx, 1)

setTask(copyTask)

}

`idx` tells us **which note was clicked**.

For example, if `idx = 1`:

```
copyTask.splice(1, 1)
```

removes the note at index `1`.

---

### 5. Controlled inputs

```
value={title}
```

onChange={(e) => {

setTitle(e.target.value)

}}

This means React controls the input.

Whenever you type:

**User types →** **`onChange`** **→** **`setTitle()`** **→** **`title`** **updates → input displays new value**

The textarea works the same way with `details`.

---

### 6. Displaying notes

```
{task.map(function (elem, idx) {
```

`map()` loops through every note in the `task` array.

Then:

```
<h3>{elem.title}</h3>
```

<p>{elem.details}</p>

displays the note's title and details.

---

### 7. Delete button

```
<button onClick={() => {
```

deleteNote(idx)

}}>

Delete

</button>

When the user clicks **Delete**, it calls:

```
deleteNote(idx)
```

and removes that particular note.

---

### 8. Tailwind CSS

Classes like:

```
bg-black
```

text-white

flex

w-full

p-10

rounded-xl

are **Tailwind CSS** classes. They control the layout, colors, spacing, sizing, etc.

### Overall flow

```
User enters title + details
```

```
      ↓

  Click Add Note

      ↓

submitHandler()

      ↓
```

Add note to task[]

```
      ↓

  setTask()

      ↓

React re-renders

      ↓

  Note appears

      ↓
```

Click Delete

```
      ↓

 deleteNote()

      ↓

Note is removed
```

**In one sentence:** This component uses React's `useState` to manage form inputs and a notes array, `map()` to display notes, and `splice()` to delete them.
