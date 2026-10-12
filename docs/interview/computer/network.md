---
title: 1、计算机网络
description: Java基础面试题、Java面试题、计算机网络
category: 面试资料
tag:
  - 后端面试 
  - Java基础
head:
  - - meta
    - name: keywords
      content: Java基础面试题、Java面试题、计算机网络
---


## [1. 数组相关算法](#_1-数组相关算法)
### [1.1 如何在一个数组中找到最大值和最小值？](#_1-1-如何在一个数组中找到最大值和最小值)
**问题描述：** 给定一个整数数组，请设计算法找到数组中的最大值和最小值。

**面试官可能追问：**

+ 如何在一次遍历中找到最大值和最小值？
+ 时间复杂度要求是多少？

**解答思路：**

1. **方法一：两次遍历** - 分别遍历数组找最大值和最小值
2. **方法二：一次遍历** - 在遍历过程中同时维护最大最小值

**推荐答案：** 一次遍历的效率更高，时间复杂度为 O(n)，空间复杂度为 O(1)

**代码实现：**

```java
public class FindMinMax {
    /**
     * 一次遍历同时找最大最小值
     * @param arr 输入数组
     * @return 包含最小值和最大值的数组 [min, max]
     */
    public static int[] findMinMax(int[] arr) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("数组不能为空");
        }

        int min = arr[0];
        int max = arr[0];

        // 从第二个元素开始遍历
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            } else if (arr[i] < min) {
                min = arr[i];
            }
        }

        return new int[]{min, max};
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(n)
+ 空间复杂度：O(1)

**扩展问题：** 如果要返回最大值和最小值的位置怎么办？

---

### [1.2 如何解决两数之和问题？](#_1-2-如何解决两数之和问题)
**问题描述：** 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。

**示例：**

```plain
输入：nums = [2, 7, 11, 15], target = 9
输出：[0, 1]
解释：因为 nums[0] + nums[1] = 2 + 7 = 9
```

**面试官可能追问：**

+ 如果数组中有重复元素怎么办？
+ 如果有多组解怎么办？
+ 时间复杂度要求？

**解答思路：**

1. **暴力解法：** 双重循环，时间复杂度 O(n²)
2. **哈希表优化：** 一次遍历，时间复杂度 O(n)

**推荐答案：** 使用哈希表，空间换时间

**代码实现：**

```java
public class TwoSum {
    /**
     * 使用哈希表解决两数之和问题
     * @param nums 输入数组
     * @param target 目标值
     * @return 满足条件的两个数的下标
     */
    public static int[] twoSum(int[] nums, int target) {
        if (nums == null || nums.length < 2) {
            throw new IllegalArgumentException("数组长度至少为2");
        }

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // 检查是否已经有配对的数字
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            // 将当前数字和其下标存入哈希表
            map.put(nums[i], i);
        }

        throw new IllegalArgumentException("没有找到满足条件的两个数");
    }

    // 如果需要返回所有可能的组合
    public static List<int[]> twoSumAll(int[] nums, int target) {
        List<int[]> result = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                result.add(new int[]{map.get(complement), i});
            }

            map.put(nums[i], i);
        }

        return result;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(n)
+ 空间复杂度：O(n)

---

### [1.3 如何对数组进行去重？](#_1-3-如何对数组进行去重)
**问题描述：** 如何去除数组中的重复元素，返回去重后的数组？

**面试官可能追问：**

+ 是否需要保持原有顺序？
+ 时间复杂度和空间复杂度的要求？
+ 能否修改原数组？

**解答思路：**

1. **使用 HashSet：** 时间 O(n)，但会改变元素顺序
2. **排序后去重：** 时间 O(nlogn)，保持相对顺序
3. **原地去重：** 空间 O(1)

**代码实现：**

```java
public class RemoveDuplicates {

    /**
     * 使用HashSet去重（不保证顺序）
     */
    public static int[] removeDuplicatesWithSet(int[] arr) {
        if (arr == null) return null;

        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }

        int[] result = new int[set.size()];
        int index = 0;
        for (int num : set) {
            result[index++] = num;
        }
        return result;
    }

    /**
     * 排序后去重（保持相对顺序）
     */
    public static int[] removeDuplicatesWithSorting(int[] arr) {
        if (arr == null) return null;
        if (arr.length <= 1) return arr.clone();

        int[] sortedArr = arr.clone();
        Arrays.sort(sortedArr);

        int[] result = new int[sortedArr.length];
        int index = 0;
        result[index++] = sortedArr[0];

        for (int i = 1; i < sortedArr.length; i++) {
            if (sortedArr[i] != sortedArr[i - 1]) {
                result[index++] = sortedArr[i];
            }
        }

        return Arrays.copyOf(result, index);
    }

    /**
     * 原地去重算法（双指针法）
     */
    public static int removeDuplicatesInPlace(int[] arr) {
        if (arr == null || arr.length == 0) return 0;

        int slow = 0;
        for (int fast = 1; fast < arr.length; fast++) {
            if (arr[fast] != arr[slow]) {
                slow++;
                arr[slow] = arr[fast];
            }
        }
        return slow + 1;
    }
}
```

**复杂度分析：**

