int lengthOfLastWord(char* s) {
    char *vector = strtok(s, \ \);
    char *lastWord;

    while (vector) {
        lastWord = vector;
        vector = strtok(NULL, \ \);
    };
    if (lastWord) {
        return strlen(lastWord);
    };

    return 0;
}