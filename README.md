
# Assignment‑Refactoring‑var‑to‑const‑and‑let

## Assignment: Refactoring var to const and let

Your task is to refactor this code by replacing var with const or let.  
Choose the appropriate keyword based on the variable's usage in the code.

After refactoring, briefly explain your choices for each replaced instance with code comments in the same file.

In the included readme.md file highlight any potential issues or bugs that might arise from the original use of var.

---

## Answer

The issue with using var over let or const starts with just practing best practices and in no production code have I ever seen a var. Const and Let are jsut more consistent and reliable use cases and typically will cause less issues in code as it expands and becomes more complicated. Var can lead to issues with its declarations being hoisted to the top of the function which can lead undefined values to be defined earlier then expected. This also makes trouble shooting a lot more complicated. In my code I have marked why I chose what changes because of either it being declared or a static value.
