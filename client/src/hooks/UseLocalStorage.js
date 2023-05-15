import {useEffect, useState} from 'react'

/* The constant variable PREFIX is defined with the value 'vascochat-clone-'. This prefix is used to prepend to the key provided when accessing the local storage. It helps to ensure uniqueness and avoid conflicts with other data stored in the local storage. */
const PREFIX = 'vascochat-clone-'


export default function UseLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {

    /* The function provided as the initial state checks if there is a value stored in the local storage under the prefixedKey. If a value exists, it is parsed from JSON format using JSON.parse and returned. If no value is found in the local storage, it checks if the initialValue parameter is a function. If it is, the function is executed and the result is returned. Otherwise, the initialValue itself is returned. */
    const jsonValue = localStorage.getItem(prefixedKey)
      if (jsonValue != null) {
        /* JSON.parse is used to convert a JSON string into a JavaScript object. */
        return JSON.parse(jsonValue)
      }
      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue 
      }
  })

  useEffect(() => {
    /* JSON.stringify is used to convert a JavaScript object into a JSON string. */
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
