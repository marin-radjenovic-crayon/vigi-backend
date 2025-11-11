kubectl create ns hello-namespace

kubectl apply -f deployment.yaml
kubectl describe certificate hello-tls -n hello-namespace
