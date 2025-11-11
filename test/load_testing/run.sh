echo "Set system limits...."
sudo sysctl -w net.ipv4.ip_local_port_range="1024 65535"
sudo sysctl -w net.ipv4.tcp_tw_reuse=1
sudo sysctl -w net.ipv4.tcp_timestamps=1
sudo ulimit -n 250000
echo "Done"

echo "Start load test...."
k6 run ./script.js
echo "Done"
