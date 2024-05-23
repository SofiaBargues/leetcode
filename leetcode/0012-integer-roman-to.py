num_to_char = {
    "1": "I",
    "4": "IV",
    "5": "V",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M",
}

place_to_val = {0: 1, 1: 10, 2: 100, 3: 1000}


class Solution:
    def intToRoman(self, num: int) -> str:

        roman = ""

        s_num = str(num)

        for i, digit in enumerate(s_num):
            order = place_to_val[(len(s_num) - 1 - i)]
            roman += self.convert_digit(int(digit), order)

        return roman

    @staticmethod
    def convert_digit(digit: int, order: int) -> str:
        if digit in [9, 4]:
            return num_to_char[str(digit * order)]
        converted = ""
        if digit >= 5:
            converted += num_to_char[str(5 * order)]
            digit -= 5
        converted += num_to_char[str(order)] * digit
        return converted
