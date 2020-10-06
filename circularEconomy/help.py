def get_change(current, previous):
    if current == previous:
        return 0
    try:
        return format(((float(current) - float(previous)) / float(previous)) * 100.0, '.2f')
    except ZeroDivisionError:
        return float('inf')

def maxPer(l):
    m = max(l)
    if m > 0:
        return m
    else:
        return 0