# Programming Assignment 1 – Robot Relay Ring
# Author : [Amani Paul]
## Overview
- Circular Linked List implementation
- Robot Relay Ring (round-robin scheduler)
- Split a Circular Linked List problem

## What I Implemented
- [x] Append
- [x] Pop front
- [x] Rotate
- [x] Display
- [x] Split
- [x] Merge
- [x] Run turns

## How the Circular List Works

When the Circular Linked List is initialized, the pointers head and tail are set to nullptr.
Once the first node is added, head and tail are both assigned to it and therefore equal. Then,
the new node points back to itself, creating a circular structure. When subsequent nodes are
added, they point to the head, then the tail points to the new node, and finally tail is 
assigned to the new node.


## Why Circular Linked List Fits a Relay

Since Circular Linked Lists maintain the order in which nodes were added, they provide
fairness by allowing turns to go in order by cycling through the list. Also, it fits the 
format of a relay as each node points to the next one in the list, allowing it to "rotate" when needed.
The circular linked list can traverse as much as needed, fitting for a relay especially when the number
of needed traversals is unknown.

## Comparison
In a head-only list, once you access the next node after another, you can't backtrack and access
previous nodes without restarting and going to the beginning of the list. Also, when adding, removing,
or accessing elements, you have to traverse the whole list to reach them.

By adding a tail pointer, you can now traverse starting from either the head or the tail.
It also makes it easier to concatenate lists, adding one to the end of another, without
having to traverse the list until the end.

Regarding circular linked lists, they have both head and tail pointers, but the tail
points back to the head, creating a circular structure. In addition to the advantages of
utilizing tail pointers, circular lists are great for cyclic behavior, such as looping buffers
and round-robin queues, due to their ability to traverse continuously with no nulls.

## Operation costs (append, delete, traverse)

Single (Head only) Linked List 
  - Insert:  @ beginning - O(1), @ end - O(n), @ index - O(n)
  - Deletion: @ beginning - O(1), @ end - O(n), @ index - O(n)
  - Traversal: O(n)

Circular Linked List
- Insert: @ beginning - O(1), @ end - O(1), @ index - O(n)
- Deletion: @ beginning - O(1), @ end - O(1), @ index - O(n)
- Traversal: O(n)

## Split Problem
Explain with examples:
- Even list (e.g., 4 robots → 2 & 2)
- Odd list (e.g., 5 robots → 3 & 2)

First, I handled the edge cases, so whether the list is empty (!head) or there is only
1 element (head==tail). After, I initialized a temp pointer equal to head, then an integer
called ringSize was set to the size of the list. If the remainder of ringSize divided by 2
didn't equal 0, meaning the size was an odd number, I incremented ringSize by 1. This was so 
when looping through the list, the first half would stop with the greater number of robots 
because it believed the size of the list was 1 greater. For example, if the size of the ring
is 7, then the loop will stop at the fourth robot since ringSize is set to 8. If the list is even, 
however, ringSize isn't changed, and the loop stops halfway through the list. 

## Reflection

##### - Hardest bug I faced

The hardest bug I faced was dealing with the split of one ring into two. The function passes by reference two
Robot objects, so I struggled to figure out how to save those robots when the function is void. I also didn't know how
to have those new rings be called by the menu functions and switch to the other once one is emptied.

##### - How I fixed it

I wasn't able to solve this problem specifically, so I chose to follow a different design choice. I created two
empty Robot Linked Lists, first and head, and assigned first.head to head and second.tail to tail. After creating a temp
pointer, I traversed the ring and assigned temp to the middle robot. I assigned first.tail to temp and first.tail->next
to first.head to create a circular structure. Then, I assigned second.head to temp->next and second.tail->next to 
second.head to do the same. Finally, I displayed both rings and called the mergeWith function to combine them again and
bring back the original ring.

##### - What I learned

I learned how to take advantage of the pros of circular lists, such as easy and continuous traversal and the ability
to implement turn-taking. Due to having a head and tail pointer, I can easily split a list or connect two different
ones at their tail and head, respectively. 