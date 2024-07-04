You're given a list of recent appointment bookings with beginning and end times, expressed as hours from 0 to 23. 
Write a function findScheduleConflicts that will returns a list of all the unique appointments that are in conflict with each other, i.e. have overlapping start and end times.

input: [[2,3], [1,2], [3,5], [4,6]]
output: [[3,5], [4,6]]