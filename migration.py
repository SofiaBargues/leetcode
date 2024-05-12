import pathlib
import re
import os


def main():
    filelist = pathlib.Path("leetcode").glob("*.ts")
    for file_name in filelist:
        # Files have this format [number]-[problem name].[extension]
        # Rename the files by adding 0s in front so that the number alwyas have 4 digits
        # Example: 1-two-sum.py -> 0001-two-sum.py # Example
        # Example: 2231-add-two-numbers.py -> 2231-add-two-numbers.py
        file_name = file_name.name
        # Split the filename by "-"
        filename_split = file_name.split("-")
        if len(filename_split) < 2:
            continue
        number = int(filename_split[0])
        problem_name = "-".join(filename_split[1:])
        new_number = f"{number:04d}"
        new_file_name = f"{new_number}-{problem_name}"
        print(f"Renaming {file_name} to {new_file_name}")
        os.rename("leetcode/" + file_name, "leetcode/" + new_file_name)


if __name__ == "__main__":
    main()
