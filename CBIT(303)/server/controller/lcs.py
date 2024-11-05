def lcs_length(s1, s2):
    m, n = len(s1), len(s2)
    L = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i - 1] == s2[j - 1]:
                L[i][j] = L[i - 1][j - 1] + 1
            else:
                L[i][j] = max(L[i - 1][j], L[i][j - 1])
    
    return L

# Given DNA sequences
s1 = "ACCGGTCGAGTGCGCGGAAGCCGGCCGAA"
s2 = "GTCGTTCGGAATGCCGTTGCTCTGTAAA"

# Compute the LCS table
lcs_table = lcs_length(s1, s2)
lcs_table