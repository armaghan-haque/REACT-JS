# Web Storage — Quick Reference

Short definitions for the localStorage/sessionStorage methods used in this snippet.

## Core Concepts

**localStorage**
Stores key-value data in the browser with no expiration date. Data persists even after the browser is closed and reopened.

**sessionStorage**
Stores key-value data only for the current browser tab/session. Data is cleared when the tab is closed.

## Methods

| Method | Definition |
|---|---|
| `setItem(key, value)` | Saves a key-value pair to storage. Values are always stored as strings. |
| `getItem(key)` | Retrieves the value associated with a key. Returns `null` if the key doesn't exist. |
| `removeItem(key)` | Deletes a specific key-value pair from storage. |
| `clear()` | Removes all key-value pairs from that storage object. |

## Working with Objects

**JSON.stringify(obj)**
Converts a JavaScript object into a string, since storage can only hold strings.

**JSON.parse(str)**
Converts a JSON string back into a JavaScript object, restoring its original structure (instead of a plain string).

## Example Flow

```js
// Storing an object
const user = { username: 'arman', age: 25, city: 'delhi' };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving it back as an object
const restoredUser = JSON.parse(localStorage.getItem('user'));
console.log(restoredUser); // { username: 'arman', age: 25, city: 'delhi' }
```

## Original Snippet (as provided)

```javascript
localStorage.clear()
sessionStorage.clear()

localStorage.setItem('user' , 'arman')

const user = localStorage.getItem('user')
console.log(user)

localStorage.setItem('age','18')

const age = localStorage.getItem('age')
console.log(age)

localStorage.removeItem('user')

const user = {
username : 'arman',
age : 25,
city : 'delhi'
}

localStorage.setItem('user',JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'))
console.log(user).  // gives you in the original format which is object otherwise will give a string
```
