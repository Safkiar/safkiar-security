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
                <div className="t">touch (filename) - create a file</div>
                <div className="t">mkdir (filename) - create a directory</div>
                <div className="t">cp (old dir) (new dir) - copy a file</div>
                <div className="t">cp -R (filename) (from location) (to location) - copy a directory with other files</div>
                <div className="t">find . -name "(file name)" - szukaj w biężącym kataloru po nazwie</div>
                <div className="t">find / -name "(file name)" - szukaj w całym systemie po nazwie</div>
                <div className="t">locate (file name) - szybkie wyszukanie po indeksie  </div>
                <div className="t">updatedb - aktualizacja tabeli, żeby znależć nowy folder przez locate </div>
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