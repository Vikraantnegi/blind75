// Given a string str consisting of characters such as '(', ')', '{', '}', '[' and ']',
// determine if the input string is properly balanced.

// A string is considered balanced if:
// Each opening bracket bracket is closed by the same type of bracket (e.g., ( with ), { with }, and [ with ])
// Open brackets are closed in the correct order (e.g., ([]) is valid, but ([)] is not)
// Any subset of brackets enclosed within a matched pair must also form a valid matched pair
// (e.g., {[(])} is not balanced because the contents inside { and } are unbalanced).

const bracketsMap = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const balancedBrackets = (str = "") => {
  if (str.length === 0) return true;

  const brackets = [];
  for (let char of str) {
    if (bracketsMap[char]) {
      brackets.push(char);
    } else {
      const lastElement = brackets.pop();
      if (bracketsMap[lastElement] !== char) {
        return false;
      }
    }
  }

  return brackets.length === 0;
};

console.log(balancedBrackets("([]){}"));
