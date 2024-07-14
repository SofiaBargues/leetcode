from collections import defaultdict, Counter
class Solution:

    def parseToArr(self, formula: str) -> Tuple[List[Union[str, int]], Dict[int, int]]:
        # Split in an array with a parser
        
        # Create parentheses pairs
        parsed = []
        par_pair = {}
        i = 0
        open_par = []
        while i < len(formula):
            # Parse number
            if formula[i].isnumeric():
                numacc = formula[i]
                while i<len(formula)-1 and formula[i+1].isnumeric():
                    numacc+=formula[i+1]
                    i+=1
                parsed.append(int(numacc))
            # Parse open parentheses
            elif formula[i] == "(":
                open_par.append(len(parsed))
                parsed.append("(")
            elif formula[i] == ")":
                open_i = open_par.pop()
                par_pair[open_i] = len(parsed)
                parsed.append(")")
            else:
                # Is element
                elacc = formula[i]
                while i<len(formula)-1  and (ord('a') <= ord(formula[i+1]) <= ord('z')):
                    # Add lowercase letters to build an element
                    elacc+=formula[i+1]
                    i+=1
                parsed.append(elacc)
            i+=1
            

        return parsed, par_pair


    def countOfAtoms(self, formula: str) -> str:
        parsed, par_pair = self.parseToArr(formula)

        # Dfs entering parentheses
        def dfs(s, e, multiplier):
            if s>e:
                return Counter()        

            # Build counter
            curr_dict = Counter()
            i = s
            while i <= e:
                if i in par_pair:
                    new_s = i
                    new_e = par_pair[i]
                    i = new_e+1 # advance to right of next parentheses
                    new_mult = 1
                    if new_e + 1 < len(parsed) and isinstance(parsed[new_e+1], int):
                        new_mult = parsed[new_e+1]
                        i+=1
                    inner_dict = dfs(new_s+1, new_e-1, multiplier*new_mult)
                    # TODO: Merge dicts and advance index
                    curr_dict += inner_dict

                else:
                    # Add curr to dict
                    element = parsed[i]
                    if i+1 < len(parsed) and isinstance(parsed[i+1], int):
                        curr_dict[element] += multiplier * parsed[i+1]
                        i+=1
                    else:
                        curr_dict[element] += multiplier
                    i+=1
            return curr_dict
                    
        res = dfs(0, len(parsed)-1, 1)
        return "".join([el + (str(count) if count > 1 else "" ) for el, count in sorted(res.items())])