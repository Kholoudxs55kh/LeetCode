const underTwenty = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen'
]
const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety'
]
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) return 'Zero'

    function generate(num) {
        switch (true) {
            case num === 0:
                return ''
            case num < 20:
                return underTwenty[num] + ' '
            case num < 100:
                return tens[Math.floor(num / 10)] + ' ' + generate(num % 10)
            case num < 1000:
                return generate(Math.floor(num / 100)) + 'Hundred ' + generate(num % 100)
            case num < 1000000:
                return generate(Math.floor(num / 1000)) + 'Thousand ' + generate(num % 1000)
            case num < 1000000000:
                return generate(Math.floor(num / 1000000)) + 'Million ' + generate(num % 1000000)
            case num <= 2147483647:
                return (
                    generate(Math.floor(num / 1000000000)) + 'Billion ' + generate(num % 1000000000)
                )
            default:
                return ''
        }
    }

    return generate(num).trim()
}
