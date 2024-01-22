void reverseString(char* s, int sSize) {
    char* start = s;
    char* end = s + sSize - 1;

    while (start < end) {
        char temp = *end;
        *end = *start;
        *start = temp;

        end--;
        start++;
    }
}
