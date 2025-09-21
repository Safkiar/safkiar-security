export default function MacAddressChange() {
    return (
        <div class="script_container">

            <div class="introduction">

                <h2>MAC Address</h2>
                <h3>Media Access Control</h3>
                <ul>
                    <li>Perrmanent</li>
                    <li>Physical</li>
                    <li>Unique</li>
                </ul>
                <h3>Assigned by manufacturer</h3>

                <p>
                    The MAC address is used within the network to identify devices and transfer data between devices.
                    Each piece of data or packet that is sent within the network contains a source MAC and a destination MAC.
                </p>
                <ul>
                    <li>
                        Source Mac: 00:11:11:11:11:11
                    </li>
                    <li>
                        Destination Mac: 00:22:22:22:22:22
                    </li>
                </ul>

                <h3>Why change the MAC address?</h3>
                <ul>
                    <li>Increase anonymity</li>
                    <li>Impersonate other devices</li>
                </ul>

            </div>
            <div class="alternative">
                <h3>Terminal Commands:</h3>
                <div class="schema">
                    <p>ifconfig</p>
                    <p>ifconfig (interface) down</p>
                    <p>ifconfig (interface) hw ether (mac)</p>
                    <p>ifconfig ifconfig (interface) up</p>
                    <p>ifconfig</p>

                </div>
                <h3>List all the interfaces (network card) on the current computer</h3>
                <p></p>
                <p>for example:</p>
                <ul>
                    <li>eth0 - virtual interface</li>
                    <li>lo - virtual interface created by linux</li>
                    <li>wlan0 - external USB wireless adapter</li>
                </ul>
                <h3>When interface is connected to the network?</h3>
                <ul>
                    <li>IP address is visible "inet 10.20.14.229"</li>
                    <li>netmask and broadcast is visible</li>
                    <li>MAC address will be visible like ether 08:00:27:c5:0d:1c</li>
                </ul>
                <h3>Interface should be disabled: </h3>
                <p>Use command: "ifconfig eth0 down".</p>
                <h3>Assign a new MAC </h3>
                <p> Use command: "fconfig eth0 hw ether 00:11:22:33:44:55".</p>
                <h3>Interface should be enabled</h3>
                <p>Use command: "ifconfig eth0 up".</p>
                <h3>Check a new MAC address</h3>
                <p>Use command "ifconfig".</p>

            </div>
            <h2>Python Script:</h2>
            <pre class="script">
                {`  
#!/usr/bin/env python

import subprocess
import optparse
import re

def get_arguments():
    parser = optparse.OptionParser()
    parser.add_option("-i", "--interface", dest="interface", help="Interface to change its MAC address")
    parser.add_option("-m", "--mac", dest="new_mac", help="New MAC address")
    (options, arguments) = parser.parse_args()
    if not options.interface:
        parser.error("[-] Please specify an interface, use --help for more info.")
    elif not options.new_mac:
        parser.error("[-] Please specify a new mac, use --help for more info.")
    return options

def change_mac(interface, new_mac):
    print("[+] Changing MAC address for " + interface + " to " + new_mac)
    subprocess.call(["ifconfig", interface, "down"])
    subprocess.call(["ifconfig", interface, "hw", "ether", new_mac])
    subprocess.call(["ifconfig", interface, "up"])

def get_current_mac(interface):
    ifconfig_result = subprocess.check_output(["ifconfig", interface])
    mac_address_search_result = re.search(r"\w\w:\w\w:\w\w:\w\w:\w\w", str(ifconfig_result))

    if mac_address_search_result:
        return mac_address_search_result.group(0)
    else:
        print("[-] Could not read MAC address.")

options = get_arguments()

current_mac = get_current_mac(options.interface)
print("Current MAC = " + str(current_mac))

change_mac(options.interface, options.new_mac)

current_mac = get_current_mac(options.interface)
if current_mac == options.new_mac:
    print("[+] MAC address was successfully changed to " + current_mac)
else:
    print("[-] MAC address did not get changed.")

# example
# python3 mac_changer.py -i eth0 -m 00:11:22:33:44:11

`}</pre>




        </div>
    );
}