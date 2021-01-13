--- 
title: "Advent of Code 2020: Day 2"
date: "2021-01-11"
pullQuote: "Today we determine how many passwords are valid in the Official Toboggan Company Database!"
---

### Introduction 

Oh noes! The password database at the "North Pole Toboggan Rental Shop" has become a little corrupted! And it seems that some of the passwords inside wouldn't be valid according to the password policy when they were created. Let's find out how many may have been affected.

(As always, the link for the challenge is [here](https://adventofcode.com/2020/day/2))
### Input Format For Part 1

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

This challenge is still pretty simple, we just need to iterate over the password list, and count the amount of times the defined characters appear on the password. This can be accomplished in many ways but I just split the password by the defined character ( using `.split()` ) and used the length of the array. And then check if the number was inside the boundaries defined. 


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

(If you're confused by the -1 on the letterCount, it's just because when you use `.split()` and it actually matches, you always get the field after the character you split by. So even if you only had one match, the array will always have two fields).

### Input Format For Part 2

```
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
``` 

Everything but the `1-3` stays the same. Now the values describe two positions in the password instead.

### Part 2

The way to validate a password has changed, instead of counting occurrences, we need to check for the presence of the character in the selected positions. The passwords are only considered valid if only ONE of the positions contains the selected character, and is invalid if either both positions contain the character or if neither of them contain it. A simpler way to explain this condition is to equate it to an [XOR gate](https://en.wikipedia.org/wiki/XOR_gate).

But essentially, our method for solving this remains similar, simply iterate over all lines and if the conditions for a password to be valid are met we just add one to the counter.


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



