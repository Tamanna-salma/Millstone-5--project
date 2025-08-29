# Millstone-5--project

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans-----
(a) getElementById("id") -- returns 1 element .

(B) getElementsByClassName -- একই ক্লাসের সব element আনে।

(c)querySelector -- এটি ব্যবহার করে প্রথম matching element return করে।
document.querySelector("#id")

(d)querySelectorAll = এটি CSS selector এর মাধ্যমে সব matching elements return করে NodeList আকারে ।
document.querySelectorAll(".class")


2 . How do you create and insert a new element into the DOM?
ans: let div = document.createElement("div");
div.textContent = "Hello!";
document.body.appendChild(div);

3 .What is Event Bubbling and how does it work?
Ans: Event bubbling = when an event on a child element propagates upward through its parent(s).

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Attach event listener to a parent element to handle events of child elements. Useful for dynamic elements.

5 .What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() = ব্রাউজারের ডিফল্ট কাজ বন্ধ করে। e.g., stop form submit, stop link opening.

stopPropagation() = ইভেন্ট যেন parent এ না যায়, সেটা বন্ধ করে।