from collections import defaultdict

class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        childs = defaultdict(list)
        parents = defaultdict(set)
        
        has_prereq = set()
        for course_to, course_from in prerequisites:
            childs[course_from].append(course_to)
            parents[course_to].add(course_from)
            has_prereq.add(course_to)

        start_courses = [i for i in range(numCourses) if i not in has_prereq]
        course_order = []

        while len(start_courses)> 0:
            course_from = start_courses.pop()
            course_order.append(course_from)
            if len(course_order) == numCourses:
                break

            for course_to in childs[course_from]:
                parents[course_to].remove(course_from)
                if len(parents[course_to]) == 0:
                    start_courses.append(course_to)
        
        return course_order if len(course_order) == numCourses else []