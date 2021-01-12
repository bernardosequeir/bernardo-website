--- 
title: "Advent of Code 2020: Day 2"
date: "2021-01-11"
pullQuote: "Today we determine how many passwords are valid in the Official Toboggan Company Database!"
---

### Introduction 

Oh noes! The password database at the "North Pole Toboggan Rental Shop" has become a little corrupted! And it seems that some of the passwords inside wouldn't be valid according to the password policy when they were created. Let's find out how many may have been affected.
 
### Input Format

```
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
``` 

* `1-3` - boundaries for the number of times the character must appear on the password for it to be valid.

* `a` - the character that must appear x times on the password.

* `abcde` - the password itself.

In this example case, the password is valid because *a* appears 1 time in it.

### Part 1

We can solve this problem easily by just iterating through the list with two for loops, and checking the value of the sum in every iteration.

But that implementation could leave us with a solution that would return true if we, as an example had the number 1010 in the list, as by writing two for loops that check every value would eventually sum every index of the list with itself and then the function would return that, which I'd consider an error.

We can solve this very easily by just making the nested loop start one index ahead of the outer loop. This way, we don't double-check a sum and we don't need to worry about the number itself summing to the target value.


```javascript
const validPasswordCounterPart1 = (passwordList) => {
  let validPasswords = 0
  passwordList.forEach(password => {
    const parts = password.split(' ')
    const lowerLimit = parts[0].split('-')[0]
    const upperLimit = parts[0].split('-')[1]
    const character = parts[1].split(':')[0]
    const pass = parts[2]
    const letterCount = pass.split(character).length - 1
    if (letterCount >= lowerLimit && letterCount <= upperLimit) { validPasswords++ }
    console.log(pass, letterCount, character);
  })
  return validPasswords
}
```

### Part 2

In the following challenges, the second part is always harder than the first one but in this case, the only difference is instead of finding a pair of numbers that sums to 2020, we just need to find a trio that sum to it.

Which just means that we need to add a third loop, so we compare three values at a time, applying the same ideas as we used in the first part:

```javascript
    const validPasswordCounterPart2 = (passwordList) => {
      let validPasswords = 0
      passwordList.forEach(password => {
        const parts = password.split(' ')
        const lowerPosition = parts[0].split('-')[0] - 1
        const upperPosition = parts[0].split('-')[1] - 1
        const character = parts[1].split(':')[0]
        const pass = parts[2]
        const firstMatch = pass[lowerPosition] === character
        const lastMatch = pass[upperPosition] === character
        if (firstMatch ^ lastMatch) {
          console.log(pass, lowerPosition, upperPosition, character)
          validPasswords++
        }
      })
      return validPasswords
    }
```


Source code can be found [here](https://github.com/bernardosequeir/advent-of-code-js) 