+ HashSet 方法：时间 O(n)，空间 O(n)
+ 排序方法：时间 O(nlogn)，空间 O(n)
+ 原地方法：时间 O(n)，空间 O(1)

## [2. 链表相关算法](#_2-链表相关算法)
### [2.1 如何反转链表？](#_2-1-如何反转链表)
**问题描述：** 给定单链表的头节点，请反转链表，并返回反转后的链表头节点。

**示例：**

```plain
输入：1->2->3->4->5->NULL
输出：5->4->3->2->1->NULL
```

**面试官可能追问：**

+ 能否用递归方法实现？
+ 时间和空间复杂度是多少？
+ 空链表和只有一个节点的情况如何处理？

**解答思路：**

1. **迭代方法：** 使用三个指针 prev、curr、next
2. **递归方法：** 递归到链表尾部，然后反转指针

**推荐答案：** 迭代方法，空间复杂度 O(1)

**代码实现：**

```java
/**
 * 链表节点定义
 */
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

public class ReverseLinkedList {

    /**
     * 迭代方法反转链表
     * 空间复杂度O(1)，推荐使用
     */
    public static ListNode reverseListIterative(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode nextTemp = curr.next;  // 保存下一个节点
            curr.next = prev;               // 反转指针
            prev = curr;                    // prev向后移动
            curr = nextTemp;                // curr向后移动
        }

        return prev;  // prev就是新的头节点
    }

    /**
     * 递归方法反转链表
     * 空间复杂度O(n)，因为有递归栈
     */
    public static ListNode reverseListRecursive(ListNode head) {
        // 基准情况：空链表或只有一个节点
        if (head == null || head.next == null) {
            return head;
        }

        // 递归处理后续节点
        ListNode p = reverseListRecursive(head.next);

        // 反转指针
        head.next.next = head;
        head.next = null;

        return p;
    }

    /**
     * 测试方法
     */
    public static void main(String[] args) {
        // 创建链表：1->2->3->4->5
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.print("原链表: ");
        printList(head);

        ListNode reversed = reverseListIterative(head);
        System.out.print("反转后: ");
        printList(reversed);
    }

    private static void printList(ListNode head) {
        StringBuilder sb = new StringBuilder();
        while (head != null) {
            sb.append(head.val);
            if (head.next != null) sb.append("->");
            head = head.next;
        }
        sb.append("->NULL");
        System.out.println(sb.toString());
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(n)
+ 空间复杂度：O(1) 迭代 / O(n) 递归

---

### [2.2 如何检测链表中是否存在环？](#_2-2-如何检测链表中是否存在环)
**问题描述：** 如何判断一个单链表是否存在环？如果存在环，如何找到环的入口节点？

**面试官可能追问：**

+ 为什么使用快慢指针？
+ 如果链表为空怎么办？
+ 如何计算环的长度？

**解答思路：**

1. **检测环：** 使用快慢指针法
2. **找到入口：** 数学推导，证明入口节点的位置

**代码实现：**

```java
public class DetectCycle {

    /**
     * 检测链表中是否存在环
     * 使用快慢指针法
     */
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;        // 慢指针走一步
            fast = fast.next.next;   // 快指针走两步

            if (slow == fast) {
                return true;  // 相遇，说明有环
            }
        }

        return false;  // 快指针到达链表尾部，无环
    }

    /**
     * 找到环的入口节点
     * 证明：设链表头到入口距离为a，入口到相遇点距离为b，相遇点到入口距离为c
     * 快指针走了 a + b + k*(b+c)，慢指针走了 a + b
     * 2*(a+b) = a + b + k*(b+c) => a = (k-1)*(b+c) + c
     * 所以从头节点和相遇点同时出发，会在入口相遇
     */
    public static ListNode detectCycle(ListNode head) {
        if (head == null || head.next == null) {
            return null;
        }

        // 第一步：找到相遇点
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                // 第二步：找到环的入口
                ListNode ptr = head;
                while (ptr != slow) {
                    ptr = ptr.next;
                    slow = slow.next;
                }
                return ptr;
            }
        }

        return null;  // 无环
    }

    /**
     * 计算环的长度
     */
    public static int cycleLength(ListNode head) {
        if (head == null) return 0;

        ListNode slow = head;
        ListNode fast = head;
        boolean hasCycle = false;

        // 找到相遇点
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }

        if (!hasCycle) return 0;

        // 计算环的长度
        int length = 1;
        slow = slow.next;
        while (slow != fast) {
            length++;
            slow = slow.next;
        }

        return length;
    }

    /**
     * 删除链表中的环
     */
    public static void removeCycle(ListNode head) {
        if (head == null) return;

        ListNode slow = head;
        ListNode fast = head;
        boolean hasCycle = false;

        // 找到相遇点
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }

        if (!hasCycle) return;

        // 找到环的最后一个节点并断开
        slow = head;
        ListNode prev = null;

        while (slow != fast) {
            prev = fast;
            slow = slow.next;
            fast = fast.next;
        }

        // 断开环
        if (prev != null) {
            prev.next = null;
        }
    }
}
```

**复杂度分析：**

+ 检测环：时间 O(n)，空间 O(1)
+ 找到入口：时间 O(n)，空间 O(1)
+ 计算环长：时间 O(n)，空间 O(1)

### [2.3 如何找到两个链表的相交节点？](#_2-3-如何找到两个链表的相交节点)
**问题描述：** 给定两个链表，判断它们是否相交，如果相交返回第一个相交节点的指针。

**面试官可能追问：**

+ 如何计算两个链表的长度差？
+ 能否用哈希表解决？
+ 时间复杂度要求？

**解答思路：**

1. **双指针法：** 两个指针分别遍历两个链表，当其中一个到达尾部时跳转到另一个链表头，最终会在相交点相遇
2. **哈希表法：** 将第一个链表的节点存入哈希表，遍历第二个链表查找

**推荐答案：** 使用双指针法，空间复杂度 O(1)

**代码实现：**

```java
public class IntersectionNode {

