from os import environ as environment

#env = environment["CurrentEnvironment"];

"""
todo: journal not found:
if(env == "prod"):
    from systemd import journal
"""
def log(stmnt):
    """
    if(env == "prod"):
        journal.write(stmnt);
    """
    print(stmnt);

def writeToFile(contents):
    f = open("result.html", "w");
    f.write(contents);
    f.close();
    print("Wrote to file");