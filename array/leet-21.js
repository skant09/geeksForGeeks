/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    
    while(list1.next && list2.next) {
        if(list1.val < list2.val) {
            newList.val = list1.val;
            list1 = list1.next;
            newList = newList.next;
        } else {
            newList.val = list2.val;
            list2 = list2.next;
            newList = newList.next;
        }
    }
    return newList;
};
mergeTwoLists([1,2,3], [1,2,3])