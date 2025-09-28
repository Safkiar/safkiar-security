export default function LinuxCommands() {
    return (
        <div class="script_container">

            <div class="introduction">
                <h3>All linux console commands:</h3>
                <div className="t">whoami - shows user</div>
                <div className="t">who am i - shows user with additional information</div>
                <div className="t">hostname - shows name of the machine</div>
                <div className="t">passwd - change current user password</div>
                <div className="t">passwd (userid) - change selected user password</div>
                <div className="t">cd (directory)- change directory</div>
                <div className="t">cd .. - parent directory</div>
                <div className="t">cd - - previous directory</div>
                <div className="t">pwd - print working directory</div>
                <div className="t">ls - lists all the directories</div>
                <div className="t">ls -l - lists all the directories with properties</div>
                <div className="t">ls -l (filename) - lists file with properties</div>
                <div className="t">touch (filename) - create a file</div>
                <div className="t">mkdir (filename) - create a directory</div>
                <div className="t">cp (old dir) (new dir) - copy a file</div>
                <div className="t">cp -R (filename) (from location) (to location) - copy a directory with other files</div>
                <div className="t">find . -name "(file name)" - szukaj w biężącym kataloru po nazwie</div>
                <div className="t">find / -name "(file name)" - szukaj w całym systemie po nazwie</div>
                <div className="t">locate (file name) - szybkie wyszukanie po indeksie  </div>
                <div className="t">updatedb - aktualizacja tabeli, żeby znależć nowy folder przez locate </div>
                <div className="t">ln -s (source) (destination)</div>
                <div className="t">ln (source) (target)  - create a hard link </div>
                <div className="t">rm -r (dir name) - removes a directory </div>
                <div className="t">chmod (u/g/o-r/w/x) (file) - remove permission </div>
                <div className="t">chmod (u/g/o+r/w/x) (file) - add permission </div>
                <div className="t">chmod (u+rwx) (file) - add permissions </div>
                <div className="t">chmod (a-r/w/x) (file) - remove for everyone permission </div>
                <div className="t">chmod (0-7/0-7/0-7) (file) -  </div>
                <div className="t">chown (user) (file) - changes the ownership of a file  </div>
                <div className="t">chgrp (user) (file) - changes the group ownership of a file  </div>
                <div className="t">  setfacl -m u:(user):rwx (path) - add permision for a user </div>
                <div className="t">  setfacl -m u:(group):rw (path) - add permision for a group </div>
                <div className="t">  setfacl -dm "entry" (path) - allow all files to inheritt ACL entries from the dir </div>
                <div className="t">  setfacl -x u:(user) (path) - remove specific entry </div>
                <div className="t">  setfacl -b (path) - remove all entries </div>

                <h3>shortcuts</h3>
                <div className="t">ctr + c - get a prompt back</div>

            </div>
            <div class="alternative">

                <div class="schema">

                </div>


            </div>
            <pre class="script">
            </pre>




        </div>
    );
}