
var RandomizedSet = function() {
    this.value = new Map();
    this.Set = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.value.has(val)) return false;

    this.Set.push(val);
    this.value.set(val, this.Set.length - 1);
    
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.value.has(val)) return false;
    
    const removed = this.value.get(val);
    this.value.set(this.Set[this.Set.length - 1], removed);
    this.value.delete(val);
    this.Set[removed] = this.Set[this.Set.length - 1];
    this.Set[this.Set.length - 1] = val;
    this.Set.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.Set[Math.floor(Math.random() * this.Set.length)]; // floor not ceil
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
