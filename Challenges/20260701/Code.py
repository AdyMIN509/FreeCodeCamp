def get_lucky_number(name):
    vals = name.lower().split(" ")
    v = "aeuoiy"
    L = []
    for nm in vals:
        vc = 0
        cc = 0
        for c in nm:
            vc += (1 if c in v else 0)
            cc += (0 if c in v else 1)
        L.append([vc,cc])
    sv = min(L[0][0],L[1][0])
    sc = min(L[0][1],L[1][1])
    lv = max(L[0][0],L[1][0])
    lc = max(L[0][1],L[1][1])
    ss = min(len(vals[0]),len(vals[1]))
    ls = max(len(vals[0]),len(vals[1]))
    out = (lv * lc * ls - sv * sc * ss)
    return 13 if out == 0 else out

print(get_lucky_number("Chloe Perez"))