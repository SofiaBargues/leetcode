from collections import Counter


class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        for char in ["!", "?", "'", ",", ";", "."]:
            paragraph = paragraph.replace(char, " ")
        banned = set(banned)
        word_count = Counter(
            word.lower()
            for word in paragraph.split(" ")
            if word and word.lower() not in banned
        )

        return word_count.most_common(1)[0][0]
