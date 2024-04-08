/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (students.length) {
        if (students[0] === sandwiches[0]) {
            sandwiches.shift()
            students.shift()
        }
        else {
            let out = students.shift()
            students.push(out)
        }
        if (!students.length ||
            !sandwiches.length || 
            (!students.includes(sandwiches[0]))) break
        
    }   

    return students.length; 
};