    /**
     * 使用双指针法找到相交节点
     * 原理：两个指针分别遍历两个链表，当其中一个到达尾部时跳转到另一个链表头
     * 这样可以消除长度差，最终在相交点相遇
     */
    public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }

        ListNode pA = headA;
        ListNode pB = headB;

        while (pA != pB) {
            pA = pA == null ? headB : pA.next;
            pB = pB == null ? headA : pB.next;
        }

        return pA;
    }

    /**
     * 计算链表长度差方法
     */
    public static ListNode getIntersectionNodeByLength(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }

        // 计算两个链表的长度
        int lenA = getLength(headA);
        int lenB = getLength(headB);

        // 让较长的链表先走差值步数
        while (lenA > lenB) {
            headA = headA.next;
            lenA--;
        }
        while (lenB > lenA) {
            headB = headB.next;
            lenB--;
        }

        // 同时遍历两个链表
        while (headA != null && headB != null) {
            if (headA == headB) {
                return headA;
            }
            headA = headA.next;
            headB = headB.next;
        }

        return null;
    }

    private static int getLength(ListNode head) {
        int length = 0;
        while (head != null) {
            length++;
            head = head.next;
        }
        return length;
    }

    /**
     * 判断两个链表是否相交（不需要返回相交节点）
     */
    public static boolean isIntersected(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return false;
        }

        ListNode pA = headA;
        ListNode pB = headB;

        // 遍历到两个链表的尾部
        while (pA.next != null) {
            pA = pA.next;
        }
        while (pB.next != null) {
            pB = pB.next;
        }

        // 如果尾部节点相同，则相交
        return pA == pB;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(m+n)
+ 空间复杂度：O(1)

## [3. 栈和队列相关算法](#_3-栈和队列相关算法)
### [3.1 如何实现一个最小栈？](#_3-1-如何实现一个最小栈)
**问题描述：** 设计一个支持 push、pop、top 和 getMin 操作的栈，其中 getMin 操作能够获取栈中的最小元素。

**面试官可能追问：**

+ 如何在 O(1) 时间复杂度内实现 getMin？
+ 空间复杂度是多少？
+ 如何处理空栈情况？

**解答思路：**

1. **辅助栈法：** 使用一个辅助栈来存储最小值
2. **差值法：** 存储当前值与最小值的差值

**推荐答案：** 使用辅助栈法，空间复杂度 O(n)

**代码实现：**

```java
import java.util.Stack;

/**
 * 最小栈实现
 * 使用辅助栈存储对应的最小值
 */
class MinStack {
    private Stack<Integer> dataStack;    // 数据栈
    private Stack<Integer> minStack;     // 最小值栈

    public MinStack() {
        dataStack = new Stack<>();
        minStack = new Stack<>();
    }

    /**
     * 入栈操作
     */
    public void push(int val) {
        dataStack.push(val);

        // 如果最小栈为空，直接入栈
        // 否则，入栈当前值和最小栈顶的较小值
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        } else {
            minStack.push(minStack.peek());
        }
    }

    /**
     * 出栈操作
     */
    public void pop() {
        if (dataStack.isEmpty()) {
            throw new IllegalStateException("栈为空，无法出栈");
        }

        dataStack.pop();
        minStack.pop();
    }

    /**
     * 获取栈顶元素
     */
    public int top() {
        if (dataStack.isEmpty()) {
            throw new IllegalStateException("栈为空");
        }
        return dataStack.peek();
    }

    /**
     * 获取最小元素
     */
    public int getMin() {
        if (minStack.isEmpty()) {
            throw new IllegalStateException("栈为空");
        }
        return minStack.peek();
    }

    /**
     * 判断栈是否为空
     */
    public boolean isEmpty() {
        return dataStack.isEmpty();
    }

    /**
     * 栈的大小
     */
    public int size() {
        return dataStack.size();
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(1) 所有操作
+ 空间复杂度：O(n) 最坏情况下

---

### [3.2 如何使用栈实现队列？](#_3-2-如何使用栈实现队列)
**问题描述：** 请用两个栈实现一个队列，支持队列的基本操作 enqueue、dequeue、front 和 empty。

**面试官可能追问：**

+ 为什么需要两个栈？
+ 各个操作的时间复杂度是多少？
+ 如何优化空间使用？

**解答思路：**

1. **两个栈法：** 一个栈用于入队，一个栈用于出队
2. **摊还分析：** 入队 O(1)，出队摊还 O(1)

**推荐答案：** 使用两个栈，输入栈和输出栈

**代码实现：**

```java
import java.util.Stack;

