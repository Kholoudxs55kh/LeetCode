
var MinStack = function() {
    this.stack = [];
    this.Minstack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.Minstack.length == 0 || val <= this.Minstack[this.Minstack.length - 1]) {
        this.Minstack.push(val);
    }
};

/**
 * @return {void}
 
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
        if (this.stack[this.stack.length - 1] == this.Minstack[this.Minstack.length - 1]) {
            this.Minstack.pop();
        } this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     if (this.stack.length) {
        return (this.stack[this.stack.length - 1])
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.Minstack.length) {
        return (this.Minstack[this.Minstack.length - 1])
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
