import glob, re, os

files = list(set(glob.glob('src/pages/*Lesson*.jsx') + glob.glob('src/pages/Childrens*.jsx')))
files.sort()

res = []
res.append("# English Fluency Lesson Vocabulary & Sentences")
res.append("\nHere is a list of all vocabulary words and sentences for each lesson extracted from your codebase.\n")

for f in files:
    content = open(f, encoding='utf-8').read()
    words_match = re.search(r'const WORDS = \[\s*(.*?)\s*\];', content, re.DOTALL)
    sents_match = re.search(r'const SENTS = \[\s*(.*?)\s*\];', content, re.DOTALL)
    fname = os.path.basename(f).replace('.jsx', '')
    
    res.append(f"## {fname}")
    
    res.append("### Words:")
    if words_match:
        for line in words_match.group(1).split('\n'):
            match = re.search(r'w:\s*[\'"`]+([^`\'"]+)[\'"`]+', line)
            if match:
                res.append(f"- {match.group(1)}")
    else:
         res.append("- (No words found)")
                
    res.append("\n### Sentences:")
    if sents_match:
        for line in sents_match.group(1).split('\n'):
            match = re.search(r'plain:\s*[\'"`]+([^`\'"]+)[\'"`]+', line)
            if match:
                res.append(f"- {match.group(1)}")
    else:
        res.append("- (No sentences found)")
                
    res.append("\n---\n")

with open('extracted.md', 'w', encoding='utf-8') as out:
    out.write('\n'.join(res))
print('Done!')