/**
 * 使用两个栈实现队列
 */
class MyQueue {
    private Stack<Integer> inStack;   // 输入栈，用于enqueue
    private Stack<Integer> outStack;  // 输出栈，用于dequeue

    public MyQueue() {
        inStack = new Stack<>();
        outStack = new Stack<>();
    }

    /**
     * 入队操作
     * 时间复杂度：O(1)
     */
    public void enqueue(int x) {
        inStack.push(x);
    }

    /**
     * 出队操作
     * 时间复杂度：摊还O(1)，最坏O(n)
     */
    public int dequeue() {
        if (empty()) {
            throw new IllegalStateException("队列为空，无法出队");
        }

        // 如果输出栈为空，将输入栈的所有元素转移到输出栈
        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }

        return outStack.pop();
    }

    /**
     * 获取队首元素
     * 时间复杂度：摊还O(1)，最坏O(n)
     */
    public int front() {
        if (empty()) {
            throw new IllegalStateException("队列为空，无法获取队首元素");
        }

        if (outStack.isEmpty()) {
            while (!inStack.isEmpty()) {
                outStack.push(inStack.pop());
            }
        }

        return outStack.peek();
    }

    /**
     * 判断队列是否为空
     */
    public boolean empty() {
        return inStack.isEmpty() && outStack.isEmpty();
    }

    /**
     * 获取队列大小
     */
    public int size() {
        return inStack.size() + outStack.size();
    }
}
```

**复杂度分析：**

+ 入队：O(1)
+ 出队：摊还 O(1)，最坏 O(n)
+ 获取队首：摊还 O(1)，最坏 O(n)

## [4. 树相关算法](#_4-树相关算法)
### [4.1 如何实现二叉树的前序、中序、后序遍历？](#_4-1-如何实现二叉树的前序、中序、后序遍历)
**问题描述：** 实现二叉树的遍历算法，包括递归和迭代两种方式。

**面试官可能追问：**

+ 递归和迭代的时间空间复杂度有什么不同？
+ 如何使用栈实现迭代遍历？
+ 层序遍历如何实现？

**解答思路：**

1. **递归方法：** 直观易懂，但有递归深度限制
2. **迭代方法：** 使用显式栈，避免递归栈溢出
3. **Morris 遍历：** O(1) 空间复杂度遍历

**推荐答案：** 掌握递归和迭代两种方法

**代码实现：**

```java
import java.util.*;

/**
 * 二叉树节点定义
 */
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

/**
 * 二叉树遍历实现
 */
public class BinaryTreeTraversal {

    // =================== 递归遍历 ===================

    /**
     * 前序遍历：根 -> 左 -> 右
     */
    public static List<Integer> preorderRecursive(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        preorderHelper(root, result);
        return result;
    }

    private static void preorderHelper(TreeNode node, List<Integer> result) {
        if (node == null) return;

        result.add(node.val);           // 访问根节点
        preorderHelper(node.left, result);   // 遍历左子树
        preorderHelper(node.right, result);  // 遍历右子树
    }

    /**
     * 中序遍历：左 -> 根 -> 右
     */
    public static List<Integer> inorderRecursive(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorderHelper(root, result);
        return result;
    }

    private static void inorderHelper(TreeNode node, List<Integer> result) {
        if (node == null) return;

        inorderHelper(node.left, result);    // 遍历左子树
        result.add(node.val);                // 访问根节点
        inorderHelper(node.right, result);   // 遍历右子树
    }

    /**
     * 后序遍历：左 -> 右 -> 根
     */
    public static List<Integer> postorderRecursive(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        postorderHelper(root, result);
        return result;
    }

    private static void postorderHelper(TreeNode node, List<Integer> result) {
        if (node == null) return;

        postorderHelper(node.left, result);     // 遍历左子树
        postorderHelper(node.right, result);    // 遍历右子树
        result.add(node.val);                   // 访问根节点
    }

    // =================== 迭代遍历 ===================

    /**
     * 前序遍历迭代实现
     */
    public static List<Integer> preorderIterative(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;

        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            result.add(node.val);  // 访问节点

            // 先压入右子树，再压入左子树（因为栈是后进先出）
            if (node.right != null) {
                stack.push(node.right);
            }
            if (node.left != null) {
                stack.push(node.left);
            }
        }

        return result;
    }

    /**
     * 中序遍历迭代实现
     */
    public static List<Integer> inorderIterative(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;

        while (current != null || !stack.isEmpty()) {
            // 到达最左边的节点
            while (current != null) {
                stack.push(current);
                current = current.left;
            }

            // 处理节点
            current = stack.pop();
            result.add(current.val);

            // 处理右子树
            current = current.right;
        }

        return result;
    }

    /**
     * 层序遍历（BFS）
     */
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);

                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }

            result.add(level);
        }

        return result;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(n) 所有遍历方法
+ 空间复杂度： 
    - 递归：O(h) 其中 h 是树的高度
    - 迭代：O(n) 最坏情况下（斜树）
    - Morris 遍历：O(1)

---

### [4.2 如何判断二叉树是否为二叉搜索树？](#_4-2-如何判断二叉树是否为二叉搜索树)
**问题描述：** 给定一个二叉树，判断它是否为二叉搜索树（BST）。

