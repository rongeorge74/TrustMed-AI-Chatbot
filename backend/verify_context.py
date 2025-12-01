import os
import subprocess
import json
import sys

def run_query(query, session_file="chat_history.json"):
    print(f"\n--- Running query: '{query}' ---")
    cmd = [sys.executable, "anti_test.py", "--query", query, "--session_file", session_file]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print("Error running command:")
        print(result.stderr)
    return result.stdout

def main():
    session_file = "test_history.json"
    if os.path.exists(session_file):
        os.remove(session_file)

    
    out1 = run_query("what are the signs of diabetes", session_file)
    print("Output 1 length:", len(out1))
    
    
    out2 = run_query("How to prevent it", session_file)
    print("Output 2 length:", len(out2))
    
   
    if "[Context] Rewrote query:" in out2:
        print("SUCCESS: Context rewriting triggered.")
       
        if "diabetes" in out2.lower():
             print("SUCCESS: Rewritten query likely contains 'diabetes'.")
        else:
             print("WARNING: Rewritten query might not contain 'diabetes'. Check output.")
    else:
        print("WARNING: Context rewriting NOT triggered (or print statement missed).")

    print("\n--- Output 2 Snippet ---")
    print(out2[:500])

if __name__ == "__main__":
    main()
