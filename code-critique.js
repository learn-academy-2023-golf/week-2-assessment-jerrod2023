// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log(`The first vowel is at index ${i}.`);
            return;
        }
    }

    console.log("No vowels found in the string.");
}

// Example usage:
findFirstVowelIndex("Hello");  // Output: The first vowel is at index 1.
findFirstVowelIndex("Rhythm"); // Output: No vowels found in the string.

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

// Output was a little different that what I was expecting. The output is rendered correctly. Code was written plain and simple, code are helpful in understanding and provided good doc. Yes, I would like a different approach to see if there is a better way and simplier way to understand. The code was effectively completed the task.