**面试官可能追问：**

+ 什么是二叉搜索树的性质？
+ 如何处理重复元素？
+ 有几种判断方法？

**解答思路：**

1. **递归法：** 对每个节点设定合理范围
2. **中序遍历法：** BST 的中序遍历是有序的

**推荐答案：** 使用中序遍历检查是否有序

**代码实现：**

```java
public class ValidateBinarySearchTree {

    /**
     * 方法1：中序遍历法
     * BST的中序遍历结果应该是严格递增的
     */
    public static boolean isValidBSTInorder(TreeNode root) {
        List<Integer> inorder = new ArrayList<>();
        inorderTraversal(root, inorder);

        // 检查中序遍历结果是否严格递增
        for (int i = 1; i < inorder.size(); i++) {
            if (inorder.get(i) <= inorder.get(i - 1)) {
                return false;
            }
        }

        return true;
    }

    private static void inorderTraversal(TreeNode node, List<Integer> result) {
        if (node == null) return;

        inorderTraversal(node.left, result);
        result.add(node.val);
        inorderTraversal(node.right, result);
    }

    /**
     * 方法2：中序遍历迭代法（最优）
     * 边遍历边检查，不需要额外存储空间
     */
    public static boolean isValidBSTInorderIterative(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;
        Integer prevValue = null;

        while (current != null || !stack.isEmpty()) {
            // 到达最左边的节点
            while (current != null) {
                stack.push(current);
                current = current.left;
            }

            // 处理节点
            current = stack.pop();

            // 检查是否严格递增
            if (prevValue != null && current.val <= prevValue) {
                return false;
            }

            prevValue = current.val;
            current = current.right;
        }

        return true;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(n)
+ 空间复杂度：O(h) 其中 h 是树的高度

## [5. 排序算法相关](#_5-排序算法相关)
### [5.1 实现常见的排序算法](#_5-1-实现常见的排序算法)
**问题描述：** 实现常见的排序算法，包括快速排序、归并排序、堆排序等。

**面试官可能追问：**

+ 各种排序算法的时间空间复杂度？
+ 什么情况下选择哪种排序算法？
+ 如何优化快速排序？

**解答思路：**

1. **快速排序：** 分治思想，平均 O(nlogn)
2. **归并排序：** 分治思想，稳定排序
3. **堆排序：** 基于堆数据结构，O(nlogn)

**推荐答案：** 掌握快速排序和归并排序

**代码实现：**

```java
import java.util.Arrays;

/**
 * 排序算法实现集合
 */
public class SortingAlgorithms {

