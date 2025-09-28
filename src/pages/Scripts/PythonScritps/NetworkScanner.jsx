export default function NetworkScanner() {
    return (
        <div class="script_container">

            <div class="introduction">
                <h2>Network Scanner</h2>
                <ul>
                    <li>Discover all devices on the network</li>
                    <li>Display their IP address</li>
                    <li>Display their MAC address</li>
                </ul>
                <h3>Introduction to ARP Protocol - Link IP address to MAC address</h3>
                <p>Sent a broadcast message, ARP request to a specific MAC address</p>
                <p>Broadcast MAC address - all clients on the same network will receive this packet</p>
                <p>The message will ask who has a specific IP</p>
                <p>Only device with this specific IP will sent a response</p>
                <p>Device will sent its MAC address</p>


            </div>
            <div class="alternative">
                    <h3>Terminal Commands:</h3>
                    <div className="t">netdiscover -r (ip_address)/24</div>
            </div>
            <h2>Python Script:</h2>
            <pre class="script">
                {`  

#!/usr/bin/env python
import scapy.all as scapy
import argparse


def get_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument("-t", "--target", dest="target", help="Target IP / IP range.")
    options = parser.parse_args()
    return options

def scan(ip):
    arp_request = scapy.ARP(pdst=ip)
    broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
    arp_request_broadcast = broadcast/arp_request
    answered_list = scapy.srp(arp_request_broadcast, timeout=1, verbose=False)[0]
    clients_list = []
    for element in answered_list:
        client_dict = {"ip": element[1].psrc, "mac": element[1].hwsrc}
        clients_list.append(client_dict)
    return clients_list

def print_result(results_list):
    print("IP\t\t\tMAC Address\n-------------------------------------")
    for client in results_list:
        print(client["ip"] + "\t\t" + client["mac"])


options = get_arguments()
scan_result = scan(options.target)
print_result(scan_result)

`}</pre>




        </div>
    );
}