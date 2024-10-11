/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Deque {
    constructor() { 
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    
    isEmpty() {
        return this.front == this.rear;
    }
    
    print() {
        for(let i = this.front; i < this.rear; ++i)
            console.log(this.data[i]);
    }

    length() {
        return this.rear - this.front;    
    }

    // Just return the front element
    // Time: O(1)
    getFront() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.data[this.front];
    }

    getRear() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.data[this.rear - 1];
    }

    insertFront(element) {
        if(this.front > 0) {
            this.front--;
            this.data[this.front] = element;
        }
        else {
            this.data.unshift(element);
            this.rear++;
        }
    }

    // Add the 'element' to the rear of the queue
    // Time: O(1)
    insertRear(element) {
        this.data[this.rear] = element;
        this.rear++;
    }
    
    // Delete the front element and return the deleted element
    // Time: O(1)
    popFront() {
        if(this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        let frontElement = this.data[this.front];
        this.front++;
        return frontElement;
    }
    
    popRear() {
        if(this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        let rearElement = this.data[this.rear - 1];
        this.rear--;
        return rearElement;
    }
    
    
}

var maxSlidingWindow = function(nums, k) {
    let q = new Deque();
    let ans = [];

    for(let i = 0; i < k; ++i) {
        while(!q.isEmpty() && nums[q.getRear()] <= nums[i])
            q.popRear();
        q.insertRear(i);
    }

    ans.push(nums[q.getFront()]);

    for(let rm = 0, ad = k; ad < nums.length; rm++, ad++) {

        // Let's take care of adding first
        while(!q.isEmpty() && nums[q.getRear()] <= nums[ad])
            q.popRear();
        q.insertRear(ad);

        // Let's remove the relevant element
        if(q.getFront() == rm)
            q.popFront();

        ans.push(nums[q.getFront()]);
    }

    return ans;
};