    /**
     * 快速排序
     */
    public static void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) return;
        quickSortHelper(arr, 0, arr.length - 1);
    }

    private static void quickSortHelper(int[] arr, int low, int high) {
        if (low < high) {
            // 获取分区点
            int pi = partition(arr, low, high);

            // 递归排序左右两部分
            quickSortHelper(arr, low, pi - 1);
            quickSortHelper(arr, pi + 1, high);
        }
    }

    /**
     * 分区函数
     */
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];  // 选择最后一个元素作为基准
        int i = low - 1;        // 较小元素的索引

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    }

    /**
     * 归并排序
     */
    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length <= 1) return;

        int[] temp = new int[arr.length];
        mergeSortHelper(arr, temp, 0, arr.length - 1);
    }

    private static void mergeSortHelper(int[] arr, int[] temp, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            // 分别对左右两部分进行排序
            mergeSortHelper(arr, temp, left, mid);
            mergeSortHelper(arr, temp, mid + 1, right);

            // 合并两个有序部分
            merge(arr, temp, left, mid, right);
        }
    }

    /**
     * 合并两个有序子数组
     */
    private static void merge(int[] arr, int[] temp, int left, int mid, int right) {
        // 复制数据到临时数组
        System.arraycopy(arr, left, temp, left, right - left + 1);

        int i = left;      // 左半部分的起始索引
        int j = mid + 1;   // 右半部分的起始索引
        int k = left;      // 合并后的起始索引

        // 合并过程
        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                arr[k++] = temp[i++];
            } else {
                arr[k++] = temp[j++];
            }
        }

        // 处理剩余元素
        while (i <= mid) {
            arr[k++] = temp[i++];
        }
        while (j <= right) {
            arr[k++] = temp[j++];
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
```

**复杂度分析：**

+ 快速排序：平均 O(nlogn)，最坏 O(n²)，空间 O(logn)
+ 归并排序：稳定 O(nlogn)，空间 O(n)

---

### [5.2 如何实现 Top K 问题？](#_5-2-如何实现-top-k-问题)
**问题描述：** 如何从一个数组中找出最大的 K 个元素？

**面试官可能追问：**

+ 有几种解法？各自的优缺点？
+ 如何处理大数据量？
+ 时间复杂度和空间复杂度要求？

**解答思路：**

1. **排序法：** 先排序再取前 K 个
2. **堆方法：** 维护一个大小为 K 的最小堆
3. **分治法：** 使用快速排序的分区思想

**推荐答案：** 最小堆法，时间复杂度 O(nlogk)

**代码实现：**

```java
import java.util.*;

/**
 * Top K问题解决方案
 */
public class TopKProblem {

    /**
     * 方法2：最小堆方法
     * 维护一个大小为K的最小堆
     */
    public static List<Integer> topKByMinHeap(int[] arr, int k) {
        if (arr == null || arr.length == 0 || k <= 0) {
            return new ArrayList<>();
        }

        if (k >= arr.length) {
            List<Integer> result = new ArrayList<>();
            Arrays.sort(arr);
            for (int num : arr) {
                result.add(num);
            }
            return result;
        }

        // 使用优先队列实现最小堆
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        // 首先将前K个元素加入堆
        for (int i = 0; i < k; i++) {
            minHeap.offer(arr[i]);
        }

        // 遍历剩余元素，如果比堆顶大，则替换
        for (int i = k; i < arr.length; i++) {
            if (arr[i] > minHeap.peek()) {
                minHeap.poll();       // 移除最小元素
                minHeap.offer(arr[i]); // 加入当前元素
            }
        }

        // 将堆中的元素转换为列表
        List<Integer> result = new ArrayList<>(minHeap);
        Collections.sort(result, Collections.reverseOrder()); // 降序排列
        return result;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(nlogk)
+ 空间复杂度：O(k)

## [6. 搜索算法相关](#_6-搜索算法相关)
### [6.1 如何实现二分查找？](#_6-1-如何实现二分查找)
**问题描述：** 实现二分查找算法，能够在有序数组中快速查找目标值。

**面试官可能追问：**

+ 二分查找的前提条件是什么？
+ 如何处理重复元素？
+ 有哪些变种问题？

**解答思路：**

1. **标准二分查找：** 查找目标值
2. **查找左边界：** 第一个大于等于目标值的位置
3. **查找右边界：** 最后一个小于等于目标值的位置

**推荐答案：** 掌握标准二分查找和边界查找

**代码实现：**

```java
/**
 * 二分查找算法实现
 */
public class BinarySearch {

    /**
     * 标准二分查找
     */
    public static int binarySearch(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    /**
     * 查找第一个等于目标值的索引
     */
    public static int findFirstEqualOrGreater(int[] arr, int target) {
        if (arr == null || arr.length == 0) {
            return -1;
        }

        int left = 0;
        int right = arr.length;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left < arr.length && arr[left] == target ? left : -1;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(log n)
+ 空间复杂度：O(1)

## [7. 动态规划相关](#_7-动态规划相关)
### [7.1 如何解决斐波那契数列问题？](#_7-1-如何解决斐波那契数列问题)
**问题描述：** 计算斐波那契数列的第 n 项，并优化算法效率。

**面试官可能追问：**

+ 斐波那契数列的递推公式是什么？
+ 有哪些不同的解法？
+ 如何优化空间复杂度？

**解答思路：**

1. **递归方法：** 直观但效率低
2. **动态规划：** 优化时间复杂度
3. **矩阵快速幂：** 最优时间复杂度

**推荐答案：** 掌握动态规划方法

**代码实现：**

```java
/**
 * 斐波那契数列问题解决方案
 */
public class Fibonacci {

    /**
     * 方法3：动态规划（自底向上）
     * 时间复杂度：O(n)，空间复杂度：O(1)
     */
    public static long fibonacciDP(int n) {
        if (n <= 1) {
            return n;
        }

        long prev = 0;
        long curr = 1;

        for (int i = 2; i <= n; i++) {
            long next = prev + curr;
            prev = curr;
            curr = next;
        }

        return curr;
    }

    /**
     * 方法4：快速倍增法（最优）
     * 时间复杂度：O(log n)，空间复杂度：O(log n)
     */
    public static long fibonacciFastDoubling(int n) {
        return fibonacciFastDoublingHelper(n)[0];
    }

    private static long[] fibonacciFastDoublingHelper(int n) {
        if (n == 0) {
            return new long[]{0, 1};
        }

        long[] fib = fibonacciFastDoublingHelper(n / 2);
        long a = fib[0];  // F(k)
        long b = fib[1];  // F(k+1)

        long c = a * (2 * b - a);
        long d = a * a + b * b;

        if (n % 2 == 0) {
            return new long[]{c, d};
        } else {
            return new long[]{d, c + d};
        }
    }
}
```

**复杂度分析：**

+ 动态规划：时间 O(n)，空间 O(1)
+ 快速倍增法：时间 O(log n)，空间 O(log n)

---

### [7.2 如何解决背包问题？](#_7-2-如何解决背包问题)
**问题描述：** 给定一组物品，每个物品有重量和价值，以及一个容量为 W 的背包，求能获得的最大价值。

**面试官可能追问：**

+ 背包问题的变种有哪些？
+ 如何优化空间复杂度？
+ 如何处理零一背包和完全背包？

**解答思路：**

1. **零一背包：** 每个物品只能选一次
2. **完全背包：** 每个物品可以选无限次
3. **多重背包：** 每个物品有使用次数限制

**推荐答案：** 掌握零一背包的动态规划解法

**代码实现：**

```java
/**
 * 背包问题解决方案
 */
public class KnapsackProblem {

    /**
     * 零一背包问题（优化空间复杂度）
     * 使用一维数组，从右向左更新
     */
    public static int knapSack01Optimized(int W, int[] weight, int[] value) {
        int n = weight.length;
        if (n == 0 || W == 0) {
            return 0;
        }

        // dp[w] 表示容量为w时的最大价值
        int[] dp = new int[W + 1];

        // 处理每个物品
        for (int i = 0; i < n; i++) {
            // 从右向左更新，确保每个物品只被使用一次
            for (int w = W; w >= weight[i]; w--) {
                dp[w] = Math.max(dp[w], dp[w - weight[i]] + value[i]);
            }
        }

        return dp[W];
    }

    /**
     * 完全背包问题
     * 每个物品可以选无限次
     */
    public static int knapSackUnbounded(int W, int[] weight, int[] value) {
        int n = weight.length;
        if (n == 0 || W == 0) {
            return 0;
        }

        // dp[w] 表示容量为w时的最大价值
        int[] dp = new int[W + 1];

        // 处理每个物品
        for (int i = 0; i < n; i++) {
            // 从左向右更新，允许重复使用同一个物品
            for (int w = weight[i]; w <= W; w++) {
                dp[w] = Math.max(dp[w], dp[w - weight[i]] + value[i]);
            }
        }

        return dp[W];
    }
}
```

**复杂度分析：**

+ 零一背包：时间 O(nW)，空间 O(W)
+ 完全背包：时间 O(nW)，空间 O(W)

## [8. 哈希表相关](#_8-哈希表相关)
### [8.1 如何设计一个 LRU 缓存？](#_8-1-如何设计一个-lru-缓存)
**问题描述：** 设计并实现一个 LRU 缓存，支持 get 和 put 操作。

**面试官可能追问：**

+ LRU 的原理是什么？
+ 如何同时实现快速查找和最近最少使用？
+ 时间复杂度的要求？

**解答思路：**

1. **哈希表：** 快速查找 O(1)
2. **双向链表：** 按访问时间排序 O(1)

**推荐答案：** 使用 LinkedHashMap 或自定义哈希表+链表

**代码实现：**

```java
import java.util.HashMap;
import java.util.Map;

/**
 * LRU缓存实现
 */
class LRUCache {
    private int capacity;
    private Map<Integer, Node> cache;
    private Node head;
    private Node tail;

    // 双向链表节点
    private class Node {
        int key;
        int value;
        Node prev;
        Node next;

        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();

        // 初始化双向链表的头尾节点
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }

    /**
     * 获取值
     */
    public int get(int key) {
        Node node = cache.get(key);
        if (node == null) {
            return -1;
        }

        // 将访问的节点移到链表头部
        moveToHead(node);
        return node.value;
    }

    /**
     * 放入值
     */
    public void put(int key, int value) {
        Node node = cache.get(key);

        if (node != null) {
            // 更新值并移到头部
            node.value = value;
            moveToHead(node);
        } else {
            // 新节点
            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            addToHead(newNode);

            // 检查容量
            if (cache.size() > capacity) {
                // 移除最久未使用的节点
                Node lru = removeTail();
                cache.remove(lru.key);
            }
        }
    }

    /**
     * 将节点移到头部
     */
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }

    /**
     * 添加节点到头部
     */
    private void addToHead(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }

    /**
     * 移除节点
     */
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * 移除尾部节点
     */
    private Node removeTail() {
        Node lru = tail.prev;
        removeNode(lru);
        return lru;
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(1) for both get and put operations
+ 空间复杂度：O(capacity)

## [9. 图论相关](#_9-图论相关)
### [9.1 如何实现图的深度优先搜索（DFS）和广度优先搜索（BFS）？](#_9-1-如何实现图的深度优先搜索-dfs-和广度优先搜索-bfs)
**问题描述：** 实现图的深度优先搜索和广度优先搜索算法。

**面试官可能追问：**

+ DFS 和 BFS 的区别是什么？
+ 如何处理有向图和无向图？
+ 如何避免重复访问？

**解答思路：**

1. **DFS：** 使用递归或栈，访问路径尽可能深
2. **BFS：** 使用队列，按层次访问

**推荐答案：** 掌握两种搜索方法的实现和应用场景

**代码实现：**

```java
import java.util.*;

/**
 * 图的DFS和BFS实现
 */
public class GraphTraversal {

    /**
     * 邻接表表示的图
     */
    static class Graph {
        private int vertices;
        private LinkedList<Integer>[] adj;

        @SuppressWarnings("unchecked")
        public Graph(int vertices) {
            this.vertices = vertices;
            this.adj = new LinkedList[vertices];
            for (int i = 0; i < vertices; i++) {
                adj[i] = new LinkedList<>();
            }
        }

        public void addEdge(int u, int v) {
            adj[u].add(v);
        }

        // 获取邻接表
        public LinkedList<Integer>[] getAdjacencyList() {
            return adj;
        }
    }

    /**
     * 深度优先搜索（DFS）
     */
    public static void dfs(Graph graph, int start) {
        boolean[] visited = new boolean[graph.vertices];
        System.out.print("DFS: ");
        dfsRecursive(graph, start, visited);
        System.out.println();
    }

    private static void dfsRecursive(Graph graph, int vertex, boolean[] visited) {
        visited[vertex] = true;
        System.out.print(vertex + " ");

        // 递归访问所有相邻节点
        for (int neighbor : graph.getAdjacencyList()[vertex]) {
            if (!visited[neighbor]) {
                dfsRecursive(graph, neighbor, visited);
            }
        }
    }

    /**
     * 深度优先搜索（迭代版本）
     */
    public static void dfsIterative(Graph graph, int start) {
        boolean[] visited = new boolean[graph.vertices];
        Stack<Integer> stack = new Stack<>();

        stack.push(start);
        visited[start] = true;
        System.out.print("DFS (迭代): ");

        while (!stack.isEmpty()) {
            int current = stack.pop();
            System.out.print(current + " ");

            // 将未访问的相邻节点压入栈
            for (int neighbor : graph.getAdjacencyList()[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
        System.out.println();
    }

    /**
     * 广度优先搜索（BFS）
     */
    public static void bfs(Graph graph, int start) {
        boolean[] visited = new boolean[graph.vertices];
        Queue<Integer> queue = new LinkedList<>();

        visited[start] = true;
        queue.offer(start);
        System.out.print("BFS: ");

        while (!queue.isEmpty()) {
            int current = queue.poll();
            System.out.print(current + " ");

            // 将所有未访问的相邻节点加入队列
            for (int neighbor : graph.getAdjacencyList()[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
        System.out.println();
    }

    /**
     * 计算连通分量
     */
    public static int countConnectedComponents(Graph graph) {
        boolean[] visited = new boolean[graph.vertices];
        int count = 0;

        for (int i = 0; i < graph.vertices; i++) {
            if (!visited[i]) {
                dfsComponent(graph, i, visited);
                count++;
            }
        }

        return count;
    }

    private static void dfsComponent(Graph graph, int vertex, boolean[] visited) {
        visited[vertex] = true;

        for (int neighbor : graph.getAdjacencyList()[vertex]) {
            if (!visited[neighbor]) {
                dfsComponent(graph, neighbor, visited);
            }
        }
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(V + E) 其中 V 是顶点数，E 是边数
+ 空间复杂度：O(V) 用于访问标记和栈/队列

## [10. 字符串算法](#_10-字符串算法)
### [10.1 如何实现字符串的最长公共子序列？](#_10-1-如何实现字符串的最长公共子序列)
**问题描述：** 给定两个字符串，返回它们的最长公共子序列（LCS）的长度。

**面试官可能追问：**

+ 什么是动态规划的思想？
+ 如何优化空间复杂度？
+ 如何输出具体的子序列？

**解答思路：**

1. **动态规划：** dp[i][j] 表示 s1[0..i-1] 和 s2[0..j-1] 的 LCS 长度
2. **空间优化：** 使用滚动数组

**推荐答案：** 掌握动态规划解法

**代码实现：**

```java
/**
 * 最长公共子序列问题
 */
public class LongestCommonSubsequence {

    /**
     * 动态规划求解LCS长度
     */
    public static int longestCommonSubsequence(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();

        if (m == 0 || n == 0) {
            return 0;
        }

        // dp[i][j] 表示 s1[0..i-1] 和 s2[0..j-1] 的 LCS 长度
        int[][] dp = new int[m + 1][n + 1];

        // 填充 dp 表
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    /**
     * 优化空间复杂度的版本
     */
    public static int longestCommonSubsequenceOptimized(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();

        if (m == 0 || n == 0) {
            return 0;
        }

        // 使用滚动数组优化空间
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    curr[j] = prev[j - 1] + 1;
                } else {
                    curr[j] = Math.max(prev[j], curr[j - 1]);
                }
            }
            // 交换数组
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }

        return prev[n];
    }

    /**
     * 获取具体的LCS字符串
     */
    public static String getLongestCommonSubsequence(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();

        int[][] dp = new int[m + 1][n + 1];

        // 填充 dp 表
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // 回溯获取 LCS 字符串
        StringBuilder sb = new StringBuilder();
        int i = m, j = n;

        while (i > 0 && j > 0) {
            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                sb.append(s1.charAt(i - 1));
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        return sb.reverse().toString();
    }
}
```

**复杂度分析：**

+ 时间复杂度：O(m*n)
+ 空间复杂度：O(m*n) 或 O(min(m,n)) 优化后

---

## [总结](#总结)
本面试题集合涵盖了 Java 算法面试的核心领域：

**核心概念包括：**

+ 数组操作（查找、排序、滑动窗口）
+ 链表算法（反转、检测环、相交）
+ 栈和队列（最小栈、队列实现）
+ 树结构（遍历、二叉搜索树）
+ 排序算法（快速排序、归并排序、堆排序）
+ 搜索算法（二分查找及其变种）
+ 动态规划（斐波那契、背包问题）
+ 图论（DFS、BFS）
+ 字符串算法（最长公共子序列）
+ 哈希表应用（LRU 缓存）

**面试要点：**

1. 理解各种算法的适用场景
2. 掌握时间空间复杂度的分析方法
3. 能够根据问题特点选择合适的算法
4. 熟悉常见的数据结构和操作
5. 能够优化算法性能

这些题目覆盖了算法面试的主要领域，每个题目都包含了完整的代码实现、详细注释、多种解法对比和复杂度分析，有助于全面提升算法面试准备效果。



