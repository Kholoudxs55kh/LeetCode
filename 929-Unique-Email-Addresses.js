/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let set = new Set()

    for (email of emails) {
        let splitted = email.split("@")
        let address = splitted[0].split("+")[0]

        set.add(address.replace(/[.]/g, '') + "@" + splitted[1] )
    }

    return set.size
};