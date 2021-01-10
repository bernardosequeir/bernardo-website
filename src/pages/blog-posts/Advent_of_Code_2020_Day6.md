---
title: "Advent of Code 2020: Day 1"
date: "2021-01-08"
pullQuote: "Solution for the first day challenges of the 2020 edition of Advent of Code!"
---

### Introduction 

This year's challenges start with an easy-one, for warm-up. You can read the problem description (and the very charming box text) [here](https://adventofcode.com/2020/day/1)

But essentially, we are given a list of numbers as an input, and for the first part of this problem we need to find a pair of numbers that sum to 2020, and return the product of those two numbers.

### Part 1

We can solve this problem easily by just iterating through the list with two for loops, and checking the value of the sum in every iteration.

But that implementation could leave us with a solution that would return true if we, as an example had the number 1010 in the list, as by writing two for loops that check every value would eventually sum every index of the list with itself and then the function would return that, which I'd consider an error.

We can solve this very easily by just making the nested loop start one index ahead of the outer loop. This way, we don't double check a sum and we don't need to worry about the number itself summing to the target value.


```javascript
  const pairFinder = (input, targetValue) => {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if (input[i] + input[j] === targetValue) {
          return input[i] * input[j]
        }
      }
    }
  }
```

### Part 2

In the following challenges, the second part is always harder than the first one but in this case, the only difference is instead of finding a pair of numbers that sums to 2020, we just need to find a trio that sum to it.

Which just means that we need to add a third loop, so we compare three values at a time, applying the same ideas as we used in the first part:

```javascript
    const trioFinder = (input, targetValue) => {
      for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
          for (let k = j + 1; k < input.length; k++) {
            if (input[i] + input[j] + input[k] === targetValue) {
              return input[i] * input[j] * input[k]
            }
          }
        }
      }
    }
```


Source code can be found [here](https://github.com/bernardosequeir/advent-of-code-js) 


