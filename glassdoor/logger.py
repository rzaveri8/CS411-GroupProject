from os import environ as environment

env = environment["CurrentEnvironment"];


if(env == "prod"):
    from systemd import journal

def log(stmnt):
    if(env == "prod"):
        journal.write(stmnt);
    else:
        print(stmnt);