class Solution {
    func uniqueMorseRepresentations(_ words: [String]) -> Int {
        let dict: [Character: String] = [
            "a": ".-", "b": "-...", "c": "-.-.", "d": "-..",
            "e": ".", "f": "..-.", "g": "--.", "h": "....",
            "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
            "m": "--", "n": "-.", "o": "---", "p": ".--.",
            "q": "--.-", "r": ".-.", "s": "...", "t": "-",
            "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
            "y": "-.--", "z": "--.."
        ]
        
        var uniqueTransformations = Set<String>()
        
        for word in words {
            let morseWord = word.compactMap { dict[$0] }.joined()
            uniqueTransformations.insert(morseWord)
        }
        
        return uniqueTransformations.count
    }
}