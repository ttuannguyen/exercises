const basket = ['apples', 'grapes', 'pears'];
linked list: apples --> grapes --> pears
benefit: loose structure => so we can insert/delete something in the middle efficiently by resetting a few pointers

apples 
8947 ---> grapes
            8742 ---> pears
                        372 ---> null

note: linked lists are null terminated 

Time complexity:
Prepend O(1)
Append O(1)
Lookup O(n)
Insert O(n)
Delete O(n)